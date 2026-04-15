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
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Estados para el Tooltip de tiempo
  const [hoverTime, setHoverTime] = useState(0);
  const [tooltipPos, setTooltipPos] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const parts = [];
    if (hrs > 0) parts.push(hrs.toString().padStart(2, "0"));
    parts.push(mins.toString().padStart(2, "0"));
    parts.push(secs.toString().padStart(2, "0"));
    return parts.join(":");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted]);

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

  const handleTimelineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current || duration === 0) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición X relativa a la barra
    const percentage = Math.max(0, Math.min(1, x / rect.width));

    setHoverTime(percentage * duration);
    setTooltipPos(x);
    setIsHovering(true);
  };

  const handleTimelineMouseLeave = () => setIsHovering(false);

  const toggleMute = () => setMuted((m) => !m);
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) videoRef.current.pause();
      else videoRef.current.play();
      setPlaying(!playing);
    }
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
      if (!document.fullscreenElement)
        containerRef.current.requestFullscreen?.();
      else document.exitFullscreen();
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

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

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {/* Línea de Tiempo con Tooltip */}
        <div
          ref={timelineRef}
          className="relative w-full flex items-center group/timeline"
          onMouseMove={handleTimelineMouseMove}
          onMouseLeave={handleTimelineMouseLeave}
        >
          {/* Tooltip de tiempo (Flotante) */}
          {isHovering && (
            <div
              className="absolute bottom-full mb-2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[10px] md:text-xs py-1 px-2 rounded border border-white/10 pointer-events-none font-mono"
              style={{ left: `${tooltipPos}px` }}
            >
              {formatTime(hoverTime)}
            </div>
          )}

          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            style={{
              background: `linear-gradient(to right, white ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%)`,
            }}
            className="w-full h-1 md:h-1.5 rounded-lg appearance-none cursor-pointer transition-all accent-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-indigo-400"
            >
              {playing ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
            </button>

            <div className="text-white font-mono text-xs md:text-sm tracking-wider opacity-90">
              {formatTime(currentTime)} <span className="text-white/40">/</span>{" "}
              {formatTime(duration)}
            </div>

            <div className="flex items-center gap-2 ml-2">
              <button onClick={toggleMute} className="text-white">
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
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 md:w-24 accent-white cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-indigo-400"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
