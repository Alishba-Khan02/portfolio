import React from "react";
import { Spotlight } from "../ui/spotlight";
import { Icon } from '@/Components'

export function HeroSection() {
  return (
    (<div
      className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 flex items-center flex-col gap-8  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Web Developer
        </h1>
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Hello, I'm Ubaid Ahmed
          WebDeveloper
          A passionate Mern Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other outstanding libraries and frameworks.
        </p>
        <div>
<button className="button button-item">
  <span className="button-bg">
    <span className="button-bg-layers">
      <span className="button-bg-layer button-bg-layer-1 -purple"></span>
      <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
      <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
    </span>
  </span>
  <span className="button-inner">
    <span className="button-inner-static">Download Resume </span>
    <span className="button-inner-hover">Download Resume </span>
  </span>
</button>
</div>
      <Icon/>

      </div>
     
    </div>)
  );
}
