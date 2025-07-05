'use client'
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {

    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p className="text-2xl md:text-3xl text-gray-500">
                        Agregar dirección de envío <span className="font-semibold text-[#00B2EF]">Dirección</span>
                    </p>
                    <div className="space-y-3 max-w-sm mt-10">
                        <input
                            className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Nombre completo"
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            value={address.fullName}
                        />
                        <input
                            className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Numero de teléfono"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Código postal"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500 resize-none"
                            type="text"
                            rows={4}
                            placeholder="Dirección (Calle y colonia)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        ></textarea>
                        <div className="flex space-x-3">
                            <input
                                className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                placeholder="Ciudad/Municipio/Localidad"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className="px-2 py-2.5 focus:border-[#00B2EF] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                placeholder="Estado"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>
                    <button type="submit" className="max-w-sm w-full mt-6 bg-[#00B2EF] text-white py-3 uppercase">
                        Guardar dirección
                    </button>
                </form>
                <Image
                    className="md:mr-16 mt-16 md:mt-0"
                    src={assets.my_location_image}
                    alt="my_location_image"
                />
            </div>
            <Footer />
        </>
    );
};

export default AddAddress;