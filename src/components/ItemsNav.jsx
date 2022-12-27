export default function ItemsNav() {
  const links = [
    { name: "Home", src: "./" },
    { name: "Proyect", src: "#proyect" },
    { name: "Contact", src: "./contact" }
  ];
  return (
    <>
      {links.map((link) => (
        <li key={link.src} className={"overflow-hidden after:w-full after:py-[1.5px] after:rounded-r-sm after:bg-manz-500 transition-all ease-in duration-200 after:ease-in after:duration-200 hover:after:right-0 after:absolute after:right-[100%] active:after:right-[100%] after:bottom-0 relative text-zinc-300 hover:text-zinc-100"}>
          <a className={"p-2 font-semibold"} href={link.src}>
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
}
