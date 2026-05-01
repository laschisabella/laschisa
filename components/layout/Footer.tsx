import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex items-center px-3 lg:px-20 h-[8vh] mb-4 lg:mb-0">
      <div className="lg:max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full">
        <div className="text-zinc-400 text-xs font-bold  tracking-wide lg:tracking-widest">
          © 2026 LASCHISA.DEV • BUILD WITH INTENTIONALITY
        </div>

        <div className="flex items-center z-50">
          <a
            href="https://linkedin.com/in/isabella-laschi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="ghost"
              className="uppercase tracking-wide text-accent text-xs font-bold"
            >
              linkedin
            </Button>
          </a>

          <a href="mailto:laschi.isabella@gmail.com">
            <Button
              size="lg"
              variant="ghost"
              className="uppercase tracking-wide text-accent text-xs font-bold"
            >
              mail
            </Button>
          </a>

          <a
            href="https://github.com/laschisabella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="ghost"
              className="uppercase tracking-wide text-accent text-xs font-bold"
            >
              github
            </Button>
          </a>

          <a
            href="https://github.com/laschisabella/laschisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="ghost"
              className="uppercase tracking-wide text-accent text-xs font-bold"
            >
              source code
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}