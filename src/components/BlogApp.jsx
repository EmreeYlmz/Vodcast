import React from 'react';
import BlogPostCard from './BlogPostCard';
import Navigation from './Navigation';
import BlogSidebar from '../blogsidebar/sidebar';
import Sidebar from '../page/layouts/Sidebar';

export default function BlogApp({ posts }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-white">
      {/* Navigation bar */}
      <div className="w-full flex justify-center  ">
        <div className="w-full max-w-screen-xl px-4">
          <Navigation />
        </div>
      </div>

      {/* Grid layout: 12 kolonlu sistem, azaltılmış padding ve düzgün boşluklar */}
      <div className="grid grid-cols-12 gap-3 max-w-screen-xl mx-auto px-2 sm:px-4 py-4">
        {/* Sol Sidebar (2 kolon) */}
        <aside className="col-span-12 md:col-span-2 md:sticky md:top-4 md:h-[calc(100vh-5rem)] md:overflow-y-auto">
          <div className="pr-4">
            <Sidebar />
          </div>
        </aside>


        {/* Ana içerik (8 kolon) */}
        <main className="col-span-12 md:col-span-8 space-y-6">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </main>

        {/* Sağ Sidebar (2 kolon) */}
        <aside className="col-span-12 md:col-span-2">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
