import { useState } from "react";
import { DownArrow, UpArrow } from "../assets/arrows";

const FooterMenu = ({ links, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const link = (e) => (
    <li
      key={e[0]}
      className="pb-2 hover:cursor-pointer hover:underline min-[1200px]:pb-3"
    >
      <a href={e[1]}>{e[0]}</a>
    </li>
  );

  return (
    <div>
      <div
        className="flex justify-between py-3 border-b-[ccccd6] border-b-[1px] min-[1200px]:pb-3 min-[1200px]:border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-[16px] leading-[24px] min-[1200px]:text-2xl">
          {name}
        </h3>
        <div className="block min-[1200px]:hidden">
          {!isOpen ? <UpArrow /> : <DownArrow />}
        </div>
      </div>
      <div>
        <ul className="hidden min-[1200px]:block leading-[20px] pt-1 font-medium">
          {Object.entries(links).map((e) => link(e))}
        </ul>
        {isOpen && (
          <>
            <ul className="block min-[1200px]:hidden text-sm leading-[20px] pt-1">
              {Object.entries(links).map((e) => link(e))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterMenu;
