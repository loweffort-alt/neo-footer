import { useState } from "react";
import { DownArrow, UpArrow } from "../assets/arrows";

const FooterLinks = ({ links, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const link = (e) => (
    <li
      key={e[0]}
      className="pb-2 hover:cursor-pointer hover:underline xl:pb-3"
    >
      <a href={e[1]}>{e[0]}</a>
    </li>
  );

  return (
    <div>
      <div
        className="flex justify-between py-3 border-b-[ccccd6] border-b-[1px] xl:pb-3 xl:border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg leading-[24px] xl:text-2xl">{name}</h3>
        <div className="block xl:hidden">
          {!isOpen ? <UpArrow /> : <DownArrow />}
        </div>
      </div>
      <div>
        <ul className="hidden xl:block text-xl leading-[20px] pt-1">
          {Object.entries(links).map((e) => link(e))}
        </ul>
        {isOpen && (
          <>
            <ul className="block xl:hidden text-sm leading-[20px] pt-1">
              {Object.entries(links).map((e) => link(e))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterLinks;
