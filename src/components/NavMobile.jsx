import ItemsNav from "./ItemsNav.jsx";
export default function NavMobile({event}) {
  return (
    <ul
      className={`sm:hidden transition-all ease-in duration-300 z-10 flex flex-col items-center justify-center gap-14 absolute
          ${event}
          top-0  w-full h-full bg-zinc-800/80 text-xl font-bold`}
    >
      <ItemsNav/>
      <li className="flex items-center justify-around w-36 text-4xl">
        <a>
          <i className="fa-brands fa-github"></i>
        </a>
        <a>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
    </ul>
  );
}
