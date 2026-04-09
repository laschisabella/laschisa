import WorkPage from "./work/page";
import StackPage from "./stack/page";
import ContactPage from "./contact/page";
import { Waves } from "@/components/ui/wave-background"
import Hero from "@/components/layout/Hero";

function WavesBg() {
  return (
    <div className="fixed inset-0 w-full h-full opacity-10">
      <Waves className="w-full h-full" pointerSize={0}/>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <WavesBg />
      <Hero />
      <WorkPage />
      <StackPage />
      <ContactPage />
    </>
  );
}
