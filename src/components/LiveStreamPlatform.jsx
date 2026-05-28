import { useState, useRef, useEffect } from 'react'; // useState: Bileşen durumu (state) yönetimini sağlar. useRef: DOM referansı verir. useEffect: Bileşen yüklendiğinde veya güncellendiğinde yan etkileri yönetir.
import { useParams } from 'react-router-dom'; // useParams: URL parametrelerini alarak bileşen içinde kullanmayı sağlar.
import { Users, Maximize2, Volume2, Gift, Play, Pause, Share2, Settings } from 'lucide-react'; // Lucide ikonları, UI bileşenlerinde kullanılan simgeler.
import LiveStreamCard from '../components/LiveStreamCard'; // LiveStreamCard: Diğer yayınları göstermek için kullanılan bileşen.
import { chatMessages as initialMessages, otherStreams } from '../data/liveStream'; // initialMessages: Başlangıç sohbet mesajları. otherStreams: Diğer yayın verileri.

export default function LiveStreamPlatform() {
  // messages: Sohbet mesajlarını tutar, başlangıçta initialMessages kullanılır.
  // setMessages: Mesaj listesi güncellemek için kullanılır.
  const [messages, setMessages] = useState(
    initialMessages.map((m, i) => ({
      id: i + 1,
      username: m.user,
      message: m.content,
    }))
  ); // useState: Bileşen içinde durum yönetimi sağlar.

  // newMessage: Kullanıcının yazdığı yeni mesajı tutar.
  // setNewMessage: Yeni mesajı günceller.
  const [newMessage, setNewMessage] = useState(''); // useState: Bileşen durumu yönetimi.

  // isFullscreen: Video tam ekran modunda mı kontrol eder.
  // setIsFullscreen: Tam ekran durumunu günceller.
  const [isFullscreen, setIsFullscreen] = useState(false); // useState: Durum yönetimi.
  // isPlaying: Videonun oynatılıp oynatılmadığını takip eder.
  const [isPlaying, setIsPlaying] = useState(false);
  // isVideoLoaded: Videonun yüklenme durumunu takip eder.
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  /**
   * togglePlayPause: Videoyu oynatır veya duraklatır.
   */
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // id: URL parametrelerinden yayın ID'sini alır.
  const { id } = useParams(); // useParams: URL parametrelerini alır.

  // currentStream: URL'deki id'ye göre mevcut yayını bulur.
  const currentStream = otherStreams.find((s) => s.id === parseInt(id));

  // videoRef: Video DOM elemanına referans verir.
  const videoRef = useRef(null); // useRef: DOM referansı sağlar.

  // chatContainerRef: Sohbet kutusunun DOM referansı.
  const chatContainerRef = useRef(null); // useRef: DOM referansı.

  // useEffect: Mesajlar değiştiğinde sohbet kutusunu en alta kaydırır.
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // useEffect: Yan etkileri yönetir, burada mesajlar değiştiğinde çalışır.

  /**
   * handleSendMessage: Kullanıcının yazdığı mesajı listeye ekler ve inputu temizler.
   * Boş mesaj gönderilmesini engeller.
   */
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        username: 'user',
        message: newMessage,
      },
    ]);
    setNewMessage('');
  };

  /**
   * toggleFullscreen: Videoyu tam ekran moduna alır veya tam ekran modundan çıkarır.
   * isFullscreen durumunu günceller.
   */
  const toggleFullscreen = () => {
    if (!isFullscreen && videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="flex flex-col bg-background text-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-2 pt-2 pb-2 px-4 lg:h-[400px] border border-white/20 rounded-md">
        {/* Parent container for video and chat */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative flex flex-col border border-white/20">
          {/* Video Section */}
          <div className="w-full h-full bg-gray-800 relative">
            {/* Share and Settings icons */}
            <div className="absolute top-0 right-0 flex space-x-2 p-4 z-10">
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
                <Share2 size={20} color="white" />
              </button>
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
                <Settings size={20} color="white" />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button onClick={togglePlayPause} className="bg-black/50 p-3 rounded-full hover:bg-black/70">
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
            </div>
            {/* Fallback image when video is not loaded */}
            {!isVideoLoaded && (
              <img
                src={currentStream?.image}
                alt="Video yükleniyor"
                className="absolute inset-0 object-contain w-full h-full z-0"
              />
            )}
            <video
              ref={videoRef}
              className="h-full object-contain mx-auto"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/sample.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            {/* Video Kontrol */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-4 text-sm">
                  <span>01:02:03</span>
                  <span className="flex items-center text-gray-300">
                    <Users size={14} className="mr-1" /> {currentStream?.viewers || 0}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-1 rounded-full hover:bg-gray-700">
                  <Volume2 size={20} />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-700" onClick={toggleFullscreen}>
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Chat Section */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full bg-background p-3 flex flex-col border border-white/20">
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto space-y-4 scrollbar-hidden"
          >
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                <div className="text-gray-400 text-sm">{msg.username}:</div>
                <div className="text-white">{msg.message}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Mesaj gönder"
              className="w-full sm:flex-1 bg-gray-700 text-white rounded sm:rounded-l px-4 py-2 focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="w-full sm:w-auto bg-gray-700 text-gray-300 rounded sm:rounded-r px-4 py-2"
            >
              😊
            </button>
          </div>
        </div>
      </div>

      {/* User Info and Follow Buttons BELOW the message input area */}
      <div className="bg-background border border-white/20 p-3 rounded h-full flex flex-col sm:flex-row gap-4 sm:items-center w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="flex items-center space-x-4">
            <img
              src={currentStream?.avatar}
              alt={currentStream?.streamer}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{currentStream?.title}</h2>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{currentStream?.streamer}</span>
              </div>
              <div className="flex mt-1 space-x-2">
                {currentStream?.categories?.map((cat, i) => (
                  <span key={i} className="bg-gray-700 text-sm px-2 py-0.5 rounded">{cat}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-2 gap-2 w-full sm:w-auto">
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded w-full sm:w-auto">Takip Et</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded w-full sm:w-auto">Abone Ol</button>
            <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded w-full sm:w-auto flex justify-center">
            <Gift size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Diğer Yayınlar */}
      <div className="bg-background p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Diğer Canlı Yayınlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherStreams.map((stream, index) => (
            <div
              key={index}
              className="rounded-md p-3 h-full"
            >
              <LiveStreamCard stream={stream} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}