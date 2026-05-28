import React from 'react';
import FeatureCard from './FeatureCard';
import { FaMusic, FaVideo } from 'react-icons/fa';
import { BiRadio } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';

const features = [
    {
        icon: <FaMusic />,
        title: 'Müzik',
        description: 'En sevdiğin parçalar her zaman yanında.',
    },
    {
        icon: <FaVideo />,
        title: 'Video & Vodcast',
        description: 'Favori içerik üreticilerini kaçırma.',
    },
    {
        icon: <BiRadio />,
        title: 'Canlı Yayın',
        description: 'Spor, eğitim, sohbet... Hepsi burada.',
    },
    {
        icon: <MdOutlineArticle />,
        title: 'Blog',
        description: 'Kendi blog yazılarını oluşturabilirsin.',
    },
];

const FeatureSection = () => {
    return (
        <section className="bg-backgraund py-16">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
