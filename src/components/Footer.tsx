import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" flex justify-center items-center flex-col gap-[4px] w-full h-[200px] bg-cyan-700">
      <p className=" text-[32px] font-semibold text-white">
        Subscribe to our newsletter
      </p>
      <p className=" text-[12px] text-white">
        Proesent in nelo trat a bona egestas. Donoc von aule seroccioero es
      </p>
      <p className=" text-[12px] text-white">Donoc von aule seroccioero es</p>

      <div className=" h-[40px] flex items-center justify-between bg-white px-[16px] ">
        <input
          type="text"
          className=" text-[16px] outline-none"
          placeholder="Email address "
        />
        <button className=" text-white bg-orange-400 justify-center items-center flex w-[100px] h-[30px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
