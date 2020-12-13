// import React, { Component } from 'react'
// import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
// import "./Location.css";
// // import L from "leaflet";

// function SharedMap (props) {
  
//         return (
//             <div>
//         <MapContainer
         
//          className="map" 
//          center={[props.position[0].lat, props.position[0].lng]}
//          zoom={props.zoom}
//        >
//          <TileLayer
//            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//          />
//          <Marker
//            position={props.center}
//            icon={props.myIcon}
//          >
//            <Popup>
//              <h3>
//                Name:<small>{props.name}</small>
//              </h3>
//              <p>
//                City:<small>{props.city}</small>
//              </p>
//              <p>
//                state:<small>{props.state}</small>
//              </p>
//            </Popup>
//          </Marker>
//        </MapContainer>;
//             </div>
//         )
//     }
// export default SharedMap;
