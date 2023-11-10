const Premios = () => {
  return (
    <div className="awards reveal">
      <div className="flex flex-col items-center min-[1200px]:items-start">
        <h3 className="font-bold text-[16px] leading-[24px] pb-3 min-[1200px]:text-2xl text-center">
          Premios y reconocimientos
        </h3>
        <div className="flex justify-center gap-4 flex-wrap w-full">
          <div>
            <img
              src="https://neoconsulting.ai/_next/static/media/eccom-award-2020.bb9a1ce4.png"
              alt="price1"
            />
          </div>
          <div>
            <img
              src="https://neoconsulting.ai/_next/static/media/eccom-award-2021.b40590e6.png"
              alt="price2"
            />
          </div>
          <div>
            <img
              src="https://neoconsulting.ai/_next/static/media/eccom-award-2021.b40590e6.png"
              alt="price3"
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
  );
};

export default Premios;
