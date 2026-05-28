import { Users, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function LiveStreamCard({ stream }) {
  return (
    <Link to={`/live/${stream.id}`} className="block">
      <div className="bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col w-full h-90 border border-white/20 p-4 transition hover:scale-[1.02] hover:shadow-lg">
        {/* Sol taraf: Yayın görseli */}
        <div className="relative w-full flex-shrink-0 h-40">
          <img
            src={stream.image}
            alt={stream.title}
            className="w-full h-full object-cover rounded-t-3xl"
          />
          <span className="absolute top-2 left-2 bg-red-600 text-xs font-semibold px-2 py-1 rounded">
            Canlı
          </span>
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <Users size={16} className="text-gray-400" />
            <span className="text-sm text-gray-400">{stream.viewers} B</span>
          </div>
        </div>

        {/* Yayıncı avatarı ve adı */}
        <div className="flex items-center px-3 py-2">
          <img
            src={stream.avatar}
            alt={stream.streamer}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm">{stream.streamer}</span>
        </div>

        {/* Yayın bilgileri */}
        <div className="p-3 flex-1 flex flex-col justify-between">
          <h3 className="font-semibold mb-2">{stream.title}</h3>
          <div className="flex flex-wrap gap-1 mt-auto">
            {stream.tags.map((tag, i) => (
              <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}