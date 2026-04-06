import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex justify-between px-10 md:px-20 h-[8vh] items-center">
      <div>laschisa.dev</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Work</li>
          <li>Tech Stack</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <div>lang</div>
        <div>mode</div>
        <Button size="lg" variant="default">
          Download Resume
        </Button>
      </div>
    </header>
  );
}
