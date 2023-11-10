import "./App.css";
import FooterLinks from "./components/footerLinks";

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
      <section className="flex flex-col justify-between w-full xl:flex-row">
        <FooterLinks links={footerLinks.services} name="Servicios" />
        <FooterLinks links={footerLinks.about} name="Sobre NEO" />
        <FooterLinks links={footerLinks.countries} name="Países" />
        <FooterLinks links={footerLinks.resources} name="Recursos" />
      </section>
      <section className="grid-container items-center pt-10">
        <div>
          <div className="flex flex-col items-center xl:items-start">
            <h3 className="font-bold text-2xl leading-[24px] pb-3">
              Redes Sociales
            </h3>
            <div className="grid grid-cols-4 w-full justify-items-center">
              <div>
                <a href="/">
                  <img
                    src="https://neoconsulting.ai/_next/static/media/yt.6d379bf7.svg"
                    alt="youtube_icon"
                  />
                </a>
              </div>
              <div>
                <a href="/">
                  <img
                    src="https://neoconsulting.ai/_next/static/media/fb.04f8f308.svg"
                    alt="facebook_icon"
                  />
                </a>
              </div>
              <div>
                <a href="/">
                  <img
                    src="https://neoconsulting.ai/_next/static/media/linkedin.1324237f.svg"
                    alt="linkedin_icon"
                  />
                </a>
              </div>
              <div>
                <a href="/">
                  <img
                    src="https://neoconsulting.ai/_next/static/media/insta.a4b9e375.svg"
                    alt="instagram_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="prices">
          <div className="flex flex-col items-center xl:items-start wea">
            <h3 className="font-bold text-2xl leading-[24px] pb-3 text-center">
              Premios y reconocimientos
            </h3>
            <div className="grid grid-cols-4 w-full justify-items-center gap-5">
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/eccom-award-2020.bb9a1ce4.png"
                  alt="price1"
                  width="144px"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/eccom-award-2021.b40590e6.png"
                  alt="price2"
                  width="144px"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/Sello-Ganador-2023.bb3700e2.png"
                  alt="price3"
                  width="144px"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/empresa.2ef3d25b.png"
                  alt="price4"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl leading-[24px] pb-3">
              Afiliaciones
            </h3>
            <div className="grid grid-cols-1 w-full justify-items-center">
              <img
                src="https://neoconsulting.ai/_next/static/media/afiliation.b10a5da4.png"
                alt="price1"
              />
            </div>
          </div>
        </div>
        <div className="partner">
          <div className="flex flex-col items-center xl:items-start">
            <h3 className="font-bold text-2xl leading-[24px] pb-3">
              Somos Partners
            </h3>
            <div className="grid grid-cols-4 w-full justify-items-center">
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/google-marketing-platform.eb4d11ee.png"
                  alt="partner1"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/salesforce.493e79fd.png"
                  alt="partner2"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/hubspot.d01d3ddd.png"
                  alt="partner3"
                />
              </div>
              <div>
                <img
                  src="https://neoconsulting.ai/_next/static/media/google-cloud.49b39be1.png"
                  alt="partner4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b-black border-b-2 my-10"></section>
    </>
  );
}

export default App;
