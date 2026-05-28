import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogImage from '../assets/images/blogpc.png';

const BlogLanding = () => {
    const navigate = useNavigate();

    const handleStartReading = () => {
        navigate('/blogs');
    };

    return (
        <div className="w-screen min-h-screen bg-background flex items-center justify-center font-urbanist px-4 md:px-16 lg:px-24">
            <div className="w-full max-w-[1440px] flex flex-col-reverse sm:flex-row items-center justify-between gap-12">
                {/* Sol - Yazı Alanı */}
                <div className="w-full sm:w-[55%] text-white space-y-8 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Sözün<br />
                        Gücüyle<br />
                        Dünyayı<br />
                        Keşfet!
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Okumak, Yazmak Ve Dünyayı Farklı Gözlerle Görmek İçin Bir Durak
                    </p>
                    <button
                        onClick={handleStartReading}
                        className="mt-6 px-8 py-3 bg-button text-white text-lg sm:text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Okumaya Başla
                    </button>
                </div>

                {/* Sağ - Görsel */}
                <div className="w-full sm:w-[40%] flex justify-center items-center">
                    <img
                        src={blogImage}
                        alt="Blog Keşfi"
                        className="w-full max-w-[500px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogLanding;
