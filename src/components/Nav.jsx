import ItemsNav from "./ItemsNav.jsx";
import NavMobile from "./NavMobile.jsx";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Nav() {
  const [Open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!Open);
  };
  return (
    <nav className="font-mono container my-2">
      <div className="flex flex-row items-center justify-between p-5 w-full">
        <div className="flex w-full justify-between">
          <a href="" className="h-full flex items-start text-4xl before:text-manz-500 before:content-['<'] after:text-manz-500 after:content-['>'] before:font-bold after:font-bold">
            <motion.div
              className="overflow-hidden"
              initial={{ width: "0px" }}
              animate={{
                width: "100%",
              }}
              transition={{ delay:0.3 ,duration: 1.5, ease:"easeInOut" }}
            >
              <h1>FernDev</h1>
            </motion.div>
          </a>
          <ul className="sm:flex gap-5 hidden h-full text-lg font-medium">
            <ItemsNav />
          </ul>
          <button
            className="sm:hidden block z-20 active:bg-zinc-700/90 px-2 rounded-full text-2xl"
            onClick={handleClick}
          >
            <i
              className={
                Open ? "fa-solid fa-bars" : "fa-solid fa-x text-manz-500"
              }
            ></i>
          </button>
        </div>
        <NavMobile event={Open ? "left-[100vw] " : "left-0"} />
      </div>
    </nav>
  );
}
