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
      src: "https://picsum.photos/200/300?random=4",
      title: "Astro",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
    {
      src: "https://picsum.photos/200/300?random=5",
      title: "Astro",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
    {
      src: "https://picsum.photos/200/300?random=6",
      title: "Astro",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus hic nobis quidem nesciunt culpa exercitationem sed dolorem magni deleniti!",
    },
  ];

  return (
    <main className='grid grid-cols-3 gap-2'>
      {datos.map((dato) => (
        <div
          key={dato}
          className="relative efectoTarjetaPrincipal shadow-xl shadow-zinc-900 rounded-xl w-64 h-80">
          <img
            className="h-full w-full rounded-md object-cover"
            src={dato.src}
          />
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-6 opacity-0 transition-all duration-500 hover:opacity-100 hover:backdrop-blur-sm">
            <h3>Pomodoro</h3>
            <p>Parrafo</p>
          </div>
        </div>
      ))}
    </main>
  );
}
