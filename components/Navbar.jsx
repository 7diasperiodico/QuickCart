"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs"
import { CartIcon, BagIcon, HomeIcon, BoxIcon } from "@/assets/assets";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const {openSignIn} = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-[#00B2EF]">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="text-white">
          Inicio
        </Link>
        <Link href="/all-products" className="text-white">
          Tienda
        </Link>
        <Link href="/" className="text-white">
          Conócenos
        </Link>
        <Link href="/" className="text-white">
          Contacto
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full text-white">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        { 
        user
         ? <>
         <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')}/>
              </UserButton.MenuItems>
              <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')}/>
              </UserButton.MenuItems>
              </UserButton>
         </> 
         : <button onClick={openSignIn} className="flex items-center gap-2 text-white">
          <Image src={assets.user_icon} alt="user icon" />
          Mi cuenta
        </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full text-white">Seller Dashboard</button>}
        { 
        user
         ? <>
         <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Inicio" labelIcon={<HomeIcon />} onClick={()=> router.push('/')}/>
              </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Productos" labelIcon={<BoxIcon />} onClick={()=> router.push('/all-products')}/>
              </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Carrito" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')}/>
              </UserButton.MenuItems>
              <UserButton.MenuItems>
            <UserButton.Action label="Pedidos" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')}/>
              </UserButton.MenuItems>
              </UserButton> 
         </> 
         : <button onClick={openSignIn} className="flex items-center gap-2 text-white">
          <Image src={assets.user_icon} alt="user icon" />
          Mi cuenta
        </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;