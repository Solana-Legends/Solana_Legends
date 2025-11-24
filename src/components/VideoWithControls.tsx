import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize, Play, Pause } from 'lucide-react';

type Props = {
  src: string;
  glowColor?: string;
};

export default function VideoWithControls({ src, glowColor = '#A020F0' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted]);

  const toggleMute = () => setMuted((m) => !m);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && muted) setMuted(false);
    if (newVolume === 0 && !muted) setMuted(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen?.();
      }
    }
  };

  return (
    <div
      className={`relative group rounded-xl overflow-hidden shadow-2xl transition-all duration-300
        hover:shadow-[0_0_40px_${glowColor}]`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl pointer-events-none" />

      <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/50 backdrop-blur-sm p-2 px-3 rounded-full">
        <button onClick={togglePlay} className="text-white">
          {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button onClick={toggleMute} className="text-white">
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-28 accent-indigo-400"
        />
        <button onClick={handleFullscreen} className="text-white">
          <Maximize className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
