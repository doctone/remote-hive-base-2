"use client";
import React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  return (
    <div id="map" className="w-full h-80">
      <MapWithNoSSR />
    </div>
  );
}