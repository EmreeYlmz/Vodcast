import React, { useState } from 'react';
import { liveStreamData } from '../data/createlive';
import Sidebar from './layouts/Sidebar';
import RightSidebar from './layouts/RightSidebar';

import { Link, useNavigate } from "react-router-dom";
const CreateLiveStream = () => {
    const [title, setTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Eğitim');
    const [selectedSubcategory, setSelectedSubcategory] = useState('Tahfec');
    const [settings, setSettings] = useState(liveStreamData.settings);

    const handleSettingToggle = (id) => {
        setSettings(settings.map(setting =>
            setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
        ));
    };

    const handleStartStream = () => {
        console.log('Yayın başlatılıyor:', {
            title,
            category: selectedCategory,
            subcategory: selectedSubcategory,
            settings
        });
    };

    return (
        <div className="min-h-screen bg-backgraund text-white">
            <div className="flex max-w-full mx-auto p-4">
                {/* Sol Sidebar */}
                <Sidebar className="w-1/4" />

                {/* Ana içerik */}
                <main className="flex-1 mr-4">
                    <section className="flex flex-1 overflow-hidden">
                        <div className="flex-1 p-4 font-urbanist">
                            {/* Başlık */}
                            <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">Canlı Yayın Başlat</h1>

                            {/* Önizleme */}
                            <div className="mb-6 md:mb-8 bg-card p-4 md:p-6 rounded-lg">
                                <div className="flex flex-col gap-4 md:gap-6">
                                    <div className="bg-black rounded-lg overflow-hidden h-48 md:h-120 flex items-center justify-center">
                                        <img
                                            src={liveStreamData.previewImage}
                                            alt="Yayın Önizleme"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 md:flex md:justify-between bg-backg1 p-3 md:p-4 rounded-lg">
                                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                                            <span className="text-xs md:text-sm text-gray-400">Süre:</span>
                                            <span className="text-sm md:text-base font-bold">00:12:45</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                                            <span className="text-xs md:text-sm text-gray-400">İzleyici:</span>
                                            <span className="text-sm md:text-base font-bold">1,245</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                                            <span className="text-xs md:text-sm text-gray-400">Etkileşim:</span>
                                            <span className="text-sm md:text-base font-bold">24.5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Yayın Başlığı */}
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Yayın Başlığı</h2>
                                <input
                                    type="text"
                                    placeholder="Yayın başlığınızı girin"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-backg1 border-none rounded-lg p-2 md:p-3 text-white focus:outline-none focus:ring-2 focus:ring-button"
                                />
                            </div>

                            {/* Kategori Seçimi */}
                            <div className="mb-6 md:mb-8 flex flex-col md:flex-row gap-3 md:gap-4">
                                <div className="w-full md:flex-1">
                                    <label className="block mb-1 md:mb-2 text-sm md:text-base">Alt Kategori (Etiketler)</label>
                                    <select
                                        value={selectedSubcategory}
                                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                                        className="w-full bg-backg1 border-none rounded-lg p-2 md:p-3 text-white focus:outline-none focus:ring-2 focus:ring-button text-sm md:text-base"
                                    >
                                        <option value="Türkçe">Türkçe</option>
                                        <option value="Eğitim">Eğitim</option>
                                        <option value="Etikici Etki">+ Etiket Ekle</option>
                                    </select>
                                </div>
                                <div className="w-full md:flex-1">
                                    <label className="block mb-1 md:mb-2 text-sm md:text-base">Kategori Seçimi</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full bg-backg1 border-none rounded-lg p-2 md:p-3 text-white focus:outline-none focus:ring-2 focus:ring-button text-sm md:text-base"
                                    >
                                        <option value="Eğitim">Eğitim</option>
                                        <option value="Sohbet">Sohbet</option>
                                        <option value="Spor">Spor</option>
                                        <option value="Oyun">Oyun</option>
                                    </select>
                                </div>
                            </div>

                            {/* Yayın Ayarları */}
                            <div className="mb-6 md:mb-8 bg-card p-4 md:p-6 rounded-lg">
                                <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Yayın Ayarları</h2>
                                {settings.map(setting => (
                                    <div key={setting.id} className="flex items-center mb-2 md:mb-3">
                                        <label className="flex items-center cursor-pointer">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    checked={setting.enabled}
                                                    onChange={() => handleSettingToggle(setting.id)}
                                                    className="sr-only"
                                                />
                                                <div className={`block w-8 h-5 md:w-10 md:h-6 rounded-full ${setting.enabled ? 'bg-button' : 'bg-gray-600'}`}></div>
                                                <div className={`dot absolute left-1 top-1 bg-white w-3 h-3 md:w-4 md:h-4 rounded-full transition ${setting.enabled ? 'transform translate-x-3 md:translate-x-4' : ''}`}></div>
                                            </div>
                                            <div className="ml-2 md:ml-3 text-sm md:text-base">{setting.name}</div>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Yayın Başlat Butonu */}
                            <div className="mt-4 md:mt-6">
                                <Link to="/livepanel">
                                    <button
                                        onClick={handleStartStream}
                                        className="w-full bg-button hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-4 rounded-lg transition duration-200 text-sm md:text-base"
                                    >
                                        Canlı Yayın Başlat
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Sağ Sidebar */}
                        <RightSidebar />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default CreateLiveStream;
