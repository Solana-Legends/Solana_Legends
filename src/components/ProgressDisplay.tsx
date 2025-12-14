import { ProgressBar } from "./ProgressBar";

interface ProgressDisplayProps {
  label: string;
  current: number;
  goal: number;
  aura: boolean;
  isLoading: boolean;
  isMain?: boolean;
  remaining?: number;
  topSource?: string;
  fireUnleashedText: string;
  remainingFollowersText: string;
  fireActivatedText: string;
}

export default function ProgressDisplay({
  label,
  current,
  goal,
  aura,
  isLoading,
  isMain = false,
  remaining = 0,
  topSource = '',
  fireUnleashedText,
  remainingFollowersText,
  fireActivatedText
}: ProgressDisplayProps) {
  const percent = goal > 0 ? (current / goal) * 100 : 0;

  if (isMain) {
    return (
      <div className="mb-6">
        <p className="text-zinc-300 mb-1">{label}</p>
        <ProgressBar percent={percent} aura={aura} />
        {current < goal ? (
          <p className="text-amber-400 font-medium mt-1">
            {remainingFollowersText.replace("{remaining}", remaining.toString())}
          </p>
        ) : (
          <p className="text-amber-400 font-medium mt-1">
            {fireActivatedText.replace("{source}", topSource)}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <p className="text-zinc-300 mb-1">{label}</p>
      <ProgressBar percent={percent} aura={aura} />
      {aura && !isLoading && (
        <p className="text-amber-400 font-medium mt-1">
          🔥 {fireUnleashedText}
        </p>
      )}
    </div>
  );
}
