import { capitalizeString } from "@/utils/comonfunction";
import Link from "next/link";
import React, { memo } from "react";

type Props = {
  productList: string[];
};

const CategoryListBar = ({ productList }: Props) => {
  return (
    <div className=" w-full rounded-[8px] border-[1px] border-gray-200 shadow-md p-[16px] flex flex-col gap-[4px] ">
      {productList?.map((category: string, index: number) => (
        <Link
          href={`#${category}`}
          className=" text-[14px] hover:text-blue-600 cursor-pointer"
          key={index}
        >
          {capitalizeString(category)}
        </Link>
      ))}
    </div>
  );
};

export default memo(CategoryListBar);
