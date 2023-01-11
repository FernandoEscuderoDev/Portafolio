import { motion } from "framer-motion";
export default function Logo() {
  return (
    <a
      href=""
      className={`flex flex-row items-center text-4xl before:text-manz-500 before:content-['<']  after:text-manz-500 after:content-['>'] before:font-bold after:font-bold`}
    >
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0px" }}
        animate={{
          width: "100%",
        }}
        transition={{ delay: 0.15, duration: 1.5, ease: "easeInOut" }}
      >
        <h1>FernDev</h1>
      </motion.div>
    </a>
  );
}
