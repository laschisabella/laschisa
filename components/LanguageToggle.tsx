import { useI18n } from "@/hooks/useI18n";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { locale, changeLocale } = useI18n();

  const isPt = locale === "pt";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => changeLocale(isPt ? "en" : "pt")}
      className={`
        flex items-center gap-2 rounded-xl border px-3 cursor-pointer
        transition-colors duration-200
        ${
          isPt
            ? "border-transparent bg-brand/80 dark:bg-brand/80 text-zinc-300"
            : "border-transparent bg-brand/80 dark:bg-brand/80 text-zinc-300"
        }
      `}
    >
      <motion.div
        animate={{
          rotate: isPt ? 360 : 0,
          scale: isPt ? 1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Languages size={18} />
      </motion.div>

      <span className="text-sm">
        {isPt ? "PT" : "EN"}
      </span>
    </motion.button>
  );
}