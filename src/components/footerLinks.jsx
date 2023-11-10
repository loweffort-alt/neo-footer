const FooterLinks = (e) => (
  <li
    key={e[0]}
    className="pb-2 hover:cursor-pointer hover:underline min-[1200px]:pb-3"
  >
    <a href={e[1]}>{e[0]}</a>
  </li>
);

export default FooterLinks;
