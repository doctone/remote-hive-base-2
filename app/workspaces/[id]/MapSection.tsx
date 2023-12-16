"use client";
import React from "react";
import dynamic from "next/dynamic";

export default function MapSection({ lat, lon }: { lat: number; lon: number }) {
  const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  return (
    <div id="map" className="w-full h-80">
      <MapWithNoSSR lat={lat} lon={lon} />
    </div>
  );
}
