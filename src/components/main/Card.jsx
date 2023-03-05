import { motion } from "framer-motion";
export default function Card() {
  const datos = [
    {
      src: "/img/portafolio.png",
      title: "Portafolio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "#",
    },
    {
      src: "/img/pomodoro.png",
      title: "Pomodoro",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "https://pomodoro-ferndev.vercel.app/",
    },
    {
      src: "/img/encriptador.png",
      title: "Encriptador Alura",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "https://fernandoescuderodev.github.io/EncriptadorAlura/",
    },
    {
      src: "/img/frontmentor.png",
      title: "Frontend Mentor - QR code",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "https://fernandoescuderodev.github.io/frontend-mentor-challenges-qr/",
    },
    {
      src: "/img/calculadora.png",
      title: "Calculadora",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "https://fernandoescuderodev.github.io/Calculadora-js/",
    },
    {
      src: "/img/cuidarte.png",
      title: "Cuidarte",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
      link: "https://fernandoescuderodev.github.io/Cuidarte/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2">
      {datos.map((dato) => (
        <a
          key={dato}
          href={dato.link} target="_blank"
          className="relative shadow-xl shadow-zinc-900 rounded-xl w-64 h-80"
        >
          <img
            className="h-full w-full rounded-md object-cover"
            src={dato.src}
          />
          <motion.div
            className="absolute z-50 opacity-0 bg-zinc-800/60 rounded-md top-0 flex h-full w-full text-center flex-col items-center justify-center gap-6"
            whileHover={{
              backdropFilter: "blur(4px)",
              opacity: 1,
              transition: { duration: 0.2 },
            }}
          >
            <h3 className="text-manz-500">{dato.title}</h3>
            <p className="text-sm w-3/4">{dato.content}</p>
          </motion.div>
        </a>
      ))}
    </div>
  );
}
