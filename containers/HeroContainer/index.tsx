'use client';

import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { getStrapiData } from '@/libs/strapi';

const HeroContainer = async () => {
  const data = await getStrapiData();
  const url = data.data[0].attributes.heroVideo;

  return (
    <div className="mtb_herosection_container">
      <div className="mtb_herosection_item">
        <VideoPlayer src={url} muted={true} loop={true} autoPlay={true} />
      </div>
    </div>
  );
};

export default HeroContainer;
