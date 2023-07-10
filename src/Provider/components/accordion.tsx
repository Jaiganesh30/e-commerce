import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { category } from "../core/category";
import { Link, useNavigate } from "react-router-dom";

export const Accordion: React.FC = () => {
  const datas = useAppSelector((state: any) => state.counter.data);
  const navigate = useNavigate();
  //   const [smartphones] = useState<any>([])
  let smartphones: any[] = [];
  let laptops: any[] = [];
  let fragrances: any[] = [];
  let groceries: any[] = [];
  let homeDecor: any[] = [];
  let skincare: any[] = [];

  console.log(datas);
  useEffect(() => {
    if (datas) {
      smartphones = datas?.products?.filter((item: any) => {
        return item.category === category.SMARTPHONES;
      });
      laptops = datas?.products?.filter((item: any) => {
        return item.category === category.LAPTOPS;
      });
      fragrances = datas?.products?.filter((item: any) => {
        return item.category === category.FRAGRANCES;
      });
      groceries = datas?.products?.filter((item: any) => {
        return item.category === category.GROCERIES;
      });
      homeDecor = datas?.products?.filter((item: any) => {
        return item.category === category.HOME_DECOR;
      });
      skincare = datas?.products?.filter((item: any) => {
        return item.category === category.SKINCARE;
      });
      console.log(smartphones);
    }
  });
  const onclick = (key: any) => {
    if (key === category.SMARTPHONES) {
      navigate("/content", { state: smartphones });
    }
    if (key === category.LAPTOPS) {
      navigate("/content", { state: laptops });
    }
    if (key === category.FRAGRANCES) {
      navigate("/content", { state: fragrances });
    }
    if (key === category.GROCERIES) {
      navigate("/content", { state: groceries });
    }
    if (key === category.HOME_DECOR) {
      navigate("/content", { state: homeDecor });
    }
    if (key === category.SKINCARE) {
      navigate("/content", { state: skincare });
    }
  };
  return (
    <div>
      <h1>CATEGORIES</h1>
      {Object.values(category).map((key) => (
        <>
          <div
            style={{
              width: "80%",
              height: "40px",
              backgroundColor: "black",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
              color: "white",
              border: "1px solid black",
            }}
          >
            <h1>{key.toUpperCase()}</h1>
            <button
              onClick={() => onclick(key)}
              style={{
                width: "130px",
                height: "60px",
                borderRadius: "50px",
                backgroundColor: "lightblue",
                fontFamily: "monospace",
              }}
            >
              Click to view the page
            </button>
          </div>
          <hr
            style={{
              width: "100%",
              borderBlock: "1px solid white",
            }}
          />
        </>
      ))}
    </div>
  );
};
