import { motion } from "framer-motion";
export default function ImgAnimation({ children }) {
  return (
    <motion.div
      className="w-full"
      initial={{scale:0, opacity: 0}}
      animate={{scale: 1}}
      transition={{ duration: 1.3 }}
      whileInView={{opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
