import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoriesCard from "./CategoriesCard/CategoriesCard";

const Categories = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("Categories.json")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  const Dolls = categories.filter((item) => item.title === "Dolls");
  const cars = categories.filter((item) => item.title === "cars");
  const Engineering = categories.filter((item) => item.title === "Engineering");
  const musical = categories.filter((item) => item.title === "musical");
  const sports = categories.filter((item) => item.title === "sports");
  return (
    <div>
      <div className="mt-[90px] absolute ml-[50px] font-semibold">
        <h1 className="font-titleFont text-[30px] ">Categories</h1>
      </div>
      <div>
        <Tabs className="flex  ">
          <TabList className="mt-[150px] ml-[50px] ">
            <Tab className="p-[20px] font-titleFont text-[18px] font-semibold cursor-pointer fadeIn">
              Dolls
            </Tab>
            <Tab className="p-[20px] font-titleFont text-[18px] font-semibold cursor-pointer fadeIn">
              Cars
            </Tab>
            <Tab className="p-[20px] font-titleFont text-[18px] font-semibold cursor-pointer">
              Engineering
            </Tab>
            <Tab className="p-[20px] font-titleFont text-[18px] font-semibold cursor-pointer">
              Musical
            </Tab>
            <Tab className="p-[20px] font-titleFont text-[18px] font-semibold cursor-pointer">
              Sports
            </Tab>
          </TabList>
          <div>
            <TabPanel>
              <div className="grid grid-cols-3 gap-[20px] mt-[100px] ml-[150px] ">
                {Dolls.map((item) => (
                  <CategoriesCard item={item} />
                ))}
              </div>
            </TabPanel>
          </div>
          <div>
            <TabPanel>
              <div className="grid grid-cols-3 gap-[20px] mt-[100px] ml-[150px]">
                {cars.map((item) => (
                  <CategoriesCard item={item} />
                ))}
              </div>
            </TabPanel>
          </div>
          <div>
            <TabPanel>
              <div className="grid grid-cols-3 gap-[20px] mt-[100px] ml-[150px] ">
                {Engineering.map((item) => (
                  <CategoriesCard item={item} />
                ))}
              </div>
            </TabPanel>
          </div>

          <TabPanel>
            <div className="grid grid-cols-3 gap-[20px] mt-[100px]  ml-[150px]">
              {musical.map((item) => (
                <CategoriesCard item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-[30px] mt-[100px] ml-[150px]">
              {sports.map((item) => (
                <CategoriesCard item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
