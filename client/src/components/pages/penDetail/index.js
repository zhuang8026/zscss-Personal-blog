import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect, useParams } from 'react-router-dom';

import NavTop from 'components/pages/penDetail/NavTop';

import './style_module.scss';

const penDetail = props => {
    // let { id } = useParams();
    // console.log(id);
    return (
        <main>
            <NavTop />
        </main>
    );
};

export default withRouter(penDetail);
