import { useParams, useNavigate } from 'react-router-dom';
import { artists, songs, tracks} from '../data/musicData';
import { Play } from 'lucide-react';

// LyricsSection bileşeni: Şarkı sözlerini gösteren bölüm
const LyricsSection = () => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-center">Sözleri</h2>
      <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 max-w-lg mx-auto">
        <p className="text-gray-400 mb-2">Don't remind me</p>
        <p className="text-gray-400 mb-2">I'm minding my own damn business</p>
        <p className="text-gray-400 mb-2">Don't try to find me</p>
        <p className="text-gray-400 mb-2">I'm better left alone than in this</p>
        <p className="text-gray-400 mb-2">It doesn't surprise me</p>
        <p className="text-gray-400">Do you really think that I could care me </p>
      </div>
    </div>
  );
};

// ArtistSection bileşeni: Sanatçının bilgilerini gösteren bölüm
const ArtistSection = ({ track }) => {
  const navigate = useNavigate();
  const artist = artists.find((artist) => artist.id === track.artistId);  // Şarkının sanatçısını buluyoruz

  if (!artist) {
    return (
      <div className="mb-10 text-center text-gray-400">
        Sanatçı bilgisi bulunamadı.
      </div>
    );
  }

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-center">Sanatçı Hakkında</h2>
      <div onClick={() => navigate(`/music/${track.id}/artist`)} className="cursor-pointer hover:opacity-80 transition">
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 max-w-lg mx-auto">
          <div className="p-4">
            <div className="mb-4">
              <img 
                src={artist?.image}  
                alt={artist?.name} 
                className="w-full h-auto rounded-lg mb-2" 
              />
              <h3 className="text-lg font-bold text-center">{artist?.name}</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">{artist?.followers}</p>
              <p className="text-gray-400 text-sm mt-2">{artist?.bio}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-gray-400 hover:text-white text-sm">
                  Takip Et
                </button>
                <button className="text-gray-400 hover:text-white text-sm">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MusicDetail bileşeni: Şarkı detaylarını ve diğer bölümleri gösteren ana bileşen

export default function MusicDetail() {
  const { id } = useParams();  // URL'den şarkı id'sini alır
  const track = tracks.find((item) => item.id.toString() === id);  // songs'dan şarkıyı bulur

  if (!track) {
    return (
      <div className="p-6 text-center text-gray-400">
        Şarkı bulunamadı.
      </div>
    );
  }

  const artist = artists.find((artist) => artist.id === track.artistId); // doğru sanatçıyı bul

  return (
    <>
      <div className="p-6 text-center">
        <img
          src= {track?.image} // Şarkının resmi
          alt={track?.title}
          className="w-full h-auto md:h-60 md:w-120 object-cover rounded-lg mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">{track?.title}</h1>
        <p className="text-gray-400">{track?.artist}</p>
      </div>
      <LyricsSection />
      <ArtistSection track={track} />
    </>
  );
}

// Diğer bileşenleri dışa aktar
export { LyricsSection, ArtistSection, MusicDetail };