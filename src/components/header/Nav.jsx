import ItemsNav from "./ItemsNav.jsx";
import NavMobile from "./NavMobile.jsx";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo.jsx";
export default function Nav() {
  const [Open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!Open);
  };
  return (
    <nav className="font-mono container my-2">
      <div className="flex flex-row items-center justify-between p-5 w-full">
        <div className="flex w-full justify-between">
          <Logo />
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.5, ease: "easeInOut" }}
            className="sm:flex gap-5 hidden items-center text-lg font-medium"
          >
            <ItemsNav />
          </motion.ul>
          <button
            className="sm:hidden block z-20 active:bg-zinc-700/30 px-2 rounded-full text-2xl"
            onClick={handleClick}
          >
            <i
              className={`hover:text-slate-300/90 transition-all duration-200 ${
                Open ? "fa-solid fa-bars" : "fa-solid fa-x"
              }`}
            ></i>
          </button>
        </div>
        <NavMobile event={Open} />
      </div>
    </nav>
  );
}
