import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
// import { injectIntl } from 'react-intl';
// import { from, Observable, forkJoin } from 'rxjs';
// import { map } from 'rxjs/operators';

export const DragContext = createContext();

const DragProvider = props => {
    const [isDrag, setIsDrag] = useState([]);

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

        let drag = isDrag.filter(drg => {
            if (drg.name == id) {
                drg.category = cat;
            }
            return drg;
        });
        setIsDrag(drag);
    };

    const onDropItem = (ev, cat, t) => {
        console.log(ev.target, t, cat);
        let id = ev.dataTransfer.getData('id');

        let tar = isDrag.filter(task => task.name == t)[0];
        console.log('From->', id, cat, ' To->', tar.name, tar.category);
        let drag = isDrag.filter(drg => {
            if (drg.name == id) {
                drg.category = tar.category;
            } else if (drg.name == tar.name) {
                drg.category = cat;
            }
            return drg;
        });

        setIsDrag(drag);
    };

    const domHandle = categoryData => {
        return isDrag.map(data => {
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

    const GroupHandle = categoryData => {
        return (
            <div
                className="wip"
                onDragOver={e => {
                    onDragOver(e);
                }}
                onDrop={e => {
                    onDrop(e, categoryData);
                }}
            >
                <span className="task-header">A Group</span>
                {domHandle(categoryData)}
            </div>
        );
    };

    return (
        <DragContext.Provider
            value={{
                ...props,
                isDrag,
                setIsDrag,
                onDrop,
                onDragOver,
                domHandle,
                GroupHandle
            }}
        >
            {props.children}
        </DragContext.Provider>
    );
};

export default DragProvider;
