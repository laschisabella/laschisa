import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex items-center px-10 md:px-20 h-[8vh] bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="text-zinc-400 text-xs font-bold tracking-widest">© 2026 LASCHISA.DEV • BUILD WITH INTENTIONALITY</div>
        <div className="flex gap-3 items-center ">
          <Button size="lg" variant="ghost" className="uppercase tracking-wide text-accent text-xs font-bold">
            linkedin
          </Button>
          <Button size="lg" variant="ghost" className="uppercase tracking-wide text-accent text-xs font-bold">
            mail
          </Button>
          <Button size="lg" variant="ghost" className="uppercase tracking-wide text-accent text-xs font-bold">
            github
          </Button>
          <Button size="lg" variant="ghost" className="uppercase tracking-wide text-accent text-xs font-bold">
            source code
          </Button>
        </div>
      </div>
    </footer>
  );
}
