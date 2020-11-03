import React, { useState, useEffect, useRef, useContext } from 'react';

import NavTop from 'components/pages/Home/NavTop';
import Header from 'components/pages/Home/L-Header';
import Averge from 'components/pages/Home/L-Averge';
import Comments from 'components/pages/Home/L-Comments';
import Admin from 'components/pages/Home/L-Admin';
import CardList from 'components/pages/Home/R-CardList';


import './style_module.scss';

const Home = () => {
    return (
        <main>
            <NavTop />
            <Header />
            <div className="rating_body">
                {/* left container */}
                <div className="rating_l_card">
                    <Averge />
                    <Comments />
                    <Admin />
                </div>

                {/* right container */}
                <CardList />
            </div>
        </main>
    );
};

export default Home;
