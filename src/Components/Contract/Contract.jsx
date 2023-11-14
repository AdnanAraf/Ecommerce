import React from "react";
import Text from "./Text";
import Name from "./Name";
import Email from "./Email";
import Message from "./Message";
import Button from "./Button";
import Subject from "./Subject";

const Contract = () => {
  return (
    <div>
      <div className="bg-[black] h-[600px] pt-[50px] lg:opacity-[0.85] flex justify-around ">
        <div className="mt-[50px]">
          <Text />
          <h1 className="font-titleFont text-white text-[25px] w-[700px]">
            If You have any Query Please Contract To me, We are always by you
            side.
          </h1>
        </div>
        <div className="">
          {/* <Name />
          <Email />
          <Message />
          <Button /> */}
          <Subject />
        </div>
        {/* <div className="m-auto "> */}
        {/* <Name /> */}
        {/* <Subject /> */}
        {/* <Email /> */}
        {/* <Message /> */}
        {/* <Button /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contract;
