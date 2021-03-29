import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import posed from 'react-pose';

// Context
import DragProvider, { DragContext } from './Context/context_drag.js';

// css
import './style_module.scss';

const data = [
    { name: 'RD', category: 'A', bgcolor: '#AB3B3A' },
    { name: 'SA', category: 'A', bgcolor: '#C18A26' },
    { name: 'HR', category: 'A', bgcolor: '#36563C' },
    { name: 'PM', category: 'A', bgcolor: '#0B1013' }
    // { name: 'UI', category: 'B', bgcolor: '#6A4C9C' },
    // { name: 'UX', category: 'B', bgcolor: '#787878' }
];

const Index = () => {
    return (
        <DragProvider>
            <DragGroup></DragGroup>
        </DragProvider>
    );
};

const DragGroup = () => {
    const { isDrag, setIsDrag, onDrop, onDragOver, domHandle, GroupHandle } = useContext(DragContext);

    useEffect(() => {
        setIsDrag([...data]);
    }, []);

    return (
        <div className="container-drag">
            {/* A Group */}
            {GroupHandle()}

            {/* <h1>VS</h1> */}

            {/* B Group */}
            {/* <div
                className="droppable"
                onDragOver={e => {
                    onDragOver(e);
                }}
                onDrop={e => {
                    onDrop(e, 'B');
                }}
            >
                <span className="task-header">B Group</span>
                {domHandle('B')}
            </div> */}
        </div>
    );
};

export default withRouter(Index);
