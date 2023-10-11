import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";

const CategoriesDetailsCard = () => {
  const { _id } = useParams();
  console.log(_id);
  const [category, setcategory] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/CategoriesCollection")
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((item) => item._id == _id);
        setcategory(result);
      });
  }, []);
  return (
    <div className="flex justify-between ">
      <div className="mx-[80px] mt-[100px] w-[500px] h-[500px] ">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: category.img,
            },
            largeImage: {
              src: category.img,
              width: 500,
              height: 1200,
            },
          }}
        />
      </div>
      <div className="mr-[250px] mt-[50px]">
        <h1 className="text-[30px] w-[400px] font-titleFont font-semibold">
          {category.title}
        </h1>
        <p className="font-titleFont w-[500px] text-[14px] ">
          STEM toys for kids come in many forms. Some develop technology and
          math skills by teaching kids to code and program. Others teach
          engineering skills through building challenges. Many toys feature
          experiments, helping kids learn about science fundamentals.What are
          the characteristics of educational toys? Children's educational toys
          should be sturdy and safe, as well as enjoyable and engaging. The best
          toys teach basic concepts while promoting free play and social
          interaction. They should also challenge coordination and fine motor
          skills and introduce new skills gradually.an object, often a small
          representation of something familiar, as an animal or person, for
          children or others to play with; plaything. a thing or matter of
          little or no value or importance; a trifle.
        </p>
        <p className="text-[20px] mt-[10px]">Price:${category.price}</p>
        <button
          // onClick={() => HandleClick(item)}
          className="mt-[10px] font-titleFont bg-black text-white h-[50px] w-[154px] text-[16px] rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CategoriesDetailsCard;
