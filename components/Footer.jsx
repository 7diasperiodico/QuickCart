import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500 bg-[#00B2EF]">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-white">
            En NIVE resolvemos todo el proceso: Compra + entrega + 
            instalación y mentenimiento, en un solo lugar.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Menú</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-white hover:underline transition" href="#">Inicio</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Conócenos</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Contacto</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Aviso de Privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Categorías</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-white hover:underline transition" href="#">Minisplit estándar</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Minisplit inverter</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Minisplit smart</a>
              </li>
              <li>
                <a className="text-white hover:underline transition" href="#">Ventilador de techo</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Contáctanos</h2>
            <div className="text-sm space-y-2 text-white">
              <p>+99-234-567-890</p>
              <p>Nive@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-gray-900 py-4 text-center text-xs md:text-sm text-white">
        Copyright 2025 © Nive Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;