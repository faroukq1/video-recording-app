import EmptyState from '@/component/EmptyState';
import Header from '@/component/Header';
import VideoCard from '@/component/VideoCard';
import { getAllVideos } from '@/lib/actions/video';
import React from 'react';

const page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;
  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      {videos.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ videos: video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video?.thumbnailUrl}
              userImg={user?.image || ''}
              username={user?.name || 'Guest'}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Video Foud"
          description="Try adjusting your search"
        />
      )}
    </main>
  );
};

export default page;
