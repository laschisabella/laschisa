"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { FieldDescription } from "@/components/ui/field";
import { Code, Link, Mail, Text, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm, FieldError, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./schema";
import { sendContactEmail } from "@/services/email";
import { toast } from "sonner";
import { EmailJSResponseStatus } from "emailjs-com";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import { useI18n } from "@/hooks/useI18n";

type BaseFieldProps = {
  label: string;
  name: keyof ContactFormData;
  placeholder: string;
  icon: React.ReactNode;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
};

function InputField({
  label,
  name,
  placeholder,
  icon,
  register,
  error,
}: BaseFieldProps) {
  return (
    <div className="min-w-0">
      <span className="uppercase text-xs text-secondary tracking-widest font-bold ml-2">
        {label}
      </span>

      <InputGroup className="bg-zinc-100 px-2 py-6 mt-2 min-w-0">
        <InputGroupInput
          placeholder={placeholder}
          className="min-w-0"
          {...register(name)}
        />
        <InputGroupAddon className="mr-2 text-accent shrink-0">
          {icon}
        </InputGroupAddon>
      </InputGroup>

      {error && (
        <FieldDescription className="pt-1 ml-2 text-red-800 dark:text-red-500">
          {error.message}
        </FieldDescription>
      )}
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  icon,
  register,
  error,
}: BaseFieldProps) {
  return (
    <div className="min-w-0">
      <span className="uppercase text-xs text-secondary tracking-widest font-bold ml-2">
        {label}
      </span>

      <InputGroup className="bg-zinc-100 px-2 mt-2 items-start w-full min-w-0">
        <InputGroupTextarea
          placeholder={placeholder}
          className="relative top-1.5 h-30 min-w-0 w-full"
          {...register(name)}
        />
        <InputGroupAddon className="mr-2 text-accent mt-3 shrink-0">
          {icon}
        </InputGroupAddon>
      </InputGroup>

      {error && (
        <FieldDescription className="pt-1 ml-2 text-red-800 dark:text-red-500">
          {error.message}
        </FieldDescription>
      )}
    </div>
  );
}

const CONTACT_ITEMS = [
  {
    icon: <Mail className="text-secondary" />,
    href: "mailto:laschi.isabella@gmail.com",
    label: "laschi.isabella@gmail.com",
  },
  {
    icon: <Link className="text-secondary" />,
    text: "linkedin.com/in/isabella-laschi",
    href: "https://linkedin.com/in/isabella-laschi",
    label: "LinkedIn",
  },
  {
    icon: <Code className="text-secondary" />,
    href: "https://github.com/laschisabella",
    label: "GitHub",
  },
];

export default function ContactPage() {
  const { t } = useI18n();

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
      toast.success(t("contact.formSuccess"), {
        unstyled: true,
        className:
          "flex gap-5 items-center bg-background text-green-700 border border-green-700 px-4 py-3 rounded-lg font-bold",
      });
    } catch (e: unknown) {
      const err = e as EmailJSResponseStatus;

      toast.error(t("contact.formError") + err.text, {
        unstyled: true,
        className:
          "flex gap-5 items-center bg-background text-red-700 border border-red-700 px-4 py-3 rounded-lg font-bold",
      });
    }
  };

  return (
    <section
      id="Contact"
      className="max-w-6xl mx-auto p-4 mt-5 overflow-hidden md:p-20 lg:p-4 lg:my-25"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:gap-20 items-start w-full min-w-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className="lg:w-[50%] w-full flex flex-col gap-8 lg:gap-0 justify-between min-w-0 relative left-5"
        >
          <div className="pb-4">
            <Title
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
            />
          </div>
          <ul className="flex flex-col min-w-0 h-[70%]">
            <div className="my-auto flex flex-col gap-5">
              <span className="text-xl font-semibold">
                {t("contact.contactMethods")}
              </span>
              {CONTACT_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-5 items-center z-10 min-w-0">
                  {item.icon}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-zinc-500 font-bold hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false }}
          className="lg:w-[50%] w-full my-10 lg:my-0 bg-card/75 rounded-[20px] p-6 lg:p-10 flex flex-col gap-5 lg:gap-10 z-10 min-w-0"
        >
          <InputField
            label={t("contact.fields.name")}
            name="name"
            placeholder="John Doe"
            icon={<User />}
            register={register}
            error={errors.name}
          />

          <InputField
            label={t("contact.fields.email")}
            name="email"
            placeholder="john@example.com"
            icon={<Mail />}
            register={register}
            error={errors.email}
          />

          <TextareaField
            label={t("contact.fields.message")}
            name="message"
            placeholder={t("contact.fields.messagePlaceholder")}
            icon={<Text />}
            register={register}
            error={errors.message}
          />

          <Button
            type="submit"
            className="w-full lg:w-fit uppercase self-end text-xs tracking-widest font-bold"
            size="xl"
            variant="accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("contact.actions.sending") : t("contact.actions.submit")}
          </Button>
        </motion.div>
      </form>
    </section>
  );
}
