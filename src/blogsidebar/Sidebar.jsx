import React from 'react';
import RecentPosts from './RecentPosts';
import TagsSection from './TagsSection';
import SuggestedWriters from './SuggestedWriters';

export default function Sidebar() {
  return (
    <aside className="w-80 bg-background border-l text-white  p-4">
      <RecentPosts />
      <TagsSection />
      <SuggestedWriters />
    </aside>
  );
}