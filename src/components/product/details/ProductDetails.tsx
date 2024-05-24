"use client";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import { ENDPOINT } from "@/utils/api";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";

type Props = {
  productId: any;
};

const ProductDetails = ({ productId }: Props) => {
  const [imageLoader, setImageLoader] = useState<boolean>(false);
  const [allProductLoader, setAllProductLoader] = useState<boolean>(false);

  const [product, setProduct] = useState<any>(null);
  const [productList, setProductList] = useState<any>([]);
  const getProduct = async () => {
    const res = await axios.get(ENDPOINT.PRODUCT_SEARCCH_BY_ID + productId);
    const result = await res.data;

    setProduct(result);
  };

  const getAllProduct = async () => {
    setImageLoader(true);
    const res = await axios.get(ENDPOINT.ALL_PRODUCT);
    const result = await res.data;
   
    setProductList(result?.products);
    setImageLoader(false);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  useEffect(() => {
    getProduct();
  }, [productId]);
  return (
    <div className="w-full ">
      {/** detials section */}
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[24px] md:gap-[64px]">
        <ImageSlider
          imageList={product?.images}
          thumbImage={product?.thumbnail}
        />
        <div className=" flex flex-col gap-[4px]">
          <h2 className=" text-[24px] font-semibold">{product?.title}</h2>

          <Stack spacing={2} alignItems="center" direction="row">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                value={product?.rating}
                precision={0.5}
                readOnly
                size="small"
                color="orange"
                // style={{ height: "20px", width: "20px" }}
              />
            </Stack>
            <p className="text-[12px]">({product?.rating})</p>
          </Stack>

          <h2 className=" font-semibold text-[14px]">{product?.description}</h2>
          <p className=" text-gray-400 text-[14px]">
            Brand:{" "}
            <span className=" text-black font-semibold">{product?.brand}</span>
          </p>

          <p className=" text-gray-400 text-[14px]">
            Category:{" "}
            <span className=" text-black font-semibold">
              {product?.category}
            </span>
          </p>

          <div className=" flex items-center gap-[16px]">
            <p className=" text-[14px] font-semibold text-blue-500">
              ${Math.ceil(product?.price * (product?.discountPercentage / 100))}
            </p>
            <p className=" line-through  text-gray-400 decoration-black ">
              ${product?.price}
            </p>

            <div className=" flex justify-center text-[10px] font-semibold items-center px-[6px] py-[2px] bg-orange-500 text-white">
              {product?.discountPercentage}% off
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full border-[1px] border-gray-200 my-[32px]">
        <p className=" px-[16px] w-full border-b-[1px] text-[18px] font-semibold">
          Product Description
        </p>

        <p className="text-[18px] font-semibold px-[32px] py-[4px]">
          Description
        </p>
        <p className=" text-[13px] py-[8px] px-[40px]">
          {product?.description}
        </p>
      </div>

      {/** All product section */}
      <p className=" font-semibold text-[24px] mt-[32px] pb-[16px]">
        All Product
      </p>
      <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-[16px] py-[16px]">
        {allProductLoader ? (
          <p>Loading...</p>
        ) : (
          productList?.map((item: any, index: number) => (
            <Link href={`/detials/${item?.id}`} key={index}>
              <div className=" rounded flex gap-[8px] h-[80px] p-[8px] border-[1px] border-gray-200 shadow-md ">
                <div className=" relative h-full w-[100px] overflow-auto">
                  <Image src={item?.thumbnail} fill alt="" />
                </div>
                <div className=" flex flex-col gap-[8px]">
                  <p className=" line-clamp-2 text-[12px]">
                    {" "}
                    {item?.description?.slice(0, 30)}...
                  </p>
                  <p className=" text-[12px] font-semibold">${item?.price}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
