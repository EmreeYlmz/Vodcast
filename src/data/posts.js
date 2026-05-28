import blogImage from '../assets/images/blogimage.png';
import avatar from '../assets/images/avatarw.png';
export const posts = [
  {
    id: 1,
    author: "Alper Şimşek",
    authorImage: avatar,
    title: "İmkansız Diye Bir Şey Yoktur",
    excerpt: "Bu yazıda bahsedeceğim ayrı ayrı bir çok farklı yazıda değiniyorum ama...",
    date: "2025-04-15",
    likes: 25,
    comments: 1,
    image: blogImage,
    authorSocials: [
      { platform: "Twitter", url: "https://twitter.com/alpersimsek" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/alpersimsek" }
    ],
    authorBio: "Frontend geliştirici, teknoloji tutkunu.",
    content: "Bu yazı, imkansız görünen hedeflere nasıl ulaşılabileceğine dair kişisel deneyimlerimi ve yöntemlerimi içeriyor.",
    tags: ["Motivasyon", "Gelişim", "Kariyer"],
    relatedPosts: [
      { id: 5, title: "Hayal Gücünün Gücü", excerpt: "Hayallerin gücünü küçümsemeyin." },
      { id: 6, title: "Başarıya Giden Yol", excerpt: "Başarıya ulaşmak için izlemeniz gereken yol haritası." }
    ]
  },
  {
    id: 2,
    author: "Emre Şimşek",
    authorImage: avatar,
    title: "İmkansız Diye Bir Şey Yoktur",
    excerpt: "Bu yazıda bahsedeceğim ayrı ayrı bir çok farklı yazıda değiniyorum ama...",
    date: "2025-04-15",
    likes: 25,
    comments: 1,
    image: blogImage,
    authorSocials: [
      { platform: "Twitter", url: "https://twitter.com/emresimsek" }
    ],
    authorBio: "Yazılım geliştirici ve girişimci.",
    content: "İmkansız denen şeyin nasıl mümkün hale geldiğini anlatan ilham verici bir yazı.",
    tags: ["Yazılım", "Motivasyon", "Hayat"],
    relatedPosts: [
      { id: 7, title: "Yazılımla Dünyayı Değiştirmek", excerpt: "Kod yazmanın dünyayı nasıl değiştirdiğine dair bir bakış." }
    ]
  },
  {
    id: 3,
    author: "Emre Şimşek",
    authorImage: avatar,
    title: "İmkansız Diye Bir Şey Yoktur",
    excerpt: "Bu yazıda bahsedeceğim ayrı ayrı bir çok farklı yazıda değiniyorum ama...",
    date: "2025-04-15",
    likes: 25,
    comments: 1,
    image: blogImage,
    authorSocials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/emresimsek" }
    ],
    authorBio: "Yeni nesil teknolojilere ilgi duyan bir yazılımcı.",
    content: "Hayatımızda imkansız olarak düşündüğümüz pek çok şey aslında mümkündür.",
    tags: ["Kariyer", "Hayat", "Yazılım"],
    relatedPosts: [
      { id: 8, title: "Direnç ve Azim", excerpt: "Dirençli olmak başarıya ulaşmak için neden önemlidir?" }
    ]
  },
  {
    id: 4,
    author: "emre Şimşek",
    authorImage: avatar,
    title: "İmkansız Diye Bir Şey Yoktur",
    excerpt: "Bu yazıda bahsedeceğim ayrı ayrı bir çok farklı yazıda değiniyorum ama...",
    date: "2025-04-15",
    likes: 25,
    comments: 1,
    image: blogImage,
    authorSocials: [
      { platform: "Twitter", url: "https://twitter.com/alpersimsek" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/alpersimsek" }
    ],
    authorBio: "Yazılımcı, Yazar, Eğitmen",
    content: "Bu yazıda bahsedeceğim ayrı ayrı bir çok farklı yazıda değiniyorum ama...",
    tags: ["Yazılım", "Geliştirme", "Eğitim"],
    relatedPosts: [
      { id: 5, title: "İlgili Gönderi 1", excerpt: "Bu gönderi ile ilgili bir içerik." },
      { id: 6, title: "İlgili Gönderi 2", excerpt: "Bu gönderi ile ilgili bir içerik." }
    ]
  }
];
