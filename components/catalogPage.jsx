"use client"
import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import ComponentCatalog1 from "./componentCatalog";


export default function Items() {
  return (
    <>
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute top-0 left-0 -z-10"
        ></Image>
  
        <ComponentCatalog1/>
          
      
      </div>
    </>
  );
}
