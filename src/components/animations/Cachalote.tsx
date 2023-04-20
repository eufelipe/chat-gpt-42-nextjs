import { motion } from "framer-motion";
import Image from "next/image";

export default function Cachalote() {
  return (
    <div className="absolute z-10  top-0 left-0 w-full h-full">
      <motion.div
        className="absolute top-0 left-10 -translate-x-1/2"
        animate={{ y: "100vh" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        initial={{ y: "-80vh" }}
        exit={{ y: "-10vh" }}
      >
        <Image
          src="/cachalote.svg"
          alt="olá, chão 👋"
          width={800}
          height={300}
        />
      </motion.div>
    </div>
  );
}
