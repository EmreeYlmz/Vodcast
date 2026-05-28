import { useState } from 'react';
import { artists } from '../data/musicData';
import { useParams } from 'react-router-dom';


const MusicProfileDetail = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id.toString() === id);

  if (!artist) {
    return <div className="text-center text-gray-400 p-6">Sanatçı bulunamadı.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-3xl mx-auto mb-6">
      <div className="w-full max-w-xl overflow-hidden rounded-lg shadow-lg">
        <img 
          src={artist.image}
          alt="Artist" 
          className="w-full h-72 object-cover"
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-200">{(artist.listeners ?? 0).toLocaleString()}</h1>
        <p className="text-gray-400">Monthly Listeners</p>
      </div>
      <div className="mt-3">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
          {artist.rank ?? 'N/A'} in the world
        </span>
      </div>
      <div className="w-full max-w-1xl overflow-hidden rounded-lg shadow-lg mt-6" >
      <ArtistBio artist={artist} />
      </div>
    </div>
  );
};

// Artist Bio Component
const ArtistBio = ({ artist }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
      <p className="text-gray-300 mb-6">
        {artist.bio.paragraph1}
      </p>
      <p className="text-gray-300">
        {artist.bio.paragraph2}
      </p>
    </div>
  );
};

// Music Card Component

export default { MusicProfileDetail, ArtistBio };
