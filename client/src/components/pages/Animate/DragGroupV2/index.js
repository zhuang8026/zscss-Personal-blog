import React, { useState, useEffect } from 'react';
// css
import './style_module.scss';

const DragGroupV2 = ({
    value, // array
    // children,
    component, // object
    onDrop = () => {},
    onClick = () => {}
}) => {
    const [isDrag, setIsDrag] = useState(value);
    const [isKey, setIsKey] = useState();

    // ------ 第一層(父) ------
    // 拖動
    const onDropV2 = (ev, cat) => {
        let id = ev.dataTransfer.getData('name'); // 取得Dom中的data

        let drag = isDrag.filter((drg, index) => {
            // if (drg.name == id) {
            //     drg.category = cat;
            // }
            return drg;
        });
        setIsDrag(drag);
    };

    //Element正在拖動到放置目标时出發
    const onDragOver = ev => {
        ev.preventDefault();
    };

    // ------ 第二層(子) ------
    // 当某被拖动的对象在另一对象容器
    const onDragStart = (ev, index) => {
        ev.dataTransfer.setData('name', index);
        setIsKey(index);
    };

    const onDragOverItem = event => {
        event.preventDefault();
    };

    // 保存替換資料
    const onDropItem = (event, index) => {
        // let id = event.dataTransfer.getData('name');
        console.log(isKey + '->' + index); // 被移動元素 -> 被替換元素
        let origin = isDrag[isKey];
        isDrag[isKey] = isDrag[index];
        isDrag[index] = origin;
        setIsDrag(isDrag);
        onDrop(isDrag);
    };

    const handleClick = event => {
        onClick(event);
    };

    return (
        <div
            className="dragV2"
            onDragOver={e => {
                onDragOver(e);
            }}
            onDrop={e => {
                onDropV2(e);
            }}
        >
            {isDrag.map((data, index) => {
                return (
                    <div
                        className="draggable"
                        key={`drag-${index}`}
                        draggable={data != '' ? true : false}
                        onDragStart={event => onDragStart(event, index)}
                        onDragOver={event => onDragOverItem(event)}
                        onDrop={event => onDropItem(event, index)}
                        onClick={() => handleClick(data)}
                    >
                        {component(data)}
                    </div>
                );
            })}
        </div>
    );
};

export default DragGroupV2;
