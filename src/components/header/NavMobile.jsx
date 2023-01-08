import ItemsNav from "./ItemsNav.jsx";
import { motion } from "framer-motion";
export default function NavMobile({ event }) {
  const variants = {
    open: {
      x:"100vw"
    },
    closed: {
      x: "0",
      }
    }
  return (
    <motion.ul
      className={`sm:hidden z-10 inline-flex flex-col items-center justify-center gap-14 absolute top-0 left-0  w-screen h-screen bg-zinc-800/80 text-xl font-bold`}
      initial={{x:"100vw"}}
      animate={{}}
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
