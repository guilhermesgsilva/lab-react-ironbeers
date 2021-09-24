import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import {useHistory} from "react-router-dom";

function BeerCreate() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setfirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
            
        };
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
        history.push("/beers");
    }
    
    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <label>Tagline</label>
                        <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required/>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                        <label>First Brewed</label>
                        <input type="text" value={firstBrewed} onChange={(e) => setfirstBrewed(e.target.value)} required/>
                        <label>Brewers Tips</label>
                        <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} required/>
                        <label>Attenuation Level</label>
                        <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} required/>
                        <label>Contributed By</label>
                        <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} required/>
                        <button type="submit">Add New</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BeerCreate;