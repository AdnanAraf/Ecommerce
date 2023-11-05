// CardGrid.js
import React, { useState } from "react";
import { useEffect } from "react";

const Blogcard = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [blog, setblog] = useState([]);
  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);

  const handleReadMore = (index) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  return (
    <div className="grid grid-cols-2 font-titleFont mt-[30px] ml-[50px]">
      {blog.map((card, index) => (
        <div
          key={index}
          className={`card ${expandedCard === index ? "expanded" : ""}`}
        >
          <div className="bg-white shadow-lg w-[700px] p-[20px]">
            <img className="h-[400px] w-full" src={card.image}></img>
            <div className="flex justify-between">
              <div>
                <h1 className="font-titleFont font-bold text-[20px] p-[10px]">
                  {card.title}
                </h1>
              </div>
              <div>
                <h1 className="font-titleFont font-bold text-[20px]">
                  {card.date}
                </h1>
              </div>
            </div>

            {expandedCard === index ? (
              <p>{card.description}</p>
            ) : (
              <p className="font-titleFont p-[10px]">
                {card.description.slice(0, 100)}...
              </p>
            )}
            <button
              className="bg-black h-[40px] w-[100px] text-white mt-[20px] "
              onClick={() => handleReadMore(index)}
            >
              {expandedCard === index ? "Show Less" : "Read more"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogcard;
