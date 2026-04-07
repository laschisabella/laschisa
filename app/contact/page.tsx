import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { FieldDescription } from "@/components/ui/field";
import { Code, Link, Mail, Text, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section id="Contact" className="max-w-6xl mx-auto flex justify-center items-center my-10 md:my-20">
      <div className="flex md:gap-20 items-center">
        <div className="w-[50%] flex flex-col gap-10 ml-4">
          <h1 className="text-5xl font-semibold mb-3 leading-14">
            Let&apos;s architect the
            <span className="text-primary"> next standard</span> of digital
            engineering.
          </h1>

          <p className="text-zinc-500">
            Currently open for senior full-stack engineering roles and strategic consulting.
            Based in the intersection of high-performance systems and editorial aesthetics.
          </p>

          <div>
            <span className="text-xs text-accent uppercase tracking-widest font-bold">
              digital ecosystem
            </span>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex gap-5 items-center">
                <Mail className="text-secondary" />{" "}
                <span className="ml-2 text-zinc-500 font-bold">
                  laschi.isabella@gmail.com
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <Link className="text-secondary" />{" "}
                <span className="ml-2 text-zinc-500 font-bold">
                  linkedin.com/in/isabella-laschi
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <Code className="text-secondary" />{" "}
                <span className="ml-2 text-zinc-500 font-bold">
                  github.com/laschisabella
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[50%] bg-secondary/5 rounded-[20px] p-10 flex flex-col gap-10">
          <div>
            <span className="uppercase text-xs text-secondary tracking-widest font-bold relative left-2">
              full name
            </span>
            <InputGroup className="bg-zinc-100 px-2 py-6 mt-2">
              <InputGroupInput
                placeholder="John Doe"
                className="placeholder:text-zinc-400"
              />
              <InputGroupAddon className="mr-2 text-accent">
                <User />
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription className="pt-1 relative left-2 text-red-800">
              Header positioned above the textarea.
            </FieldDescription>
          </div>
          <div>
            <span className="uppercase text-xs text-secondary tracking-widest font-bold relative left-2">
              email address
            </span>
            <InputGroup className="bg-zinc-100 px-2 py-6 mt-2">
              <InputGroupInput
                placeholder="john@example.com"
                className="placeholder:text-zinc-400"
              />
              <InputGroupAddon className="mr-2 text-accent">
                <Mail />
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription className="pt-1 relative left-2 text-red-800">
              Header positioned above the textarea.
            </FieldDescription>
          </div>
          <div>
            <span className="uppercase text-xs text-secondary tracking-widest font-bold relative left-2">
              message
            </span>
            <InputGroup className="bg-zinc-100 px-2 mt-2 items-start">
              <InputGroupTextarea
                placeholder="Your message here..."
                className="placeholder:text-zinc-400 mt-1 h-30"
                rows={4}
              />
              <InputGroupAddon
                align="inline-start"
                className="mr-2 text-accent mt-2"
              >
                <Text />
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription className="pt-1 relative left-2 text-red-800">
              Header positioned above the textarea.
            </FieldDescription>
          </div>
          <Button className="w-fit" size={"xl"} variant="accent">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
