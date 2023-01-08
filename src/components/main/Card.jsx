export default function Card() {
  const datos = [
    {
      src: "https://picsum.photos/200/300?random=1",
      title: "Html",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
    {
      src: "https://picsum.photos/200/300?random=2",
      title: "Css",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
    {
      src: "https://picsum.photos/200/300?random=3",
      title: "JavaScript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
    {
      src: "https://picsum.photos/200/300?random=3",
      title: "Astro",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
  ];

  return (
    <>
      {datos.map((datos) => (
        <div className="relative efectoTarjetaPrincipal shadow-xl shadow-zinc-900 rounded-xl w-64 h-80">
          <div className="absolute h-full w-full flex items-center justify-evenly flex-col z-50 text-center text-zinc-100">
            <img
              src={datos.src}
              className="object-cover rounded-full w-28 h-28 shadow-lg shadow-zinc-900"
            />
            <h1 className="font-bold text-2xl">{datos.title}</h1>
            <p className="text-sm w-[80%]">{datos.content}
            </p>
          </div>
          <div className="efectoTarjeta rounded-xl w-full h-full"></div>
        </div>
      ))}
    </>
  );
}
