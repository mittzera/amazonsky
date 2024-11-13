import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black-100/50 ">
      <Image
        src="/skybg.jpg"
        layout="fill"
        objectFit="cover"
        alt="Background"
      />
    </div>
  );
};

export default Background;
