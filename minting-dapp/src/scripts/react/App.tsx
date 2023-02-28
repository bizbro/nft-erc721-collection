import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Dapp from "./Dapp";
import ResponsiveAppBar from "./components/NavBar";
import ReactLoading from "react-loading";
import FAQ from './components/FAQ';
import AboutChanGirl from './components/AboutChanGirl';
import "../../styles/components/general.scss";

const App = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setLoading(false), 1300)
    }, [])
    return (
        <>
        {loading === false ? (
        <Router>
          <ResponsiveAppBar/>
            <Routes>
              <Route path={'/'} element={<Dapp />} />
              <Route path={'/faq'} element={<FAQ />} />
              <Route path={'/about'} element={<AboutChanGirl />} />
            </Routes>
        </Router>
        ) : (
            <div>
                <img className="loadingbrologo" src="/build/images/fav.png" alt="RareBits Canvas" height="25px" />
                <ReactLoading className="loadingbro" color='#50e83c' type="balls" height={140} width={80} />
            </div>
          )}
        </>
    
    );
  };

export default App;