import { useI18n } from "@/hooks/useI18n";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function ResumeButton({ className }: { className?: string }) {
  const { t, locale } = useI18n();
  const resumeUrl =
    locale === "pt"
      ? "https://docs.google.com/document/d/1mFc209OmdqWt1tfXlaP8-5iXgYPLLY6DNKTVpGFxGRs"
      : "https://docs.google.com/document/d/11Wh6Gvj_PstleGsrQWomtbenJlADd0uCirroDvwajt8";

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={` ` + className}
    >
      <Button
        size="lg"
        variant={"accent"}
        className="text-[12px] uppercase tracking-widest flex gap-3 opacity-70 lg:min-w-52"
      >
        <Download size={20} />
        <span className="hidden md:inline">
          {t("header.downloadResume")}
        </span>
        <span className="md:hidden">
          CV
        </span>
        
      </Button>
    </a>
  );
}