import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import NavTop from 'components/pages/penDetail/NavTop';
import Header from 'components/pages/penDetail/L-Header';
import Averge from 'components/pages/penDetail/L-Averge';
import PenInner from 'components/pages/penDetail/R-PenInner';

import './style_module.scss';

const penDetail = () => {
    return (
        <main>
            <NavTop />
            <Header />
            <div className="rating_body">
                {/* left container */}
                <div className="rating_l_card">
                    <Averge />
                </div>

                {/* right container */}
                <PenInner />
            </div>
        </main>
    );
};

export default withRouter(penDetail);
