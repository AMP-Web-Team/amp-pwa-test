import Image from "next/image";

const GlobalFooter = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row p-20 gap-[50px] lg:gap-[150px] items-center">
      {/* Logo */}
      <div className=" w-80 max-w-80  min-w-72">
        <Image
          className=" w-full opacity-40"
          src="/logo-transparent-bg.webp"
          alt=""
          width={500}
          height={500}
        />
      </div>
      {/* Footer Info */}
      <div className=" flex flex-row gap-10 text-white border-gray-400 border-t border-b py-4 w-full px-10">
        <div className=" max-w-52">
          <p className=" font-bold">Hours of Operation</p>
          <p className="">
            11AM – 8PM – Tuesdays, Wednesdays, Thursdays 11AM – 9PM – Friday,
            Saturday 11AM – 7PM – Sunday
          </p>
          <a>Contact</a>
        </div>
        <div className=" max-w-48">
          <p>426 W Plant Street Winter Garden, Florida 34787 United States</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.184412886426!2d-81.59331822450172!3d28.564224575702077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e78301f1f22f4b%3A0x82178d4b89d6cb3b!2sSir%20Benji&#39;s%20Donuts!5e0!3m2!1sen!2sus!4v1708463338877!5m2!1sen!2sus"
            width="300"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GlobalFooter;
