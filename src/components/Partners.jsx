const Partners = () => {
  return (
    <div className="partner reveal">
      <div className="flex flex-col items-center min-[1200px]:items-start">
        <h3 className="font-bold text-[16px] leading-[24px] pb-3 min-[1200px]:text-2xl">
          Somos Partners
        </h3>
        <div className="flex justify-center gap-8 flex-wrap">
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
  );
};

export default Partners;
