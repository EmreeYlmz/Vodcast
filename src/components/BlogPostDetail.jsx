import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import CommentSection from "./CommentSection";
import blogImage from '../assets/images/blogimage.png';
import AuthorPosts from "./AuthorPosts";
import { FaBookmark, FaHeart, FaRegComment } from "react-icons/fa";
import { MoreHorizontal } from "react-feather";

export default function BlogPostDetail() {
  const { id } = useParams();
  const postId = parseInt(id);
  if (isNaN(postId)) return <div className="text-white p-4">Geçersiz gönderi ID'si.</div>;
  const post = posts.find(p => p.id === postId);

  if (!post) return <div className="text-white p-4">Gönderi bulunamadı.</div>;

  const [likes, setLikes] = useState(0);
  const [isReplying, setIsReplying] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleReplyBox = () => {
    setIsReplying(!isReplying);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setNewComment('');
      setIsReplying(false);
    }
  };

  return (
    <div className="p-6 text-white max-w-3xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1> {/* Gönderi başlığı */}
      </div>

      <div className="flex items-center mb-4">
        <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <span>{post.author}</span>
          <br />
          <span className="text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <button className="bg-gray-400 text-white px-5 py-1 ml-5 mt-1 rounded-full text-sm">Takip Et</button>
      </div>
     
      {/* begen yorum  */}
      <div className="flex items-center gap-6 text-gray-400 text-sm mt-2">
           <span className="flex items-center gap-1"><FaHeart /> {post.likes}</span>
           <span className="flex items-center gap-1"><FaRegComment /> {post.comments}</span>
          <div className="flex items-center gap-2 ml-auto">
            <FaBookmark className="cursor-pointer hover:text-white" />
            <MoreHorizontal className="cursor-pointer hover:text-white" /> 
          </div>
      </div>

      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-gray-300 mb-8">{post.excerpt}</p>
      <p className="text-gray-300 mb-8">{post.content || ""}</p>

      <hr className="border-gray-700 my-6" />
      {/* Yorumlar bölümü */}
      <div className="bg-background p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">Yorumlar</h3>
        <CommentSection comments={Array.isArray(post.comments) ? post.comments : []} />
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Yorum yapma kutusu */}
      {isReplying && (
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            placeholder="Yorumunuzu buraya yazın..."
          />
          <button onClick={handleCommentSubmit} className="mt-2 text-blue-500">Gönder</button>
        </div>
      )}

      {/* Aynı yazara ait diğer gönderiler */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Alper Şimşek'ten Daha Fazlası</h2>
        <AuthorPosts author={post.author} />
      </div>
    </div>
  );
}
