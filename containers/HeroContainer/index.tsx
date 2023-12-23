import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import VideoPlayerProps from '@/components/VideoPlayer/VideoPlayer.types';

interface HeroContainerProps extends VideoPlayerProps {}

const HeroContainer = ({
  src,
  poster,
  muted,
  loop,
  autoPlay,
}: HeroContainerProps) => {
  return (
    <div className="mtb_herosection_container">
      <div className="mtb_herosection_item">
        <VideoPlayer
          src={src}
          poster={poster}
          muted={muted}
          loop={loop}
          autoPlay={autoPlay}
        />
      </div>
    </div>
  );
};

export default HeroContainer;
