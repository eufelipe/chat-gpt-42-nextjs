import { motion } from "framer-motion";

export default function Cloud() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: "url(/cloud.png)" }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  );
}
