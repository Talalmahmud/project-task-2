"use client";

import React, { useEffect, useState } from "react";
import CategoryListBar from "./CategoryListBar";
import axios from "axios";
import { ENDPOINT } from "@/utils/api";
import ProductWithCard from "./ProductWithCard";

type Props = {};

const Home = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allProduct, setAllProduct] = useState<any[]>([]);
  const [categoryWithProduct, setCategoryWithProduct] = useState<any>([]);
  const getAllCategories = async () => {
    try {
      const res = await axios.get(ENDPOINT.PRODUCT_CATEGORIES);
      const result = await res.data;
      setAllCategories(result);
    } catch (error) {
      console.log(error);
    }
  };

  const allProductList = async () => {
    try {
      setIsLoading(true);
      const results = await Promise.all(
        allCategories.map(async (item) => {
          const res = await axios.get(
            ENDPOINT.PRODUCT_SEARCCH_BY_CATEGORY + item
          );
          const result = res.data;
          return { item, result };
        })
      );

      setCategoryWithProduct(results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    allProductList();
  }, [allCategories]);
  return (
    <div className=" w-full flex gap-[24px] lg:gap-[64px]  ">
      {/* Home right nav for category list show */}
      <div className=" hidden md:block md:w-[150px] lg:w-[250px]">
        <CategoryListBar productList={allCategories} />
      </div>
      <div className=" w-full">
        <div className=" flex flex-col gap-[64px] pb-[32px]">
          {isLoading ? (
            <p className=" flex items-center justify-center h-screen">
              Loading.....
            </p>
          ) : (
            categoryWithProduct?.map((product: any, index: number) => (
              <div key={index}>
                <ProductWithCard
                  title={product?.item}
                  productList={product?.result?.products?.slice(0, 4)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
