export default function Skills() {
  const contenidos = [
    {
      titulo: "Skills",
      iconos: [
        {
          src: [
            "icon/html5.png",
            "icon/css3.png",
            "icon/javascript.png",
            "icon/react.png",
          ],
          alt: ["html5", "css3", "javascript", "react"],
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
