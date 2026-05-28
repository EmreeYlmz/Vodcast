import React from 'react';
import { FaCheck } from 'react-icons/fa';

const features = [
    "Canlı yayınlar başlatarak anlık etkileşimde bulunabilir, takipçilerinle doğrudan iletişim kurabilirsin.",
    "Vodcast'ler ile sohbetleri dinleyebilir veya kendi kanalını oluşturarak vodcast içerikleri üretebilirsin.",
    "Eğitici içeriklerle hem öğrenebilir hem de eğlenebilirsin. Ayrıca, eğitim veren kişi de olabilirsin.",
    "İlgi alanlarına göre yazılar paylaşabilir, deneyimlerini ve bilgilerini geniş bir kitleyle paylaşabilirsin.",
    "Kendi müzik parçalarını yayınlayabilir veya favori şarkılarını paylaşarak müzik severlerle bir araya gelebilirsin."
];

const AppFeaturesSection = () => {
    return (
        <section className="bg-background text-text font-urbanist px-6 py-10 rounded-2xl mx-4 md:mx-12 lg:mx-32 mt-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Uygulama ile Neler Yapabilirsin?</h2>
            <ul className="space-y-4">
                {features.map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <FaCheck className="text-button mt-1" />
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AppFeaturesSection;
