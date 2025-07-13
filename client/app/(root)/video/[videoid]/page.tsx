import VideoDetailHeader from '@/component/VideoDetailHeader';
import VideoPlayer from '@/component/VideoPlayer';
import { getVideoById } from '@/lib/actions/video';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ params }: Params) => {
  const { videoid } = await params;
  const { user, videos } = await getVideoById(videoid);
  if (!videos) redirect('/404');
  return (
    <main className="wrapper page">
      <VideoDetailHeader
        {...videos}
        userImg={user?.image}
        username={user?.name}
        ownerId={videos.userId}
      />
      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={videos.videoId} />
        </div>
      </section>
    </main>
  );
};

export default page;
