import React from "react";
import Marquee from "react-fast-marquee";
import image from "/image.png";
const Differentlogo = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <Marquee>
          <div>
            <img className=" m-[20px]  " src={image}></img>
          </div>

          <br></br>
          <div>
            <img
              className="  m-[20px] "
              src="https://i.ibb.co/W0gVBqy/lucasfilm-ef28c5a6.png"
            ></img>
          </div>
          <div>
            <img
              className="m-[20px] "
              src="https://i.ibb.co/9TCMNZf/boeing-3037b0a6.png"
            ></img>
          </div>
          <div>
            <img
              className=" m-[20px] "
              src="https://i.ibb.co/DYssDP7/dell-09332c44.png"
            ></img>
          </div>
          <div>
            <img
              className="  m-[20px] "
              src="https://i.ibb.co/B6TqMqL/ibm-bcec6b9a.png"
            ></img>
          </div>
          <div>
            <img
              className=" m-[20px] "
              src="https://i.ibb.co/NFVWZB2/microsoft-4a9a93f0.png"
            ></img>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Differentlogo;
