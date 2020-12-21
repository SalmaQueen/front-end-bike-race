import React from 'react';
import './Rider.scss'
import data from './Data'
import SharedCard from './SharedCard'



export default function Rider() {
    return (
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4  col-sm-12">
                <SharedCard key={item.id} name={item.name} imgUrl={item.imgUrl} city={item.city}/>

            </div>
          ))}
        </div>
      </div>
    );
  }

