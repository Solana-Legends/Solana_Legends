import { useEffect } from "react";

type Props = {
  adSlot: string;
  style?: React.CSSProperties;
};

export default function AdUnit({ adSlot, style }: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("adsbygoogle push failed", e);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3756112154881642"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
