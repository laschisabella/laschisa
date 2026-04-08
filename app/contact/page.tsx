"use client";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea, } from "@/components/ui/input-group";
import { FieldDescription } from "@/components/ui/field";
import { Code, Link, Mail, Text, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm, FieldError, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./schema";
import { sendContactEmail } from "@/services/email";
import { toast } from "sonner";
import { EmailJSResponseStatus } from "emailjs-com";

type BaseFieldProps = {
  label: string;
  name: keyof ContactFormData;
  placeholder: string;
  icon: React.ReactNode;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
};

function InputField({ label, name, placeholder, icon, register, error, }: BaseFieldProps) {
  return (
    <div>
      <span className="uppercase text-xs text-secondary tracking-widest font-bold relative left-2">
        {label}
      </span>

      <InputGroup className="bg-zinc-100 px-2 py-6 mt-2">
        <InputGroupInput placeholder={placeholder} {...register(name)} />
        <InputGroupAddon className="mr-2 text-accent">
          {icon}
        </InputGroupAddon>
      </InputGroup>

      {error && (
        <FieldDescription className="pt-1 left-2 text-red-800">
          {error.message}
        </FieldDescription>
      )}
    </div>
  );
}

function TextareaField({ label, name, placeholder, icon, register, error, }: BaseFieldProps) {
  return (
    <div>
      <span className="uppercase text-xs text-secondary tracking-widest font-bold relative left-2">
        {label}
      </span>

      <InputGroup className="bg-zinc-100 px-2 mt-2 items-start max-w-md">
        <InputGroupTextarea
          placeholder={placeholder} 
          className="relative top-1.5 h-30"
          {...register(name)}
        />
        <InputGroupAddon className="mr-2 text-accent mt-3">
          {icon}
        </InputGroupAddon>
      </InputGroup>

      {error && (
        <FieldDescription className="pt-1 left-2 text-red-800">
          {error.message}
        </FieldDescription>
      )}
    </div>
  );
}

const CONTACT_ITEMS = [
  {
    icon: <Mail className="text-secondary" />,
    text: "laschi.isabella@gmail.com",
  },
  {
    icon: <Link className="text-secondary" />,
    text: "linkedin.com/in/isabella-laschi",
  },
  {
    icon: <Code className="text-secondary" />,
    text: "github.com/laschisabella",
  },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactEmail(data);
      reset();
      toast.success("Message sent successfully.", {
        unstyled: true,
        className: "flex gap-5 items-center bg-background text-green-700 border border-green-700 px-4 py-3 rounded-lg font-bold",
      })
    } catch (e: unknown) {
      const err = e as EmailJSResponseStatus;

      toast.error("Failed to send message: " + err.text,{
        unstyled: true,
        className: "flex gap-5 items-center bg-background text-red-700 border border-red-700 px-4 py-3 rounded-lg font-bold",
      })
    }
  };

  return (
    <section
      id="Contact"
      className="max-w-6xl mx-auto flex justify-center items-center my-10 md:my-30"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex md:gap-20 items-center"
      >
        <div className="w-[50%] flex flex-col gap-10 ml-4">
          <h1 className="text-5xl font-semibold mb-3 leading-14">
            Let&apos;s architect the
            <span className="text-primary"> next standard</span> of digital engineering.
          </h1>

          <p className="text-zinc-500">
            Currently open for senior full-stack engineering roles and strategic consulting.
          </p>

          <ul className="flex flex-col gap-5 mt-5">
            {CONTACT_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-5 items-center">
                {item.icon}
                <span className="ml-2 text-zinc-500 font-bold">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[50%] bg-secondary/5 rounded-[20px] p-10 flex flex-col gap-10">
          <InputField
            label="full name"
            name="name"
            placeholder="John Doe"
            icon={<User />}
            register={register}
            error={errors.name}
          />

          <InputField
            label="email address"
            name="email"
            placeholder="john@example.com"
            icon={<Mail />}
            register={register}
            error={errors.email}
          />

          <TextareaField
            label="message"
            name="message"
            placeholder="Your message here..."
            icon={<Text />}
            register={register}
            error={errors.message}
          />

          <Button
            type="submit"
            className="w-fit"
            size="xl"
            variant="accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
}