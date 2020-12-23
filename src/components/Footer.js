import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
        <footer className="text-center text-white bg-display">
            <ul>
            <div><a href="#" className="text-white">Privacy</a></div>
            <div><a href="#" className="text-white">Terms</a></div>
            </ul>
            <span className="text-white">&copy; 2020 Salma-Mohamed</span>
        </footer>
            </div>
        )
    }
}
