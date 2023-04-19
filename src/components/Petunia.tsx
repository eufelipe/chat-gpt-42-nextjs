import { motion } from "framer-motion";
import Image from "next/image";

export default function Petunia() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute top-0 right-10 -translate-x-1/2"
        animate={{ y: "100vh" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        initial={{ y: "-100vh" }}
        exit={{ y: "-10vh" }}
      >
        <Image src="/petunia.svg" alt="Cachalote" width={80} height={80} />
      </motion.div>
    </div>
  );
}
