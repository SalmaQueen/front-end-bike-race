import React from 'react';
import Timer from './Timer'
import Footer from './Footer'
import Products from '../components/Products'

class Home extends React.Component {
  

    render() {
        return (
            <div>
                <Timer/>
                <Products/>
                <Footer/>
                
            </div>
        );
    }
}



export default Home;
