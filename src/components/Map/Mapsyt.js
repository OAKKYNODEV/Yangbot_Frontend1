
import React, { Component } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Map, TileLayer, useMap ,Marker ,Popup} from 'react-leaflet'
const position = [151.505, -0.09]

const MapExample = props => {
    return (
        <Map center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                </Popup>
            </Marker>
        </Map>
  );
};

export default MapExample;
