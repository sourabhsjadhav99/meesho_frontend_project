import React from "react";

const Footer = () => {
  // Function to handle click on Play Store button
  const handleplayButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=96148644",
      "_blank"
    );
  };

  // Function to handle click on App Store button
  const handleAppButtonClick = () => {
    window.open(
      "https://apps.apple.com/us/app/meesho-online-shopping/id1457958492",
      "_blank"
    );
  };
  return (
    <div className="w-full bg-[#F8F8FF] flex justify-center py-16">
      <div className="flex flex-col md:flex-row w-[90%] justify-between gap-6">
        <div className="flex flex-col md:flex-row w-[100%] md:w-2/3  gap-6 justify-between">
          <section className="flex flex-col w-[100%] md:w-[50%] gap-4">
            <h1 className="text-3xl font-semibold">Shop Non-Stop on Meesho</h1>
            <div>
              <p className="text-lg">Trusted by more than 1 Crore Indians</p>
              <p className="text-lg">Cash on Delivery | Free Delivery</p>
            </div>

            <div className="flex gap-3 justify-between">
              <button className="w-[49%]" onClick={handleplayButtonClick}>
                {" "}
                <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" />
              </button>
              <button className="w-[49%]" onClick={handleAppButtonClick}>
                <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" />
              </button>
            </div>
          </section>

          <section className="flex justify-evenly w-[100%] md:w-[50%]  ">
            <div className="text-lg font-semibold flex flex-col gap-2">
              <p>Careers</p>
              <p>Become a supplier</p>
              <p>Hall of Fame</p>
              <p>Sitemap</p>
            </div>
            <div className="text-lg font-semibold flex flex-col gap-2">
              <p>Legal and Policies</p>
              <p>Meesho Tech Blog</p>
              <p>Notices and Returns</p>
            </div>
          </section>
        </div>
        <section className="flex flex-col lg:flex-row w-[100%] md:w-1/3 gap-5">
          <div className="w-[100%] lg:w-1/2 flex flex-col gap-4">
            <p className="text-xl font-bold">Reach out to us</p>
            <div className="flex justify-between w-[60%] lg:w-[100%]">
              <img src="https://images.meesho.com/images/pow/facebook.png" />
              <img src="https://images.meesho.com/images/pow/instagram.png" />
              <img src="https://images.meesho.com/images/pow/youtube.png" />
              <img src="https://images.meesho.com/images/pow/linkedin.png" />
              <img src="https://images.meesho.com/images/pow/twitter.png" />
            </div>
          </div>
          <div className="w-1/2 w-[100%] lg:w-1/2 flex flex-col gap-4">
            <p className="text-xl font-bold">Contact Us</p>
            <small>
              Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
              06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer
              Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka,
              India E-mail address: query@meesho.com © 2015-2023 Meesho.com
            </small>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
