import "./App.css";
import Afiliaciones from "./components/Afiliaciones";
import FooterMenu from "./components/FooterMenu";
import Partners from "./components/Partners";
import Premios from "./components/Premios";
import RedesSociales from "./components/RedesSociales";

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
  return (
    <>
      <section className="h-screen flex justify-center items-center font-bold text-3xl">
        <span>Scroll Down</span>
      </section>
      <section className="flex flex-col justify-between w-full min-[1200px]:flex-row reveal">
        <FooterMenu />
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
