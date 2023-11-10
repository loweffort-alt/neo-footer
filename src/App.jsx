import "./App.css";
import Afiliaciones from "./components/Afiliaciones";
import Partners from "./components/Partners";
import Premios from "./components/Premios";
import RedesSociales from "./components/RedesSociales";
import FooterMenu from "./components/FooterMenu";

function reveal() {
  var elementReveal = document.querySelectorAll(".reveal");

  for (var i = 0; i < elementReveal.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = elementReveal[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      elementReveal[i].classList.add("active");
    } else {
      elementReveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {
  const footerLinks = {
    services: {
      "Analítica Digital e Inteligencia Artificial": "/",
      "Canales Digitales y Growth Hacking": "/",
      "Consultoría CRM": "/",
      "Diseño de Experiencia": "/",
      "E-commerce": "/",
      "Headhunting y Mentoring": "/",
      "Marketing Automation": "/",
      "Publicidad Digital": "/",
    },
    about: { "Sobre nosotros": "/", "Trabaja en Neo": "/", "Guía Bcorp": "/" },
    countries: { Perú: "/", Colombia: "/", Chile: "/", México: "/" },
    resources: { Blog: "/", Descargables: "/" },
  };

  return (
    <>
      <section className="h-screen flex justify-center items-center font-bold text-3xl">
        <span>Scroll Down</span>
      </section>
      <section className="flex flex-col justify-between w-full min-[1200px]:flex-row reveal">
        <FooterMenu links={footerLinks.services} name="Servicios" />
        <FooterMenu links={footerLinks.about} name="Sobre NEO" />
        <FooterMenu links={footerLinks.countries} name="Países" />
        <FooterMenu links={footerLinks.resources} name="Recursos" />
      </section>
      <section className="grid-container items-center pt-10">
        <RedesSociales />
        <Premios />
        <Afiliaciones />
        <Partners />
      </section>
      <section className="border-b-black border-b-2 my-10"></section>
    </>
  );
}

export default App;
