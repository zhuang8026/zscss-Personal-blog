import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

import NavLeft from 'components/pages/Home/NavLeft';
import NavTop from 'components/pages/Home/NavTop';
import Header from 'components/pages/Home/L-Header';
import Averge from 'components/pages/Home/L-Averge';
import Comments from 'components/pages/Home/L-Comments';
import Admin from 'components/pages/Home/L-Admin';
import CardList from 'components/pages/Home/R-CardList';

import './style_module.scss';

const Home = () => {
    return (
        <>  
            <NavLeft/>
            <main>
                <NavTop/>
                <Header/>
                <div class="rating_body">
                    {/* left container */}
                    <div class="rating_l_card">
                        <Averge/>
                        <Comments/>
                        <Admin/>
                    </div>

                    {/* right container */}
                    <CardList/>
                </div>
            </main>
        </>
    )
}

export default Home