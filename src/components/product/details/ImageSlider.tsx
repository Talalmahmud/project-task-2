import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imageList: [];
  thumbImage: string;
};

const ImageSlider = ({ imageList, thumbImage }: Props) => {
  const [imgShow, setImgShow] = useState<string>("");
  return (
    <div className=" flex flex-col gap-[16px]">
      <div className=" relative w-[343px] md:w-[768px] lg:w-full border-[1px] overflow-auto border-gray-200 h-[300px] shadow-md">
        <Image
          src={imgShow !== "" ? imgShow : thumbImage || "next.svg"}
          fill
          alt=""
        />
      </div>

      <hr className=" w-[443px] md:w-768px]" />
      <div className=" w-[443px] md:w-[768px] xl:w-full flex items-center gap-[16px] overflow-auto">
        {imageList?.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => setImgShow(item)}
            className=" border-[1px] cursor-pointer hover:border-gray-400 border-gray-200 shadow-md p-[4px] relative w-full overflow-auto h-[80px]"
          >
            <Image src={item || "next.svg"} fill alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
