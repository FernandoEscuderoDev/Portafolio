import ItemsNav from "./ItemsNav.jsx";
import { motion, AnimatePresence } from "framer-motion";
export default function NavMobile({ event }) {
  const item = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <AnimatePresence>
      {!event && (
        <motion.ul
          className={`sm:hidden z-10 inline-flex flex-col h-screen items-center justify-center gap-14 absolute top-0 left-0 w-screen bg-zinc-800/95 text-xl font-bold`}
          variants={item}
          initial={{  opacity: 0 }}
          animate={{  opacity: 1 }}
          transition={{ duration: 0.2}}
          exit="exit"
        >
          <ItemsNav />
          <li className="flex items-center justify-around w-36 text-4xl">
            <a href="https://github.com/FernandoEscuderoDev">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/fernandoescuderodev/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
