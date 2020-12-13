import React from 'react';
import SharedCard from './SharedCard'
import Data from './Data'

class Rider extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: Data
        }
    }
    
   

    render() {
        const details= this.state.todos.map((item)=>{
            return(
                <div>
         <SharedCard key={item.id} name={item.name} imgUrl={item.imgUrl} city={item.city}/>

                </div>
                )

        })
        return (
           <div>
               {details}
               {/* <SharedCard
               name="Dustin	Green"
               imgUrl="https://images.pexels.com/photos/217869/pexels-photo-217869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="IL"
               />
               <SharedCard
               name="Jason Finn "
               imgUrl="https://images.pexels.com/photos/1161994/pexels-photo-1161994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="CA"
               />
                <SharedCard
               name="Howard	Thompson"
               imgUrl="https://images.pexels.com/photos/2880476/pexels-photo-2880476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="MO"
               />
                <SharedCard
               name="Maggie	Lantz"
               imgUrl="https://images.pexels.com/photos/3642537/pexels-photo-3642537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="OH"
               />
                <SharedCard
               name="Lawrence	Duran"
               imgUrl="https://images.pexels.com/photos/217869/pexels-photo-217869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="FL"
               />
                <SharedCard
               name="Irene	Molina"
               imgUrl="https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="AZ"
               />
                  <SharedCard
               name="Nancy	Garner"
               imgUrl="https://images.pexels.com/photos/2341568/pexels-photo-2341568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="MD"
               />
                    <SharedCard
               name="Tara	Taylor"
               imgUrl="https://images.pexels.com/photos/2317577/pexels-photo-2317577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="MN"
               />
                    <SharedCard
               name="Alejandro	Smith"
               imgUrl="https://images.pexels.com/photos/2885429/pexels-photo-2885429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="ME"
               />
                      <SharedCard
               name="Tricia	Renshaw"
               imgUrl="https://images.pexels.com/photos/3692909/pexels-photo-3692909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="CT"
               />
                     <SharedCard
               name="Travis	Cook"
               imgUrl="https://images.pexels.com/photos/1135191/pexels-photo-1135191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="WI"
               />
                     <SharedCard
               name="Joan	Brooks"
               imgUrl="https://images.pexels.com/photos/160874/pexels-photo-160874.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="VA"
               />
                     <SharedCard
               name="Matthew	Gregson"
               imgUrl="https://images.pexels.com/photos/2517951/pexels-photo-2517951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="MO"
               />
                   <SharedCard
               name="Katie	Dunlap"
               imgUrl="https://images.pexels.com/photos/1796308/pexels-photo-1796308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="VA"
               />
                   <SharedCard
               name="Leo	Howard"
               imgUrl="https://images.pexels.com/photos/1796304/pexels-photo-1796304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="TX"
               />

                <SharedCard
               name="Maria	Baisden"
               imgUrl="https://images.pexels.com/photos/3017899/pexels-photo-3017899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="NC"
               />

            <SharedCard
               name="Sandy	Townsend"
               imgUrl="https://images.pexels.com/photos/2794739/pexels-photo-2794739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="PA"
               />
                   <SharedCard
               name="Melinda Stephenson
               "
               imgUrl="https://images.pexels.com/photos/2806495/pexels-photo-2806495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="HI"
               />
                   <SharedCard
               name="Jason	Nichols"
               imgUrl="https://images.pexels.com/photos/2802558/pexels-photo-2802558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               state="VA"
               /> */}


           </div>
       
        );
    }
}


export default Rider;
