import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

import DragGroupV2 from '../DragGroupV2/index';

// css
import './style_module.scss';

const dataV2 = [
    {
        perCent: '10%',
        status: false
    },
    {
        perCent: '87%',
        status: true,
        inner: 'front end vs back end'
    },
    {
        perCent: '100%',
        status: true,
        inner: 'Acer vs Asus'
    }
];

// 未使用
// const ComponentDemo = ({ dataV2 }) => {
//     return (
//         <>
//             {dataV2.map((data, index) => {
//                 return (
//                     <>
//                         {data.status ? (
//                             <div className="demo1-1">
//                                 <span>{data.perCent}</span>
//                                 <div className="demo1-2">
//                                     <p>:::</p>
//                                     <div className="demo-color"></div>
//                                     <p>{data.inner}</p>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="demo1-1">
//                                 <span>{data.perCent}</span>
//                                 <div className="demo1-2">
//                                     <p>+</p>
//                                 </div>
//                             </div>
//                         )}
//                     </>
//                 );
//             })}
//         </>
//     );
// };

const DragNoUse = ({}) => {
    return (
        <>
            {/* <DragGroupV2 /> */}
            <div className="demo1">
                <DragGroupV2 value={dataV2}>{/* <div>william</div> */}</DragGroupV2>
            </div>
        </>
    );
};

export default withRouter(DragNoUse);
