'use client'
import * as React from 'react'
import { useEffect, useRef, useState, useCallback } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
  x: number
  y: number
  wave: { x: number; y: number }
  cursor: {
    x: number
    y: number
    vx: number
    vy: number
  }
}

interface WavesProps {
  className?: string
  strokeColorLight?: string
  strokeColorDark?: string
  backgroundColorLight?: string
  backgroundColorDark?: string
  pointerSize?: number
}

export function Waves({
  className = "",
  strokeColorLight = "#000000",
  strokeColorDark = "#ffffff",
  backgroundColorLight = "#ffffff",
  backgroundColorDark = "#000000",
  pointerSize = 0.5
}: WavesProps) {

  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const [isDark, setIsDark] = useState(false)

  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  })

  const pathsRef = useRef<SVGPathElement[]>([])
  const linesRef = useRef<Point[][]>([])
  const noiseRef = useRef(createNoise2D())
  const rafRef = useRef<number | null>(null)
  const boundingRef = useRef<DOMRect | null>(null)

  const strokeColor = isDark ? strokeColorDark : strokeColorLight
  const backgroundColor = isDark ? backgroundColorDark : backgroundColorLight

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  const setSize = useCallback(() => {
    if (!containerRef.current || !svgRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    boundingRef.current = rect

    svgRef.current.style.width = `${rect.width}px`
    svgRef.current.style.height = `${rect.height}px`
  }, [])

  const setLines = useCallback(() => {
    if (!svgRef.current || !boundingRef.current) return

    const { width, height } = boundingRef.current
    pathsRef.current.forEach(p => p.remove())
    pathsRef.current = []
    linesRef.current = []

    const xGap = 8
    const yGap = 8

    const oWidth = width + 200
    const oHeight = height + 30

    const totalLines = Math.ceil(oWidth / xGap)
    const totalPoints = Math.ceil(oHeight / yGap)

    const xStart = (width - xGap * totalLines) / 2
    const yStart = (height - yGap * totalPoints) / 2

    for (let i = 0; i < totalLines; i++) {
      const points: Point[] = []

      for (let j = 0; j < totalPoints; j++) {
        points.push({
          x: xStart + xGap * i,
          y: yStart + yGap * j,
          wave: { x: 0, y: 0 },
          cursor: { x: 0, y: 0, vx: 0, vy: 0 },
        })
      }

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('fill', 'none')
      path.setAttribute('stroke', strokeColor)
      path.setAttribute('stroke-width', '1')

      svgRef.current.appendChild(path)
      pathsRef.current.push(path)
      linesRef.current.push(points)
    }
  }, [strokeColor])

  const onResize = useCallback(() => {
    setSize()
    setLines()
  }, [setSize, setLines])

  const updateMousePosition = (x: number, y: number) => {
    const mouse = mouseRef.current

    mouse.x = x
    mouse.y = y

    if (!mouse.set) {
      mouse.sx = x
      mouse.sy = y
      mouse.lx = x
      mouse.ly = y
      mouse.set = true
    }

    if (containerRef.current) {
      containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
      containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
    }
  }

  const movePoints = (time: number) => {
    const noise = noiseRef.current

    linesRef.current.forEach(points => {
      points.forEach(p => {
        const move = noise(
          (p.x + time * 0.008) * 0.003,
          (p.y + time * 0.003) * 0.002
        ) * 8

        p.wave.x = Math.cos(move) * 12
        p.wave.y = Math.sin(move) * 6

        const mouse = mouseRef.current
        const dx = p.x - mouse.sx
        const dy = p.y - mouse.sy
        const d = Math.hypot(dx, dy)
        const l = Math.max(175, mouse.vs)

        if (d < l) {
          const s = 1 - d / l
          const f = Math.cos(d * 0.001) * s

          p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035
          p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035
        }

        p.cursor.vx += (0 - p.cursor.x) * 0.01
        p.cursor.vy += (0 - p.cursor.y) * 0.01

        p.cursor.vx *= 0.95
        p.cursor.vy *= 0.95

        p.cursor.x += p.cursor.vx
        p.cursor.y += p.cursor.vy
      })
    })
  }

  const drawLines = () => {
    linesRef.current.forEach((points, i) => {
      const path = pathsRef.current[i]
      if (!path) return

      let d = `M ${points[0].x} ${points[0].y}`

      for (let j = 1; j < points.length; j++) {
        const p = points[j]
        d += `L ${p.x + p.wave.x + p.cursor.x} ${p.y + p.wave.y + p.cursor.y}`
      }

      path.setAttribute('d', d)
    })
  }

  const tick = (time: number) => {
    const mouse = mouseRef.current

    mouse.sx += (mouse.x - mouse.sx) * 0.1
    mouse.sy += (mouse.y - mouse.sy) * 0.1

    const dx = mouse.x - mouse.lx
    const dy = mouse.y - mouse.ly
    const d = Math.hypot(dx, dy)

    mouse.v = d
    mouse.vs += (d - mouse.vs) * 0.1
    mouse.vs = Math.min(100, mouse.vs)

    mouse.lx = mouse.x
    mouse.ly = mouse.y
    mouse.a = Math.atan2(dy, dx)

    movePoints(time)
    drawLines()

    rafRef.current = requestAnimationFrame(tick)
  }
  
  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return

    setSize()
    setLines()

    window.addEventListener('resize', onResize)

    window.addEventListener('mousemove', e =>
      updateMousePosition(e.clientX, e.clientY)
    )

    containerRef.current.addEventListener('touchmove', e => {
      e.preventDefault()
      const t = e.touches[0]
      updateMousePosition(t.clientX, t.clientY)
    }, { passive: false })

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [setLines, setSize, onResize])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor,
        width: '100%',
        height: '100%',
        '--x': '-0.5rem',
        '--y': '50%',
      } as React.CSSProperties}
    >
      <svg ref={svgRef} className="w-full h-full" />

      <div
        style={{
          position: 'absolute',
          width: `${pointerSize}rem`,
          height: `${pointerSize}rem`,
          background: strokeColor,
          borderRadius: '50%',
          transform: 'translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)',
        }}
      />
    </div>
  )
}