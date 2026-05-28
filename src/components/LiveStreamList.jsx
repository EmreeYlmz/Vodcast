import LiveStreamCard from './LiveStreamCard';

export default function LiveStreamList({ filteredStreams = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {filteredStreams.map((stream) => (
        <LiveStreamCard key={stream.id} stream={stream} />
      ))}
    </div>
  );
}
