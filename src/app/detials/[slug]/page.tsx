import ProductDetails from "@/components/product/details/ProductDetails";
import React from "react";

type Props = {};

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className=" mt-[8px] w-[1100px] mx-auto">
      <ProductDetails productId={params?.slug[0]} />
    </div>
  );
};

export default Page;
