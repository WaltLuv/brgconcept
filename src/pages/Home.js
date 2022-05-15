import React from "react";
import "./Home.css";
import bg from "../images/night.webp";
import { ConnectButton, Icon, Select, DatePicker, Input, Button } from "web3uikit";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);


  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
       
      </div>
      <div>
        
        <div className="text">
          Block Republic Rentals
        </div>  
        </div>
        <div className="topBanner">
        <div>
         
        </div>
        <div className="tabs">
          <div>Buy Property</div>
          <div className="selected">Rent Property</div>
          <div>Sell Property</div>
          <div>Buy Crypto</div>
          <div>Send Crypto</div>
          <div>Swap Crypto</div>
          <div>VR Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            <div>
            Location:
            </div>
            <div>
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
                {
                  id: "mia",
                  label: "Miami",
                },
                {
                  id: "atl",
                  label: "Atlanta",
                },
                {
                  id: "oh",
                  label: "Ohio",
                },
              ]}
            />
          </div>  
          </div>
          <div className="vl" />
          <div className="inputs">
            Start Date:
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            End Date:
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Bedrooms:
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} 
            state={{
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests
            }}>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search" />
          </div>
          </Link>
        </div>
        <div className="randomLocation">
        <div className="title">Buy, Sell, Rent, and Swap Assets</div>
        <div className="text">
          Discover new places to buy or rent. You can also 
          sell or swap out your assets for for crypto, and 
          send money worldwide with low transaction fees
          <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
          />
        </div>
  
      </div>
      </div>
      
    </>
  );
};

export default Home;
