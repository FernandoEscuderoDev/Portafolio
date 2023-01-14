export default function Skills() {
  const contenidos = [
    {
      titulo: "Skills",
      iconos: [
        {
          src: "icon/html5.png",
          alt: "Html5",
        },
        {
          src: "icon/javascript.png",
          alt: "Javascript",
        },
        {
          src: "icon/css3.png",
          alt: "Css3",
        },
      ],
    },
    {
      titulo: "Resources",
      iconos: [
        {
          src: ["icon/git.png", "icon/npm.png"],
          alt: ["git", "npm"],
        },
      ],
    },
    {
      titulo: "Frameworks",
      iconos: [
        {
          src: ["icon/astro.png", "icon/tailwind.png"],
          alt: ["astro", "tailwind"],
        },
      ],
    },
  ];
  return (
    <>
      {contenidos.map((contenido) => (
        <li className="" key={contenido}>
          <div key={contenido} className="flex flex-col text-center">
            <h2 className="text-3xl p-4 bg-zinc-700">{contenido.titulo}</h2>
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
