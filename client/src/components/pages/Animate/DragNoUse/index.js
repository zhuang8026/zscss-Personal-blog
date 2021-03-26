import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

// css
// import classes from './style_module.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(classes);

const DragNoUse = ({}) => {
    return <div className="box">DragNoUse</div>;
};

export default withRouter(DragNoUse);
