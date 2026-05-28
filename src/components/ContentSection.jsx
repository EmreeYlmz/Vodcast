import React from 'react';
import { useNavigate } from 'react-router-dom'; // Sayfalar arası yönlendirme için
import AlbumCard from './AlbumCard'; // Albüm kartı bileşeni (şarkı veya sanatçı bilgilerini kart şeklinde gösterir)
import SongCardWithTimestamp from './SongCardWithTimestamp'; // Zaman damgalı şarkı kartı bileşeni
import { songs, tracks } from '../data/musicData'; // Müzik verileri (şarkılar ve parçalar)


// ContentSection bileşeni, başlık ve isteğe bağlı zaman damgası ile içerik gösterir
function ContentSection({ title, withTimeStamp = false }) {
  const navigate = useNavigate(); // Kullanıcıyı belirli bir sayfaya yönlendirmek için

  // Zaman damgalı şarkı verilerini ekrana basar
  const renderSongs = () => {
    if (songs.length > 0) {
      return songs.map((song) => <SongCardWithTimestamp key={song.id} song={song} />);
    } else {
      return <div className="col-span-full text-center text-gray-500">Şarkı bulunamadı</div>;
    }
  };

  // Track (parça) verilerini ekrana basar
  const renderTracks = () => {
    if (tracks.length > 0) {
      return tracks.map((track) => (
        <div
          key={track.id}
          onClick={() => navigate(`/music/${track.id}`)} // Kart tıklanınca detay sayfasına yönlendirme
          className="cursor-pointer"
        >
          <AlbumCard title={track.title} artist={track.artist} image={track.image} />
        </div>
      ));
    } else {
      return <div className="col-span-full text-center text-gray-500">Parça bulunamadı</div>;
    }
  };

  return (
    <div className="mb-8">
      {/* Başlık */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Grid yapısı: withTimeStamp true ise şarkılar, değilse parçalar gösterilir */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {withTimeStamp ? renderSongs() : renderTracks()}
      </div>
    </div>
  );
}

export default ContentSection;