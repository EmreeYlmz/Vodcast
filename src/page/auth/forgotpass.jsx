import React from "react";
import loginSvg from "../../assets/images/login.svg";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

const ForgotPass = () => {
    return (
        <div className="w-screen min-h-screen bg-background flex items-center justify-center px-4 md:px-16 font-urbanist py-10">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Left - Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={loginSvg}
                        alt="Welcome Graphic"
                        className="w-full max-w-[800px] object-contain"
                    />
                </div>

                {/* Right - Form */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <form className="bg-secondary p-6 md:p-10 rounded-xl w-full max-w-md text-white shadow-xl space-y-6 text-sm">
                        <h2 className="text-3xl font-bold text-center">ŞİFREMİ UNUTTUM</h2>
                        <p className="text-center text-sm">
                            Şifrenizi sıfırlamak için kayıtlı e-posta adresinizi girin.
                        </p>

                        <div className="relative">
                            <FiMail className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="email"
                                placeholder="E-posta"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        <button className="bg-button w-full py-2 rounded text-white font-medium hover:bg-button-hover transition-colors">
                            Şifre Sıfırlama Linki Gönder
                        </button>

                        <div className="text-center text-xs">
                            <Link to="/auth/login" className=" text-[#058DD9] hover:underline">
                                Giriş sayfasına dön
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
