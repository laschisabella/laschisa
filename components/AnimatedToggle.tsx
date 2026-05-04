import { motion } from "framer-motion";

type Option<T extends string> = {
  key: T;
  label: string;
};

type AnimatedToggleProps<T extends string> = {
  value: T;
  onChange: (val: T) => void;
  options: Option<T>[];
};

export default function AnimatedToggle<T extends string>({
  value,
  onChange,
  options,
}: AnimatedToggleProps<T>) {
  const activeIndex = options.findIndex((o) => o.key === value);
  const GAP = 4;

  return (
    <div className="relative flex rounded-full bg-black/30 py-3 w-40">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute top-1 bottom-1 rounded-full bg-secondary/20 shadow"
        style={{
          width: `calc(${100 / options.length}% - ${GAP * 2}px)`,
          left: `calc(${activeIndex * (100 / options.length)}% + ${GAP}px)`,
        }}
      />

      {options.map((opt) => {
        const active = opt.key === value;

        return (
          <button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className={`flex-1 text-center px-3 py-1 text-sm relative z-10 transition cursor-pointer ${
              active ? "text-white/90 font-bold" : "text-white/70"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
