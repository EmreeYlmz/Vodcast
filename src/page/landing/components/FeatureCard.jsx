import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-card text-text rounded-xl p-5 md:p-6 shadow-md flex flex-col items-center text-center gap-2 transition hover:scale-105 min-h-[180px]">
            <div className="text-3xl text-button">{icon}</div>
            <h3 className="text-lg font-ubansit">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
        </div>
    );
};

export default FeatureCard;
