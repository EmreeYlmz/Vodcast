import React, { useState } from 'react';
import MediaCard from "../../components/MediaCard";
import CategoryButton from "../../components/CategoryButton";
import ContentDetail from "../../components/ContentDetail";
import anasayfafoto from "../../assets/images/anasayfaicerik.jpg";
import anasayfafoto1 from "../../assets/images/anasayfaicerik1.jpg";
import anasayfafoto2 from "../../assets/images/anasayfaicerik2.jpg";
import anasayfafoto3 from "../../assets/images/anasayfaicerik3.jpg";
import avatar from "../../assets/images/avatara.png";
import avatar2 from "../../assets/images/avatarw.png";

function MainContent() {
  const [selectedContent, setSelectedContent] = useState(null);
  
  const mediaItems = [
    {
      id: 1,
      title: "Kafa Açan Kültürel Muhabbetler",
      type: "Vodcast",
      image: anasayfafoto,
      avatar: avatar,
      duration: "22:38",
      creator: "Kültür Kafası",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 100,
      comments: 150,
      description: "Bu bölümde kültürel mirasımızın önemli parçalarını ve günümüz sanatçılarının bu mirası nasıl yorumladığını konuşuyoruz. Konuklarımızla birlikte sanat, toplum ve kültür arasındaki bağlantıları derinlemesine inceliyoruz."
    },
    {
      id: 2,
      title: "Bir Lokma Kültür, Bir Yudum Sohbet",
      type: "Vodcast",
      image: anasayfafoto1,
      avatar: avatar2,
      duration: "22:38",
      creator: "Kültür Kafası",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 85,
      comments: 120,
      description: "Gastronomi ve kültür bağlantısını ele aldığımız bu programda, yemeklerin toplumsal anlamları üzerine derin bir sohbet gerçekleştiriyoruz."
    },
    {
      id: 3,
      title: "DJ Performans",
      type: "Müzik",
      image: anasayfafoto2,
      avatar: avatar,
      duration: "22:38",
      creator: "Ahmet K. Artist",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 210,
      comments: 95,
      description: "Elektronik müziğin sınırlarını zorlayan bir performans ile karşınızdayız. Ambient seslerden house müziğe uzanan bir yolculuğa hazır olun."
    },
    {
      id: 4,
      title: "Bir Lokma Kültür, Bir Yudum Sohbet",
      type: "Vodcast",
      image: anasayfafoto3,
      avatar: avatar2,
      duration: "22:38",
      creator: "Kültür Kafası",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 120,
      comments: 75,
      description: "Farklı kültürlerin mutfak geleneklerini ve yemek ritüellerini incelediğimiz bu bölümde, misafirlerimizle birlikte lezzet dolu bir sohbet gerçekleştiriyoruz."
    },
    {
      id: 5,
      title: "Kafa Açan Kültürel Muhabbetler",
      type: "Vodcast",
      image: anasayfafoto,
      avatar: avatar,
      duration: "22:38",
      creator: "Kültür Kafası",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 95,
      comments: 65,
      description: "Modern sanat akımlarının toplumsal yansımalarını tartıştığımız bu bölümde, sanatçılarla birlikte sanatın geleceğini konuşuyoruz."
    },
    {
      id: 6,
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto1,
      avatar: avatar2,
      duration: "22:38",
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 180,
      comments: 110,
      description: "Amazon yağmur ormanlarının ekolojik önemini ve karşı karşıya kaldığı tehditleri ele alan belgeselimizde, doğanın kalbine yolculuk yapıyoruz."
    },
    {
      id: 7,
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto3,
      avatar: avatar,
      duration: "22:38",
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 145,
      comments: 95,
      description: "Amazon yağmur ormanlarında yaşayan yerli halkların kültürlerini ve doğayla kurdukları ilişkiyi incelediğimiz bu bölümde, insanlığın doğayla uyum içinde yaşama bilgeliğini keşfediyoruz."
    },
    {
      id: 8,
      title: "DJ Performans",
      type: "Müzik",
      image: anasayfafoto2,
      avatar: avatar2,
      duration: "22:38",
      creator: "Ahmet K. Artist",
      stats: "60 B Görüntülenme | 2 ay önce",
      likes: 230,
      comments: 115,
      description: "Techno ve minimal house esintilerini bir araya getiren bu performansta, ritmin hipnotize edici gücüne tanık olacaksınız."
    },
    {
      id: 9,
      title: "Gündem Özel",
      type: "Podcast",
      image: anasayfafoto3,
      avatar: avatar,
      duration: "22:38",
      creator: "Gündem Kuşağı",
      stats: "50 B Görüntülenme | 2 ay önce",
      likes: 85,
      comments: 200,
      description: "Güncel toplumsal meseleleri uzman konuklarımızla derinlemesine ele aldığımız bu programda, farklı bakış açılarıyla olaylara yeni bir perspektif kazandırıyoruz."
    }
  ];

  const handleCardClick = (item) => {
    setSelectedContent(item);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedContent(null);
  };

  // Yorumlar (her içerik için ortak kullanılabilir)
  const comments = [
    {
      id: 1,
      user: "Merve Merve",
      avatar: avatar2,
      timeAgo: "1 gün önce",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      likes: 10,
      dislikes: 5
    },
    {
      id: 2,
      user: "Ahmet Kaya",
      avatar: avatar,
      timeAgo: "1 gün önce",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      likes: 10,
      dislikes: 5
    },
    {
      id: 3,
      user: "Ayşe Demir",
      avatar: avatar2,
      timeAgo: "1 gün önce",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      likes: 10,
      dislikes: 5
    }
  ];

  return (
    <div className="bg-backgraund flex-1 p-6">
      {selectedContent ? (
        // Detaylı içerik görünümü
        <ContentDetail 
          content={selectedContent} 
          comments={comments} 
          onBackClick={handleBackClick} 
        />
      ) : (
        // Ana sayfa içerik listesi
        <>
          {/* Categories */}
          <div className="flex space-x-2 mb-6 overflow-x-auto">
            <CategoryButton text="Tümü" active />
            <CategoryButton text="Müzik" />
            <CategoryButton text="Vodcastler" />
            <CategoryButton text="Son Yüklenenler" />
            <CategoryButton text="Yeni Önerilenler" />
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <MediaCard
                  title={item.title}
                  type={item.type}
                  image={item.image}
                  avatar={item.avatar}
                  duration={item.duration}
                  creator={item.creator}
                  stats={item.stats}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MainContent;