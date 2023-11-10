import { useState } from "react";
import { DownArrow, UpArrow } from "../assets/arrows";

const FooterLinks = ({ links, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div
          className="flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-black font-bold text-xl leading-[24px] md:text-2xl">
            {name}
          </h3>
          <div className="block lg:hidden">
            {!isOpen ? <UpArrow /> : <DownArrow />}
          </div>
        </div>
        <div>
          <ul className="hidden lg:block text-start text-[#000033] text-xl leading-[20px] pt-5">
            {Object.entries(links).map((e) => (
              <li key={e[0]} className="pb-3">
                <a href={e[1]}>{e[0]}</a>
              </li>
            ))}
          </ul>
          {isOpen && (
            <>
              <ul>
                {Object.entries(links).map((e) => (
                  <li key={e[0]}>
                    <a href={e[1]}>{e[0]}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
