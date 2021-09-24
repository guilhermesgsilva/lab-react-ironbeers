import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import {NavLink} from "react-router-dom";


function BeersList() {
    const [beers, setBeers] = useState([]);

    useEffect (() => {
        async function getBeers() {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);
        }
        getBeers();
    }, []);
    
    return (
        <>
            <NavBar />
            {beers.length > 0 ? (
                beers.map((beer) => {
                    return (
                        <>
                            <div className="row">
                                <div className="col-3">
                                    <img src={beer.image_url} alt={beer.name} style={{width: "50px"}}/>
                                </div>
                                <div className="col-6">
                                    <h2><NavLink exact to={`/beers/${beer._id}`}>{beer.name}</NavLink></h2>
                                    <h3>{beer.tagline}</h3>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                                <hr/>
                            </div>
                        </>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default BeersList;