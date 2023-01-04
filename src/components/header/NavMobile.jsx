import ItemsNav from "./ItemsNav.jsx";
import { motion } from "framer-motion";
export default function NavMobile({ event }) {
  const variants = {
    open: {
      x:"100vh"
    },
    closed: {
      x: "0",
      }
    }
  return (
    // <ul
    //   className={`sm:hidden transition-all ease-in duration-300 z-10 flex flex-col items-center justify-center gap-14 absolute
    //       ${event}
    //       top-0  w-full h-screen bg-zinc-800/80 text-xl font-bold `}
    //
    //   <ItemsNav />
    <motion.ul
      className={`sm:hidden z-10 inline-flex flex-col items-center justify-center gap-14 absolute top-0  w-full h-screen bg-zinc-800/80 text-xl font-bold`}
      initial={{}}
      animate={{event}}
      transition={{duration:1.2, type:"spring"}}
      variants={{variants}}
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
    // </ul>
  );
}
