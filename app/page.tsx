import WorkPage from "./work/page";
import StackPage from "./stack/page";
import ContactPage from "./contact/page";
import { Waves } from "@/components/ui/wave-background";
import Hero from "@/components/layout/Hero";

function WavesBg() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Waves
        strokeColorLight="rgba(255, 255, 255, 0.5)"
        backgroundColorLight="rgba(0, 0, 0, 0.1)"
        strokeColorDark="rgba(75, 76, 104, 0.2)"
        backgroundColorDark="transparent"
        pointerSize={0}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden md:overflow-auto">
      <WavesBg />
      <Hero />
      <WorkPage />
      <StackPage />
      <ContactPage />
    </div>
  );
}
