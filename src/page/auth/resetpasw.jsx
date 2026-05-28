import React from "react";
import loginSvg from "../../assets/images/login.svg";
import { FiLock, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const ResetPass = () => {
    return (
        <div className="w-screen min-h-screen bg-background flex items-center justify-center px-4 md:px-16 font-urbanist py-10">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Left - Image (Same as other pages) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white">
                    <img
                        src={loginSvg}
                        alt="Welcome Graphic"
                        className="w-full max-w-[500px] object-contain mb-8"
                    />
                </div>

                {/* Right - Reset Password Form */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="bg-secondary p-8 rounded-xl w-full max-w-md text-white shadow-xl">
                        <h1 className="text-2xl font-bold mb-6 text-center">Yeni Şifre Oluştur</h1>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Yeni Şifre"
                                    className="w-full p-3 rounded bg-white text-black focus:outline-none pl-10"
                                />
                                <FiLock className="absolute left-3 top-3.5 text-gray-500" />
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Yeni Şifre Tekrar"
                                    className="w-full p-3 rounded bg-white text-black focus:outline-none pl-10"
                                />
                                <FiLock className="absolute left-3 top-3.5 text-gray-500" />
                            </div>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-start">
                                    <FiCheck className="mr-2 mt-1 flex-shrink-0" />
                                    <span>En az 8 karakter uzunluğunda olmalıdır.</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheck className="mr-2 mt-1 flex-shrink-0" />
                                    <span>Büyük harf, küçük harf, rakam ve özel karakter (B!@#$%^&*) içermelidir.</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheck className="mr-2 mt-1 flex-shrink-0" />
                                    <span>Daha önce kullandığınız şifrelerden farklı olmalıdır.</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheck className="mr-2 mt-1 flex-shrink-0" />
                                    <span>Kolay tahmin edilebilir (123456, qwerty) gibi şifrelerden kaçının.</span>
                                </li>
                            </ul>
                            <button className="w-full bg-button py-3 rounded-lg text-white font-medium hover:bg-button-hover transition-colors">
                                Şifreyi Güncelle
                            </button>
                        </div>

                        <div className="text-center mt-4 text-sm">
                            <Link to="/auth/login" className="text-[#058DD9] hover:underline">
                                Giriş sayfasına dön
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;
