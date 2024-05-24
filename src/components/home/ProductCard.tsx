import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Link from "next/link";

type Props = {
  productDetails: any;
};

const ProductCard = ({ productDetails }: Props) => {
  return (
    <div className=" w-full border-[1px] shadow-md  ">
      <Link href={`/detials/${productDetails?.id}`}>
        <div className=" w-full flex flex-col">
          <div className=" relative overflow-auto w-full h-[150px] object-cover">
            <Image
              src={productDetails?.thumbnail}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt=""
            />
          </div>
          <div className=" px-[16px] flex flex-col text-[14px] gap-[4px] py-[16px]">
            {/* {Array.from()} */}
            <Stack spacing={1} alignItems="center" direction="row">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={productDetails?.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                  // style={{ height: "20px", width: "20px" }}
                />
              </Stack>
              <p className="text-[12px]">({productDetails?.rating})</p>
            </Stack>

            <p className="  line-clamp-2 font-semibold">
              {productDetails?.description?.slice(0, 40)}...
            </p>
            <p className="text-blue-500 ">${productDetails?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
