import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// API
import axios from 'axios';
import { productsPagesAPI } from 'api/products';

// DesignSystem
import Loading from 'components/DesignSystem/Loading';
import PrismCode from 'components/DesignSystem/PrismCode';
import PenText from 'components/DesignSystem/PenText';

// antd
import { Rate } from 'antd';
import { Select } from 'antd';
import { Pagination } from 'antd';
import { ThunderboltFilled } from '@ant-design/icons';

const CardList = ({ history }) => {
    const [isLoading, setIsLoading] = useState(false); // 載入
    const [isPage, setIsPage] = useState(1); // 頁碼
    const [isStar, setIsStar] = useState(0); // rating 數量
    const [isData, setIsData] = useState([]); // 此頁資料
    const fetchListener = useRef(null); // fetch
    const btnElement = useRef(null);
    const { Option } = Select;

    const handleChange = value => {
        // console.log(`selected: ${value}`);
        setIsStar(value);
        setIsPage(1);
    };

    // API 獲取此頁資料
    // const productsPagesAPICallBack = () => {
    //     const data = {
    //         isPage: isPage,
    //         isStar: isStar
    //     };
    //     setIsLoading(true);
    //     fetchListener.current = axios(productsPagesAPI('GET', data))
    //         .then(result => {
    //             // console.log(result);
    //             setTimeout(() => {
    //                 setIsLoading(false);
    //                 setIsData(result.data);
    //             }, 1000);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // };

    const penDetailAPICallBack = () => {
        fetchListener.current = axios({
            method: 'GET',
            baseURL: 'http://localhost:3000',
            url: `/body`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
            .then(result => {
                // console.log(result);
                setIsLoading(true);
                setIsData(result.data.pen_content);
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        penDetailAPICallBack();
    }, []);

    // useEffect(() => {
    //     productsPagesAPICallBack();
    // }, [isPage, isStar]);

    const text = `首先，在javascript裡面，有許多種資料型別(data type)，但主要分兩大類，一種是原始型別(primitive type)，另一種是物件(Object)。`;
    const code = `- Boolean\n- Null\n- Undefined\n- Number\n- BigInt\n- String\n- Symbol`;

    return (
        <div className="rating_r_list_all">
            <div className="rating_r_list_d">
                {isLoading &&
                    isData.map((data, index) => {
                        return (
                            <div className="rating_list_inner">
                                <h1>
                                    <ThunderboltFilled />. {data.title}
                                </h1>
                                {data.pen.map((datas, index) => {
                                    return (
                                        <p>
                                            <b>{datas.pen_title}</b>
                                            {datas.pen_text.pen_code === 0 ? (
                                                <PenText text={datas.pen_text.is_text} />
                                            ) : (
                                                <PrismCode code={datas.pen_text} />
                                            )}
                                        </p>
                                    );
                                })}
                            </div>
                        );
                    })}
            </div>
            <div className="rating_chat">
                <h1>COME SOON</h1>
                <div className="LL"></div>
                <div className="LL"></div>
                <div className="RR"></div>
                <div className="RR"></div>
                <div className="RR"></div>
            </div>
        </div>
    );
};

export default withRouter(CardList);
