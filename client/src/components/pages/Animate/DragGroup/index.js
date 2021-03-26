import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import posed from 'react-pose';

// Context
import DragProvider, { DragContext } from './Context/context_drag.js';

// css
import './style_module.scss';

const data = [
    { name: 'RD', category: 'wip', bgcolor: '#AB3B3A' },
    { name: 'SA', category: 'wip', bgcolor: '#C18A26' },
    { name: 'HR', category: 'wip', bgcolor: '#36563C' },
    { name: 'PM', category: 'wip', bgcolor: '#0B1013' },
    { name: 'UI', category: 'complete', bgcolor: '#6A4C9C' },
    { name: 'UX', category: 'complete', bgcolor: '#787878' }
];

const Index = () => {
    return (
        <DragProvider>
            <DragGroup></DragGroup>
        </DragProvider>
    );
};

const DragGroup = () => {
    const { isDrag, setIsDrag, onDrop, onDragOver, domHandle } = useContext(DragContext);
    console.log(isDrag);
    useEffect(() => {
        setIsDrag([...data]);
    }, []);

    return (
        <div className="container-drag">
            <div
                className="wip"
                onDragOver={e => {
                    onDragOver(e);
                }}
                onDrop={e => {
                    onDrop(e, 'wip');
                }}
            >
                <span className="task-header">A Group</span>
                {domHandle('wip')}
            </div>
            <h1>VS</h1>
            <div
                className="droppable"
                onDragOver={e => {
                    onDragOver(e);
                }}
                onDrop={e => {
                    onDrop(e, 'complete');
                }}
            >
                <span className="task-header">B Group</span>
                {domHandle('complete')}
            </div>
        </div>
    );
};

export default withRouter(Index);
