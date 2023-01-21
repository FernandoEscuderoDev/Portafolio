import Logo from "../header/Logo";

export default function Footer() {
  return (
    <footer className="container flex flex-col gap-10 md:flex-row items-center md:justify-between w-full py-2">
      <div className="flex items-center w-48 justify-around text-4xl">
        <a href="https://www.linkedin.com/in/fernandoescuderodev/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/FernandoEscuderoDev">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <p className="text-center">
          Creado con <i className="fa-solid fa-heart fa-beat text-red-500 mx-1"></i> por <Logo/>
        </p>
      </div>
    </footer>
  );
}
