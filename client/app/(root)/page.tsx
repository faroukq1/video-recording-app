import Header from '@/component/Header';
import VideoCard from '@/component/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react';

const page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />

      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  );
};

export default page;
