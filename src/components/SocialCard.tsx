import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SocialCardProps {
  icon: LucideIcon;
  platformName: string;
  handle: string;
  metric: number;
  metricLabel: string;
  link: string;
  ctaText: string;
  isLoading: boolean;
  iconColorClass: string;
  buttonColorClass: string;
  hoverButtonColorClass: string;
}

export default function SocialCard({
  icon: Icon,
  platformName,
  handle,
  metric,
  metricLabel,
  link,
  ctaText,
  isLoading,
  iconColorClass,
  buttonColorClass,
  hoverButtonColorClass
}: SocialCardProps) {
  return (
    <Card className="bg-[#1A1530]/40 border border-[#FFA908]/30 rounded-xl hover:shadow-[0_0_25px_#FFA908] hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Icon className={`h-8 w-8 ${iconColorClass}`} />
        </div>
        <CardTitle className="text-white">{platformName}</CardTitle>
        <CardDescription className="text-purple-300">{handle}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className={`text-3xl font-bold ${iconColorClass} mb-2`}>
          {isLoading ? "..." : metric}
        </div>
        <p className="text-sm text-purple-300 mb-4">{metricLabel}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full ${buttonColorClass} ${hoverButtonColorClass} text-white px-4 py-2 rounded-lg transition-all duration-300 aura-hover aura-pulsante`}
        >
          {ctaText}
        </a>
      </CardContent>
    </Card>
  );
}
