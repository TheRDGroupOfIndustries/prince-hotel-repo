
"use client";

import React from "react";
import { LocationList } from "./LocationList";
import { HOTEL_PRINCE_DIAMOND } from "@/data/hotel-prince-diamond";

export const LocationContent: React.FC = () => {
  const { lat, lng } = HOTEL_PRINCE_DIAMOND.coordinates || { lat: 25.2982006, lng: 82.9728342 };
  
  return (
    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-x-12">
      {/* Left Side – List of Nearby Locations */}
      <LocationList />

      {/* Right Side – Embedded Google Map */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={`https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`}
          title="Hotel Prince Diamond Palace Location"
          className="h-96 w-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
