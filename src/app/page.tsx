import CategoryListBar from "@/components/home/CategoryListBar";
import Home from "@/components/home/Home";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className=" pt-[8px] max-w-[1100px] mx-auto">
      <Home />
    </div>
  );
};

export default Page;
