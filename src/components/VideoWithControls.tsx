import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize, Play, Pause } from 'lucide-react';

type Props = {
  src: string;
};

export default function VideoWithControls({ src }: Props) {
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
    <div className="relative w-full h-full group overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        // Forzamos h-full y w-full con object-cover para eliminar franjas
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Gradiente sutil para los controles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Controles en la parte inferior absoluta del video */}
      <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/40 backdrop-blur-md p-3 px-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <button onClick={togglePlay} className="text-white hover:text-[#FFA908] transition-colors">
          {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button onClick={toggleMute} className="text-white hover:text-[#FFA908] transition-colors">
          {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 md:w-32 accent-[#FFA908] cursor-pointer"
        />

        <button onClick={handleFullscreen} className="text-white hover:text-[#FFA908] transition-colors">
          <Maximize className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
