import FooterLinks from "./Footer-Links";

const FooterMenu = () => {
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
      <FooterLinks links={footerLinks.services} name="Servicios" />
      <FooterLinks links={footerLinks.about} name="Sobre NEO" />
      <FooterLinks links={footerLinks.countries} name="Países" />
      <FooterLinks links={footerLinks.resources} name="Recursos" />
    </>
  );
};

export default FooterMenu;
