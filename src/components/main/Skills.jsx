import { motion } from "framer-motion";
export default function Skills() {
  const contenidos = [
    {
      titulo: "Skills",
      iconos: [
        {
          src: "icon/html5.png",
          alt: "html",
        },
        {
          src: "icon/css3.png",
          alt: "css",
        },
        {
          src: "icon/javascript.png",
          alt: "javascript",
        },
        {
          src: "icon/react.png",
          alt: "react",
        },
      ],
    },
    {
      titulo: "Resources",
      iconos: [
        {
          src: "icon/git.png",
          alt: "git",
        },
        {
          src: "icon/npm.png",
          alt: "npm",
        },
      ],
    },
    {
      titulo: "Frameworks / Librery",
      iconos: [
        {
          src: "icon/astro.png",
          alt: "astro",
        },
        {
          src: "icon/tailwind.png",
          alt: "tailwind",
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
                animate={{ y: 0}}
              >
                {contenido.titulo}
              </motion.h2>
            </div>
            <div className="flex justify-center gap-10">
              {contenido.iconos.map((iconos) => (
                <img
                  width="64px"
                  src={iconos.src}
                  alt={iconos.alt}
                  className="py-8"
                  key={iconos}
                ></img>
              ))}
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
