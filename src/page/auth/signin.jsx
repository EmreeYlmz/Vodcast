import React from "react";
import loginSvg from "../../assets/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import useSignIn from "../../data/useSignIn";

const Signin = () => {
    const { login, loading } = useSignIn();

    return (
        <div className="w-screen min-h-screen bg-background flex items-center justify-center px-4 md:px-16 font-urbanist py-10">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Sol - Görsel */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={loginSvg}
                        alt="Welcome Graphic"
                        className="w-full max-w-[800px] object-contain"
                    />
                </div>

                {/* Sağ - Form */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <form
                        onSubmit={login}
                        className="bg-card p-6 md:p-10 rounded-xl w-full max-w-md text-white shadow-xl space-y-4 text-sm"
                    >
                        <h2 className="text-3xl font-bold text-center">GİRİŞ YAP</h2>

                        <div className="relative">
                            <FiMail className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="email"
                                name="email"
                                defaultValue="user@demo.com"
                                placeholder="E-posta"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                                required
                            />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute left-3 top-3 text-gray-500 text-sm" />
                            <input
                                type="password"
                                name="password"
                                defaultValue="123456"
                                placeholder="Şifre"
                                className="pl-10 w-full p-2.5 rounded bg-white text-black focus:outline-none text-sm"
                                required
                            />
                        </div>

                        <div className="flex justify-between text-xs">
                            <label className="flex items-center gap-1">
                                <input type="checkbox" />
                                Beni Hatırla
                            </label>
                            <Link to="/auth/forgotpass" className="underline text-link">
                                Şifremi Unuttum
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="bg-button w-full py-2 rounded text-white font-medium hover:scale-105 transition-transform duration-300"
                            disabled={loading}
                        >
                            {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                        </button>

                        <div className="text-center text-xs">Kolayca Giriş Yap</div>

                        <button className="bg-white text-black w-full py-2 rounded flex items-center justify-center gap-2 text-sm">
                            <FcGoogle className="text-lg" />
                            Google ile Giriş Yap
                        </button>

                        <button className="bg-white text-black w-full py-2 rounded flex items-center justify-center gap-2 text-sm">
                            <FaApple className="text-lg" />
                            Apple ile Giriş Yap
                        </button>

                        <p className="text-xs text-center">
                            Hesabın yok mu?{" "}
                            <Link to="/auth/register" className="underline text-link">
                                Kayıt Ol
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
