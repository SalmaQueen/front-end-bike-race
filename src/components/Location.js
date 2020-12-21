import React, { Component } from "react";
import "./Location.css";
import L from "leaflet";
import Data from "../components/Data";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import icon from "./assets /icon2.png";



// console.log(Data)

 class Location extends Component {
  constructor(){
    super();
    this.state= {
     todos: Data,
     zoom: "13"
 
   }

  };



  myIcon = L.icon({
    iconUrl: icon,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76],
  });

  render() {
    const first = [this.state.todos[0].position[0].lat, this.state.todos[0].position[0].lng];
    const { todos } = this.state;
    
    return (
      <div className="map">
        <MapContainer className="map" center={first} zoom={this.state.zoom} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
        {
        todos.map((item, i) => {
          let pointer = [item.position[0].lat, item.position[0].lng];

          return (
        
        // {markers}

              <Marker position={pointer} icon={this.myIcon} key={i}>
                <Popup>
                <div className="card text-center bg-display">
                <img className="profile-image"  alt="profile image" src={item.imgUrl}/>

                  <h3>
                    <small>{item.name}</small>
                  </h3>
                  <p>
                    <small>{item.city}</small>
                  </p>
                  <p>
                    <small>{item.state}</small>
                  </p>
                  </div>
                </Popup>
              </Marker>
            )

        })}
        </MapContainer >

      </div>
    );
     

    }
  }

export default Location;













// import React, { Component } from "react";
// import "./Location.css";
// import L from 'leaflet'
// import {TileLayer, Marker,Popup, MapContainer} from "react-leaflet"
// import icon from './assets/icon.png';
// import Data from "./Data";


// class Location extends React.Component {

//   state = {
//     todos: Data,
//     zoom: 13
//   }


//   myIcon = L.icon({
//     iconUrl: icon,
//     iconSize:     [38, 95], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76]
//   });

 
//   render(){
//     const first = [this.state.todos[0].position[0].lat, this.state.todos[0].position[0].lng];
//     const { todos } = this.state;
//     // console.log(first)       

//     // const markers = todos.map((item, index) => {
//     //   const pointer = [item.position[0].lat, item.position[0].lng];

//     //   <Marker key={index} position={pointer} icon={this.myIcon}>
//     //     <Popup>
//     //       <h3>
//     //         Name:<small>{item.name}</small>
//     //       </h3>
//     //       <p>
//     //         City:<small>{item.city}</small>
//     //       </p>
//     //       <p>
//     //         state:<small>{item.state}</small>
//     //       </p>
//     //       </Popup>
//     //   </Marker> 
//     //   });  
      
//       // return <>{markers}</>};

//     return (
//       <div className="map">
//         <MapContainer className="map" center={first} zoom={this.state.zoom} >
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         /> 
//         {
//         todos.map((item, i) => {
//           let pointer = [item.position[0].lat, item.position[0].lng];

//           return (
        
//         // {markers}

//               <Marker position={pointer} icon={this.myIcon} key={i}>
//                 <Popup>
//                   <h3>
//                     Name:<small>{item.name}</small>
//                   </h3>
//                   <p>
//                     City:<small>{item.city}</small>
//                   </p>
//                   <p>
//                     state:<small>{item.state}</small>
//                   </p>
//                 </Popup>
//               </Marker>
//             )

//         })}
//         </MapContainer >

//       </div>
//     );
//   }
// }

// export default Location;