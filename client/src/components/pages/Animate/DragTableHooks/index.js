import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import posed from 'react-pose';

// Context
import DragProvider, { DragContext } from './Context/context_drag.js';

// css
import './style_module.scss';

const data = [
    { name: 'AAAA', category: 'wip', bgcolor: '#376B6D' },
    { name: 'BBBB', category: 'wip', bgcolor: '#7BA23F' },
    { name: 'CCCC', category: 'complete', bgcolor: '#86C166' },
    { name: 'DDDD', category: 'complete', bgcolor: '#24936E' }
];

const Index = () => {
    return (
        <DragProvider>
            <DragTableHooks></DragTableHooks>
        </DragProvider>
    );
};

const DragTableHooks = () => {
    const { isDrag, setIsDrag, onDrop, onDragOver, domHandle } = useContext(DragContext);
    // console.log(isDrag);
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
