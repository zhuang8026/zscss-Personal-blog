import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import posed from 'react-pose';

// css
import './style_module.scss';

const DragTableV1 = () => {
    const [tasks, setTasks] = useState([]);
    const [isData, setIsdata] = useState([
        { name: 'AAAA', category: 'wip', bgcolor: 'red' },
        { name: 'BBBB', category: 'wip', bgcolor: 'orange' },
        { name: 'CCCC', category: 'complete', bgcolor: 'green' },
        { name: 'DDDD', category: 'complete', bgcolor: 'blue' }
    ]);

    const onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData('id', id);
    };

    const onDragOver = ev => {
        ev.preventDefault();
    };

    const onDragOverItem = ev => {
        console.log('on drop over item');
        ev.preventDefault();
    };

    const onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData('id');

        let tasks = isData.filter(task => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });
        setIsdata({ tasks });
    };

    const onDropItem = (ev, cat, t) => {
        console.log(ev.target, t, cat);
        let id = ev.dataTransfer.getData('id');

        let tar = isData.filter(task => task.name == t)[0];
        console.log('From->', id, cat, ' To->', tar.name, tar.category);
        let tasks = isData.filter(task => {
            if (task.name == id) {
                task.category = tar.category;
            } else if (task.name == tar.name) {
                task.category = cat;
            }
            return task;
        });

        setIsdata({ tasks });
    };

    const domHandle = categoryData => {
        return isData.map(data => {
            if (data.category === categoryData) {
                return (
                    <div
                        key={data.name}
                        onDragStart={e => onDragStart(e, data.name)}
                        onDragOver={e => onDragOverItem(e)}
                        onDrop={e => onDropItem(e, data.category == 'complete' ? 'wip' : 'complete', data.name)}
                        draggable
                        className="draggable"
                        style={{ backgroundColor: data.bgcolor }}
                    >
                        {data.name}
                    </div>
                );
            }
        });
    };

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
                    onDrop(e, 'wcompleteip');
                }}
            >
                <span className="task-header">B Group</span>
                {/* {domHandle('complete')} */}
            </div>
        </div>
    );
};

export default withRouter(DragTableV1);
