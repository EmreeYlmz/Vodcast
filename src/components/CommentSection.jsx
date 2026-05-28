import React, { useState } from 'react';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import avatar from '../assets/images/avatara.png';

const Comment = ({ comment, addComment }) => {
  const [likes, setLikes] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1); // Yorum beğenildiğinde sayacı artır
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Yazılan yorumu al
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      addComment(newComment); // Yeni yorumu ekle
      setNewComment(''); // Yorum kutusunu temizle
      setIsReplying(false); // Yorum kutusunu gizle
    }
  };

  const toggleReplyBox = () => {
    setIsReplying(!isReplying); // Yorum yapma kutusunun görünürlüğünü değiştir
  };

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-md">
      <div className="flex items-start">
        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
        <div>
          <span className="font-semibold">{comment.authorName}</span>
          <div className="text-sm text-gray-400">{new Date(comment.date).toLocaleDateString()}</div>
        </div>
      </div>
      
      <p className="text-gray-300 mb-2">{comment.text}</p>

      <div className="flex gap-4">
        <button onClick={handleLike} className="flex items-center gap-1">
          <FaHeart /> {likes} 
        </button>
        <button onClick={toggleReplyBox} className="flex items-center gap-1">
          <FaRegComment /> {comment.comments} 
        </button>
      </div>

      {/* Yorum yapma kutusu */}
      {isReplying && (
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            placeholder="Yorumunuzu buraya yazın..."
          />
          <button onClick={handleCommentSubmit} className="mt-2 text-blue-500">Gönder</button>
        </div>
      )}
    </div>
  );
};

const CommentSection = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const addComment = (commentText) => {
    const newComment = {
      id: commentList.length + 1,
      authorName: 'Yeni Yorumcu',
      authorAvatar: '/default-avatar.png',
      date: new Date().toISOString(),
      text: commentText
    };
    setCommentList([newComment, ...commentList]); // Yeni yorumu en üste ekle
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Yazılan yorumu al
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      addComment(newComment); // Yeni yorumu ekle
      setNewComment(''); // Yorum kutusunu temizle
    }
  };

  return (
    <div>
      {/* Sabit Yorum Yap alanı */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">Yorum Yap</h3>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
          placeholder="Yorumunuzu buraya yazın..."
        />
        <button onClick={handleCommentSubmit} className="mt-2 text-blue-500">Gönder</button>
      </div>

      {/* Yorumlar */}
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} addComment={addComment} />
      ))}
    </div>
  );
};

export default CommentSection;