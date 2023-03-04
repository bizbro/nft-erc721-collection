import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter, Link } from 'react-router-dom';
import { Collapse } from 'antd';
import "../../../styles/components/headerstyle.css";

function AboutChanGirl() {
    
    return(
        <div className="no-wallet">
          <div className='green2'>
            Introducing CHANGIRL: a collection featuring meticulously crafted digital artworks of a uniquely designed anime-character 
            that resembles the aesthetics and comely of 4Chan culture. 
            <br/>
            <br/>
            Each NFT is a one-of-a-kind distinctive artwork, carefully crafted by our team of talented and visionary artists, 
            making it a truly special addition to your NFT collection. 
            <br/>
            <br/>
            But we're not just creating beautiful art. 
            Our NFTs are also designed to be a smart investment. 
            We're using data analytics and market insights to create NFTs that are not only aesthetically stunning 
            but also valuable collectibles that will appreciate in value over time.
            Each ChanGirl NFT purchased during the minting process also comes with an opportunity for increased rarity. 
            This means that not only are you getting a one-of-a-kind digital artwork, but also a type of artwork which will have the potential 
            to perform at much higher prices in the marketplace, as scarcity and rarity is more attractive to NFT collectors and traders.
            <br/>
            <br/>
            The collection consists of 1000 unique NFTs at only 0.08 ETH each! However, in order to ensure competitive trading prices at the marketplace,
            the minting process will be permanently closed before the entire collection is sold out.
            <br/>
            <br/>
            The minting process may in other words be <strong>ceased at ANY TIME.</strong>
          </div>
        </div>
    )
}

export default AboutChanGirl;