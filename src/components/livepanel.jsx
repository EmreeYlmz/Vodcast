import React, { useState, useEffect } from 'react';
import Sidebar from '../page/layouts/Sidebar';
import RightSidebar from '../page/layouts/RightSidebar';
import { streams } from '../data/liveStream';

const LivePanel = () => {
    const [liveData, setLiveData] = useState(null);

    useEffect(() => {
        // Simulated API call
        setTimeout(() => {
            setLiveData(streams[0]); // İlk yayını alıyoruz
        }, 500);
    }, []);

    const handleStopStream = () => {
        alert("Yayın kapatıldı!");
    };

    if (!liveData) {
        return <div className="text-center text-white p-10">Yükleniyor...</div>;
    }

    return (
        <div className="min-h-screen bg-background text-white">
            <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto p-4 gap-4">

                {/* Sol Sidebar (mobilde görünür) */}
                <aside className="w-full lg:max-w-[200px]">
                    <Sidebar />
                </aside>

                {/* Ana içerik */}
                <main className="flex-1">
                    <section className="flex flex-col lg:flex-row overflow-hidden">
                        <div className="flex-1 p-8 relative space-y-6">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-xl font-bold text-center w-full">Yayıncı Kontrol Paneli</h1>
                                <button
                                    onClick={handleStopStream}
                                    className="absolute right-4 top-0 bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded transition"
                                >
                                    Yayını Kapat
                                </button>
                            </div>

                            <div className="bg-card rounded-lg overflow-hidden">
                                {/* Görsel ve üstüne bindirilmiş süre & izleyici */}
                                <div className="relative">
                                    <img
                                        src={liveData.panelimg}
                                        alt="Yayın Görseli"
                                        className="w-full object-cover h-110"
                                    />
                                    <div className="absolute bottom-2 left-3 flex items-center gap-2 text-sm bg-black/60 px-3 py-1 rounded-full">
                                        ⏱ {liveData.duration || "01:02:03"}
                                    </div>
                                    <div className="absolute bottom-2 right-3 flex items-center gap-2 text-sm bg-black/60 px-3 py-1 rounded-full">
                                        👥 {liveData.viewers}B
                                    </div>
                                </div>

                                {/* Yayın Bilgisi */}
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">{liveData.title}</h2>
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src={liveData.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <div className="text-sm">{liveData.streamer}</div>
                                            <div className="text-xs text-gray-400">1.5 B Abone</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Sidebar (mobilde görünür) */}
                        <aside className="w-full lg:max-w-[200px]">
                            <RightSidebar />
                        </aside>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default LivePanel;
