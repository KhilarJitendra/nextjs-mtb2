'use client';

import { useRef, useState } from 'react';
import { PauseIcon, PlayIcon } from '../../icons/icons';
import Style from './VideoPlayer.module.scss';

import VideoPlayerProps from './VideoPlayer.types';

const VideoPlayer = ({
  src,
  poster,
  autoPlay,
  controls,
  loop,
  width,
  height,
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
  muted,
  preload,
}: VideoPlayerProps) => {
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
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload={preload}
        onPlay={onPlay}
        onPause={onPause}
        onTimeUpdate={onTimeUpdate}
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

export default VideoPlayer;
