const RedesSociales = () => {
  return (
    <div className="reveal">
      <div className="flex flex-col items-center min-[1200px]:items-start">
        <h3 className="font-bold text-[16px] leading-[24px] pb-3 min-[1200px]:text-2xl">
          Redes Sociales
        </h3>
        <div className="grid grid-cols-4 w-full justify-items-center gap-6">
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
  );
};

export default RedesSociales;
