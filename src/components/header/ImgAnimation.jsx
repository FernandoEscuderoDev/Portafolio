import { motion } from "framer-motion";
export default function ImgAnimation({ children }) {
  return (
    <motion.div
      className="w-full"
      initial={{scale:0.5, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 1.2, type: 'spring' }}
    >
      {children}
    </motion.div>
  );
}
