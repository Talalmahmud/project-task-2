import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  title: any;
  productList: any;
};

const ProductWithCard = ({ title, productList }: Props) => {
  return (
    <div
      id={title?.slug}
      className=" w-full transition-all delay-150 flex flex-col items-center md:items-start gap-[16px]"
    >
      <p className=" text-[24px] font-semibold">{title?.name}</p>

      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-[16px]">
        {productList?.slice(0, 4)?.map((product: any, index: number) => (
          <ProductCard key={index} productDetails={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductWithCard;
