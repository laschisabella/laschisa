import { useTheme } from "@/providers/ThemeProvider";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer
        transition-colors duration-200
        ${
          isDark
            ? "border-transparent bg-[#495f69]/80 text-zinc-300"
            : "border-transparent bg-secondary/80 text-zinc-100"
        }
      `}
    >
      <motion.div
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}