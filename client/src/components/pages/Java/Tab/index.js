import React from 'react';
import { withRouter } from 'react-router-dom';

// css
// import classes from './style_module.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(classes);

const Tab = ({ history, location }) => {
    const boxData = [
        {
            title: 'DragVertical',
            path: 'DragVertical'
        },
        {
            title: 'DragHorizontal',
            path: 'DragHorizontal'
        },
        {
            title: 'DragTable',
            path: 'DragTable'
        }
    ];

    return (
        <div className="box">
            {boxData.map((data, index) => {
                return (
                    <div
                        className="inner"
                        key={index}
                        onClick={() => {
                            history.push({
                                ...location,
                                pathname: `/java/${data.path}`
                            });
                        }}
                    >
                        {data.title}
                    </div>
                );
            })}
        </div>
    );
};

export default withRouter(Tab);
