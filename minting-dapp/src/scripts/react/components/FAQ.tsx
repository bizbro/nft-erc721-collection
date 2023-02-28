import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter, Link } from 'react-router-dom';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const RareBitsCanvas = `
    RareBits Canvas is an NFT company that was established in January 2023. 
    We are a team of talented developers with a common goal of creating fun projects that resonate 
    with various online cultures and topics. 
`;
const ChanGirl = `
    Our most recent work is the ChanGirl NFT project, which is influenced by 4Chan. 
    The project consists of 1000 unique images of an anime character, whose outfit, background and overall vibe resonates with 4Chan aesthetics.  
    Each image also differs in rarity, giving the buyer a chance to mint a rare character at the open-sale mint page.
`;
const MintProcess = `
    The date for when the minting will end is not yet established, 
    but the ChanGirl project may close the minting process long before the 1000 NFTs are sold out. 
    RareBits Canvas reserves the right to permanently close the minting process for any reason, at any time. 
    After that, the NFTs may only be purchased from individual traders on OpenSea.
`;
const HiddenImages = `
    The NFTs that was minted through the open-sale minting page will be revealed on OpenSea once the minting process has ended.
`;
const FuturePlans = `
    Absolutely! RareBits Canvas have many exciting ideas for the future. 
    Besides the upcoming NFT projects, we eventually even plan to develop our own unique token. 
    So join our community, and stay tuned!
`;
const ReachOut = `
    Yes, and we'd love to hear your feedback or questions if you have them! You can reach out to us on both Twitter and on Discord.
`;

function FAQ() {
    const onChange = (key: string | string[]) => {
        console.log(key);
      };
    
    return(
      <div className="no-wallet">
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="What is RareBits Canvas?" key="1">
          <p>{RareBitsCanvas}</p>
        </Panel>
        <Panel header="When will the ChanGirl minting process end?" key="2">
          <p>{MintProcess}</p>
        </Panel>
        <Panel header="When will the ChanGirl hidden NFTs be revealed?" key="3">
          <p>{HiddenImages}</p>
        </Panel>
        <Panel header="Does RareBits Canvas have future plans besides ChanGirl?" key="4">
          <p>{FuturePlans}</p>
        </Panel>
        <Panel header="Is it possible to personally reach out to RareBits Canvas team?" key="5">
          <p>{ReachOut}</p>
        </Panel>
      </Collapse>
      </div>
    )
}

export default FAQ;