import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Tu clima ideal",
    description: "Instalación con nuestros técnicos, fácil, rápida y profesional.",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Confort inteligente",
    description: "WiFi integrado para que controles la temperatura.",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Ahorra con Inverter",
    description: "Bajo costo, bajo consumo y alta eficiencia para enfriar.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Productos Populares</p>
        <div className="w-28 h-0.5 bg-[#00B2EF] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-[#00B2EF] px-4 py-2 rounded">
                Comprar <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
