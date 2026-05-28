import React from 'react';
import phoneImg from '../../../assets/images/phone.png'
import laptopImg from '../../../assets/images/laptop.png'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="bg-background text-text font-urbanist px-6 pt-10 pb-10 md:px-12 lg:px-20">


            {/* Navbar */}
            <div className="flex justify-end gap-4 mb-10">
                <Link to="/auth/login">
                    <button className="bg-button text-text px-4 py-2 rounded-lg font-ubansit transition hover:opacity-90">Giriş Yap</button>
                </Link>
                <Link to="/auth/register">
                    <button className="bg-button text-text px-4 py-2 rounded-lg font-ubansit transition hover:opacity-90">Kayıt Ol</button>
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
                {/* Text */}
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ubansit mb-6 leading-tight">
                        En Sevdiğin <br />
                        İçerikler,<br />
                        Şimdi Görsel <br />
                        Anlatımla!
                    </h1>
                    <p className="text-base sm:text-lg opacity-90">
                        Vodcast dünyasına katıl, <br />
                        her an her yerde izleyerek öğren, <br />
                        eğlen, ilham al.
                    </p>
                </div>

                {/* Images */}
                <div className="flex gap-6 items-center justify-center">
                    <img src={laptopImg} alt="Laptop" className="w-52 sm:w-64 lg:w-80" />
                    <img src={phoneImg} alt="Phone" className="w-24 sm:w-28 lg:w-36" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
