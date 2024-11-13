/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

function VideoBanner() {
  return (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/BannerVideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white font-poppins font-semibold text-4xl md:text-6xl mb-5">
          <TextGenerateEffect words={"Voe mais alto com a"} className="z-[9999]"/>
          <br className="hidden sm:block" />{" "}
          <img
            className="inline object-cover sm:w-[750px] sm:h-[150px]"
            src="/logosvg02.svg"
            alt="Arrow Up"
          />
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl">
          Tecnologia de última geração, economia de tempo e precisão garantida
          em cada missão. Conheça nossos serviços e descubra como podemos elevar
          o seu projeto para novas alturas!
        </p>
      </div>
    </div>
  );
}

export default VideoBanner;
