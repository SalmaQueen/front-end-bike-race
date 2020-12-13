import React, { Component } from 'react'
import Calc from './Calc'

import './Timer.css'

export default class Timer extends Component {
    render() {
        return (
            <div>
                <section className="timer-container">
                    <section className="timer">
                        <div className="text-center">
                            <i className="fa fa-4x pt-4 pb-2 fa-calendar-check-o " aria-hidden="true"></i>
                            <h2>Countdown Timer</h2>
                        </div>
                        
                        <Calc/>
                    </section>
                    

                </section>


               
            </div>
        )
    }
}
