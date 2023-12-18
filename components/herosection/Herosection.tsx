'use client';

import { useRef, useState } from 'react';
import Style from './Herosection.module.scss';

import { PauseIcon, PlayIcon } from '../../icons/icons';

interface HeroSectionProps {
  src: string;
  poster?: string;
}

const HeroSection = ({ src, poster }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className={Style.video_container}>
      <video
        ref={videoRef}
        className={Style.video}
        onEnded={handleVideoEnd}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={Style.overlay}>
        <button
          className={Style.playPauseButton}
          onClick={isPlaying ? handlePause : handleTogglePlay}
        >
          {isPlaying ? (
            <PauseIcon width={44} height={44} />
          ) : (
            <PlayIcon width={44} height={44} />
          )}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
