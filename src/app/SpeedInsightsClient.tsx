"use client";

import dynamic from "next/dynamic";

// Use dynamic import with a fallback if SpeedInsights is not exported.
const DynamicSpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/next").then((mod) => {
      if (!mod.SpeedInsights) {
        console.warn(
          "SpeedInsights was not found in @vercel/speed-insights/next. Rendering null."
        );
        return () => null;
      }
      return mod.SpeedInsights;
    }),
  { ssr: false }
);

export default function SpeedInsightsClient() {
  return <DynamicSpeedInsights />;
}
