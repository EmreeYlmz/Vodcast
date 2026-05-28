import React from "react";
import { posts } from "../data/posts";
import blogImage from "../assets/images/blogimage.png";
import { formatDate } from "../utils/formatDate";
import { FaHeart, FaRegComment, FaBookmark } from "react-icons/fa";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthorPosts({ author }) {
  const authorPosts = posts.filter(post => post.author === author);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">{author}’ten daha fazlası</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {authorPosts.map((post) => (
          <Link
            to={`/blogs/${post.id}`}
            key={post.id}
            className="bg-background p-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <img
              src={post.image || blogImage}
              alt={post.title}
              className="w-full h-36 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-gray-400 text-sm">{post.excerpt.slice(0, 80)}...</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><FaHeart /> {post.likes}</span>
              <span className="flex items-center gap-1"><FaRegComment /> {post.comments?.length || 0}</span>
              <div className="flex items-center gap-2 ml-auto">
                <FaBookmark />
                <MoreHorizontal />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="border border-gray-400 text-sm px-4 py-2 rounded hover:bg-gray-700 transition">
          {author}’in Tüm Yazılarını Gör
        </button>
      </div>
    </div>
  );
}