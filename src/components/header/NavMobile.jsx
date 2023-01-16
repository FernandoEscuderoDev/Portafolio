import ItemsNav from "./ItemsNav.jsx";
import { motion, AnimatePresence  } from "framer-motion";
export default function NavMobile({ event }) {
  const item = {
    exit: {
      opacity: 0,
      x: "100vh",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
      {!event && (
        <motion.ul
          className={`sm:hidden z-10 inline-flex flex-col h-screen items-center justify-center gap-14 absolute top-0 left-0 w-screen bg-zinc-800/80 text-xl font-bold`}
          variants={item}
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type:"spring" }}
          exit="exit"
        >
          <ItemsNav />
          <li className="flex items-center justify-around w-36 text-4xl">
            <a>
              <i className="fa-brands fa-github"></i>
            </a>
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
