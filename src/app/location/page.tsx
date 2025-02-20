"use client";
import React, { useState } from 'react';
import GoogleMapSection from './GoogleMapSection';

const dummyBins = [
    {
        id: 1,
        location: "Hampankatta, Mangalore",
        latitude: 12.8741,
        longitude: 74.8433,
        fillPercentage: 75,
        active: true,
    },
    {
        id: 2,
        location: "Panambur Beach Road, Mangalore",
        latitude: 12.9372,
        longitude: 74.8013,
        fillPercentage: 45,
        active: true,
    },
];

function MapView() {
    const [bins] = useState(dummyBins);
    const [coordinates] = useState({
        lat: 12.9141, // Mangalore city center
        lng: 74.8560
    });

    return (
        <div>
            <GoogleMapSection
                bins={bins}
                coordinates={coordinates}
            />
        </div>
    );
}

export default MapView;
