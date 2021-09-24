import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import axios from 'axios';

function BeerDetail({match}) {
    const [beer, setBeer] = useState({});
    
    useEffect (() => {
        async function getBeerDetails () {
            const beerId = match.params.id
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            setBeer(response.data);
        }
        getBeerDetails();
    })

    return (
        <>
            <NavBar />
            {beer.name ? (
                <>
                    <div className="row">
                        <div className="col-12">
                            <img src={beer.image_url} alt={beer.name} style={{width: "50px"}}/>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p>First Brewed: {beer.first_brewed} Attenuation Level: {beer.attenuation_level}</p>
                            <p>{beer.description}</p>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default BeerDetail;