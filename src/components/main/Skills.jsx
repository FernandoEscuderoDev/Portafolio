import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function Skills() {
  const contenidos = [
    {
      titulo: "Skills",
      iconos: [
        {
          src: "icon/html5.png",
          alt: "html",
          delay: 0.6,
        },
        {
          src: "icon/css3.png",
          alt: "css",
          delay: 0.7,
        },
        {
          src: "icon/javascript.png",
          alt: "javascript",
          delay: 0.8,
        },
        {
          src: "icon/react.png",
          alt: "react",
          delay: 0.9,
        },
      ],
    },
    {
      titulo: "Resources",
      iconos: [
        {
          src: "icon/git.png",
          alt: "git",
          delay: 0.6,
        },
        {
          src: "icon/npm.png",
          alt: "npm",
          delay: 0.7,
        },
      ],
    },
    {
      titulo: "Frameworks / Libraries",
      iconos: [
        {
          src: "icon/astro.png",
          alt: "astro",
          delay: 0.6,
        },
        {
          src: "icon/tailwind.png",
          alt: "tailwind",
          delay: 0.7,
        },
      ],
    },
  ];
  return (
    <>
      {contenidos.map((contenido) => (
        <li className="" key={contenido}>
          <div className="flex flex-col text-center">
            <div className="p-4 bg-zinc-700 overflow-hidden">
              <motion.h2
                className="text-3xl"
                initial={{ y: "50px" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {contenido.titulo}
              </motion.h2>
            </div>
            <div className="flex justify-center overflow-hidden gap-10">
              {contenido.iconos.map((iconos) => (
                <motion.img
                  width="64px"
                  src={iconos.src}
                  alt={iconos.alt}
                  className="py-8"
                  key={iconos}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: iconos.delay }}
                ></motion.img>
              ))}
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
