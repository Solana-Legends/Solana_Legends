import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Maximize, Play, Pause } from "lucide-react";

type Props = {
  src: string;
  glowColor?: string;
};

export default function VideoWithControls({
  src,
  glowColor = "#A020F0",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Referencia para Fullscreen
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sincronizar volumen y silencio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted]);

  // Actualizar línea de tiempo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const toggleMute = () => setMuted((m) => !m);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) videoRef.current.pause();
      else videoRef.current.play();
      setPlaying(!playing);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && muted) setMuted(false);
    if (newVolume === 0 && !muted) setMuted(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen?.();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full group rounded-xl overflow-hidden shadow-2xl transition-all duration-300 bg-black
        hover:shadow-[0_0_40px_${glowColor}]`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Capa de degradado sutil para que los controles se vean siempre (sin rectángulos negros) */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Contenedor de Controles Limpio */}
      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {/* Línea de Tiempo (Progress Bar) */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 accent-[#FFA908] cursor-pointer bg-white/20 rounded-lg appearance-none"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-[#FFA908] transition-colors"
            >
              {playing ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-[#FFA908] transition-colors"
              >
                {muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 md:w-28 accent-white cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-[#FFA908] transition-colors"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
