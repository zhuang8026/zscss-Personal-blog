import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// API
import axios from 'axios';
import { ratingAllAPI } from 'api/products';

// antd
import { Rate } from 'antd'; // 星星
import { Progress } from 'antd'; // 進度條
import { StarFilled } from '@ant-design/icons';

const Averge = () => {
    const [isLoading, setIsLoading] = useState(true); // 載入
    const [isStar, setIsStar] = useState([]); // 全部評分
    const [isRating, setIsRating] = useState(0.0); // 平均分
    const [one, setOne] = useState(0); // 1 star
    const [two, setTwo] = useState(0); // 2 star
    const [three, setThree] = useState(0); // 3 star
    const [four, setFour] = useState(0); // 4 star
    const [five, setFive] = useState(0); // 5 star
    const fetchListener = useRef(null); // fetch
    let i = 0;
    let s = 0;
    const ratingAllAPICallBack = () => {
        fetchListener.current = axios(ratingAllAPI('GET'))
            .then(result => {
                // console.log(result.data);
                setTimeout(() => {
                    setIsLoading(false);
                    setIsStar(result.data[0]);

                    result.data[0].map((data, index) => {
                        i += data.itemStar;
                        if (data.itemStar === 3) {
                            s += data.itemStar;
                        }
                    });
                    setThree(s / i);
                    setIsRating(i / result.data[0].length);
                }, 5000);
            })
            .catch(err => {
                console.error(err);
            });
    };
    // 評分
    useEffect(() => {
        ratingAllAPICallBack();
    }, []);

    //  取消監聽
    useEffect(() => {
        return () => {
            if (fetchListener.current) {
                fetchListener.current.unsubscribe();
            }
        };
    }, []);

    return (
        <div className="rating_card Averge">
            <div className="card_title">Averge Rating</div>
            <div className="card_rating">
                <div className="rating_all">
                    <h1>{isRating.toFixed(1)}</h1>
                    <div className="rating_all_star">
                        <Rate disabled allowHalf defaultValue={0} value={isRating.toFixed(1)} />
                        <div>({isStar.length} 次評分)</div>
                    </div>
                </div>
            </div>
            <div className="rating_number_list">
                <div className="rating_number">
                    <div className="rating_info">
                        <div className="star">
                            <p>
                                5 <StarFilled className="icon_star" />
                            </p>
                        </div>
                        <span>(1,220)</span>
                    </div>
                    <div className="rating_line">
                        <Progress
                            strokeColor={{
                                '0%': '#0073e6',
                                '100%': '#0ca'
                            }}
                            percent={90}
                            status="active"
                            showInfo={false}
                        />
                    </div>
                </div>
                <div className="rating_number">
                    <div className="rating_info">
                        <div className="star">
                            <p>
                                4 <StarFilled className="icon_star" />
                            </p>
                        </div>
                        <span>(1,220)</span>
                    </div>
                    <div className="rating_line">
                        <Progress
                            strokeColor={{
                                '0%': '#0073e6',
                                '100%': '#0ca'
                            }}
                            percent={70}
                            status="active"
                            showInfo={false}
                        />
                    </div>
                </div>
                <div className="rating_number">
                    <div className="rating_info">
                        <div className="star">
                            <p>
                                3 <StarFilled className="icon_star" />
                            </p>
                        </div>
                        <span>(1,220)</span>
                    </div>
                    <div className="rating_line">
                        <Progress
                            strokeColor={{
                                '0%': '#0073e6',
                                '100%': '#0ca'
                            }}
                            percent={parseInt(three * 100)}
                            status="active"
                            showInfo={false}
                        />
                    </div>
                </div>
                <div className="rating_number">
                    <div className="rating_info">
                        <div className="star">
                            <p>
                                2 <StarFilled className="icon_star" />
                            </p>
                        </div>
                        <span>(1,220)</span>
                    </div>
                    <div className="rating_line">
                        <Progress
                            strokeColor={{
                                '0%': '#0073e6',
                                '100%': '#0ca'
                            }}
                            percent={19}
                            status="active"
                            showInfo={false}
                        />
                    </div>
                </div>
                <div className="rating_number">
                    <div className="rating_info">
                        <div className="star">
                            <p>
                                1 <StarFilled className="icon_star" />
                            </p>
                        </div>
                        <span>(1,220)</span>
                    </div>
                    <div className="rating_line">
                        <Progress
                            strokeColor={{
                                '0%': '#0073e6',
                                '100%': '#0ca'
                            }}
                            percent={10}
                            status="active"
                            showInfo={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Averge;
