import React from 'react';
import {NavLink} from "react-router-dom";
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Home() {
    
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2><NavLink exact to="/beers">All Beers</NavLink></h2>
                    <img src={beers} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2><NavLink exact to="/random-beer">Random Beer</NavLink></h2>
                    <img src={randomBeer} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2><NavLink exact to="/new-beer">New Beer</NavLink></h2>
                    <img src={newBeer} alt=""/>
                </div>
            </div>
        </>
    );
};

export default Home;