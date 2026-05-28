import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegComment, FaBookmark } from 'react-icons/fa';
import avatar from '../assets/images/avatara.png';
import blogImage from '../assets/images/blogimage.png';
import { formatDate } from '../utils/formatDate';
import { MoreHorizontal } from 'lucide-react';


const BlogPostCard = ({ post }) => {
  return (
    <Link to={`/blogs/${post.id}`} className="block">
      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
        {/* LEFT: Text Content */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <img
              src={post.authorImage || avatar}
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold">{post.author}</span>
          </div>

          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-300">{post.excerpt}</p>


          <div className="flex items-center gap-6 text-gray-400 text-sm mt-2">
           <span className="text-gray-400">{formatDate(post.date)}</span>
           <span className="flex items-center gap-1"><FaHeart /> {post.likes}</span>
           <span className="flex items-center gap-1"><FaRegComment /> {post.comments}</span>
          <div className="flex items-center gap-2 ml-auto">
            <FaBookmark className="cursor-pointer hover:text-white" />
            <MoreHorizontal className="cursor-pointer hover:text-white" /> 
          </div>
       </div>
      </div>
        {/* RIGHT: Sabit blog görseli */}
        <img
          src={blogImage}
          alt="Blog"
          className="w-[165px] h-[125px] rounded-lg object-cover self-center"
        />
      </div>
    </Link>
  );
};

export default BlogPostCard;
