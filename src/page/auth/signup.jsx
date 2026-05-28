import React from "react";
import registerSvg from "../../assets/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";

const Signup = () => {
    return (
        <div className="w-screen min-h-screen bg-background flex items-center justify-center px-4 md:px-16 font-urbanist py-10">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Sol - Görsel */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={registerSvg}
                        alt="Welcome"
                        className="w-full max-w-[800px] object-contain"
                    />
                </div>

                {/* Sağ - Form */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <form className="bg-card p-6 md:p-10 rounded-xl w-full max-w-md text-white shadow-xl space-y-4 text-sm">
                        <h2 className="text-3xl font-bold text-center">KAYIT OL</h2>

                        <div className="relative">
                            <FiUser className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="text"
                                placeholder="Ad-Soyad"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        <div className="relative">
                            <FiMail className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="email"
                                placeholder="E-posta"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        <div className="relative">
                            <FiPhone className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="tel"
                                placeholder="Telefon Numarası"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="password"
                                placeholder="Şifre"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="password"
                                placeholder="Şifre Tekrar"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                            />
                        </div>

                        {/* KVKK ve Gizlilik */}
                        <div className="text-xs space-y-1">
                            <label className="flex gap-2 items-start">
                                <input type="checkbox" />
                                <span>
                                    <Link to="/kvkk" className="underline  text-[#058DD9]">KVKK Sözleşmesi’ni</Link> okudum ve kabul ediyorum.
                                </span>
                            </label>
                            <label className="flex gap-2 items-start">
                                <input type="checkbox" />
                                <span>
                                    <Link to="/privacy" className="underline  text-[#058DD9]">Gizlilik Politikası’nı</Link> okudum ve kabul ediyorum.
                                </span>
                            </label>
                        </div>

                        <button className="bg-button w-full py-2 rounded text-white font-medium hover:scale-105 transition-transform duration-300">
                            Kayıt Ol
                        </button>

                        <div className="text-center text-xs">Kolayca Kayıt Ol</div>

                        <button className="bg-white text-black w-full py-2 rounded flex items-center justify-center gap-2 text-sm">
                            <FcGoogle className="text-lg" />
                            Google ile Giriş Yap
                        </button>

                        <button className="bg-white text-black w-full py-2 rounded flex items-center justify-center gap-2 text-sm">
                            <FaApple className="text-lg" />
                            Apple ile Giriş Yap
                        </button>

                        <p className="text-xs text-center">
                            Zaten bir hesabın var mı?{" "}
                            <Link to="/auth/login" className="underline  text-[#058DD9]">
                                Giriş Yap
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
