import canliyayin1 from "../assets/images/canliyayin1.png";
import avatar from '../assets/images/avatarw.png';
import panelimg1 from "../assets/images/livestream.jpg";

export const categories = [
  { id: "all", name: "Tümü" },
  { id: "egitim", name: "Eğitim" },
  { id: "spor", name: "Spor" },
  { id: "oyun", name: "Oyun" },
  { id: "sohbet", name: "Sohbet" }

];

export const subcategories = {
  egitim: ["Yazılım Geliştirme", "Kişisel Gelişim", "Tasarım"],
  spor: ["Fitness", "Pilates", "Yüzme"],
  oyun: ["League Of Legends", "Minecraft", "Fortnite"],
  sohbet: ["Gündem", "Soru-Cevap", "Sohbet"]
};

export const streams = [
  {
    id: 1,
    title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
    streamer: "Merve Merve",
    category: "egitim",
    viewers: 2.6,
    tags: ["Türkçe", "Eğitim", "Phyton"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  },
  {
    id: 2,
    title: "Spor | Pilates Dersleri",
    streamer: "Merve Merve",
    category: "spor",
    viewers: 2.6,
    tags: ["Spor", "Pilates", "Sağlıklı Yaşam"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  },
  {
    id: 3,
    title: "Sohbet | Gündem Özel",
    streamer: "Merve Merve",
    category: "sohbet",
    viewers: 2.6,
    tags: ["Sohbet", "Gündem", "Espri"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  },
  {
    id: 4,
    title: "Oyun | League Of Legends",
    streamer: "Merve Merve",
    category: "oyun",
    viewers: 2.6,
    tags: ["Sohbet", "Oyun", "Rekabet"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  },
  {
    id: 5,
    title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
    streamer: "Merve Merve",
    category: "egitim",
    viewers: 2.6,
    tags: ["Türkçe", "Eğitim", "Phyton"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  },
  {
    id: 6,
    title: "Spor | Pilates Dersleri",
    streamer: "Merve Merve",
    category: "spor",
    viewers: 2.6,
    tags: ["Spor", "Pilates", "Sağlıklı Yaşam"],
    image: canliyayin1,
    panelimg: panelimg1,
    avatar: avatar,

  }
];



// Popüler yayınlar verisi
export const popularStreams = [
  {
    id: 1,
    title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
    streamer: "Merve Merve",
    category: "egitim",
    viewers: 2.6,
    tags: ["Türkçe", "Eğitim", "Phyton"],
    image: canliyayin1,
    avatar: avatar,

  },
  {
    id: 2,
    title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
    streamer: "Merve Merve",
    category: "egitim",
    viewers: 2.6,
    tags: ["Türkçe", "Eğitim", "Phyton"],
    image: canliyayin1,
    avatar: avatar,

  },
  {
    id: 3,
    title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
    streamer: "Merve Merve",
    category: "egitim",
    viewers: 2.6,
    tags: ["Türkçe", "Eğitim", "Phyton"],
    image: canliyayin1,
    avatar: avatar,

  },
];

export const popularStreamers = [
  { avatar: avatar, name: "Merve Merve", rating: "4.9", topics: ["Phyton", "Robotik Kodlama"] },
  { avatar: avatar, name: "Merve Merve", rating: "4.9", topics: ["Phyton", "Robotik Kodlama"] },
  { avatar: avatar, name: "Merve Merve", rating: "4.9", topics: ["Phyton", "Robotik Kodlama"] },
  { avatar: avatar, name: "Merve Merve", rating: "4.9", topics: ["Phyton", "Robotik Kodlama"] },
];

export const streamData = {
  id: "main-stream",
  title: "Phyton | Sıfırdan İleri Seviye 4.Bölüm",
  streamer: "Merve Merve",
  viewers: "2,6 B",
  duration: "01:02:03",
  categories: ["Türkçe", "Eğitim", "Phyton"]
};

export const chatMessages = [
  { user: "merve", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { user: "merve", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { user: "merve", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { user: "merve", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { user: "merve", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { user: "merve", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { user: "merve", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { user: "merve", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { user: "merve", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { user: "merve", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export const otherStreams = [
  {
    id: 1,
    title: "Python | Sıfırdan ",
    streamer: "Merve Merve",
    viewers: "2,6 B",
    categories: ["Türkçe", "Eğitim", "Python"],
    avatar: avatar,
    image: canliyayin1,
    tags: ["Türkçe", "Eğitim", "Phyton"]
  },
  {
    id: 2,
    title: "Python | Sıfırdan ",
    streamer: "Merve Merve",
    viewers: "2,6 B",
    categories: ["Türkçe", "Eğitim", "Phyton"],
    avatar: avatar,
    image: canliyayin1,
    tags: ["Türkçe", "Eğitim", "Phyton"]
  },
  {
    id: 3,
    title: "Python | Sıfırdan ",
    streamer: "Merve Merve",
    viewers: "2,6 B",
    categories: ["Türkçe", "Eğitim", "Phyton"],
    avatar: avatar,
    image: canliyayin1,
    tags: ["Türkçe", "Eğitim", "Phyton"]
  }
];




