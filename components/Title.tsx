export default function Title({title, subtitle}: {title?: string, subtitle?: string}) {
  return (
    <header className="mt-10 md:mt-20 mb-10 md:mb-16 ml-2">
      <h1 className="text-3xl font-semibold mb-3">{title}</h1>
      <div className="h-1.5 w-20 bg-primary" />
      <p className="text-zinc-500 my-3 break-words">
        {subtitle}
      </p>
    </header>
  );
}