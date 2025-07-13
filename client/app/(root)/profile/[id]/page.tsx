import EmptyState from '@/component/EmptyState';
import Header from '@/component/Header';
import VideoCard from '@/component/VideoCard';
import { dummyCards } from '@/constants';
import { getAllVideosByUser } from '@/lib/actions/video';

const page = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  const { user, videos } = await getAllVideosByUser(id, query, filter);
  return (
    <div className="wrapper page">
      <Header
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image || ''}
      />
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
          title="No Video Available Yet"
          description="Video Will Show Up Once You Upload Them"
        />
      )}
    </div>
  );
};

export default page;
