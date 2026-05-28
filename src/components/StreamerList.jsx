import StreamerCard from './StreamerCard';

export default function StreamerList({ streamers }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {streamers.map((streamer, index) => (
        <StreamerCard key={index} streamer={streamer} />
      ))}
    </div>
  );
}