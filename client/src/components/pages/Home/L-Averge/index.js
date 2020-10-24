import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// antd
import { Rate } from 'antd'; // 星星
import { Progress } from 'antd'; // 進度條
import { StarFilled } from '@ant-design/icons';

const Averge = () => {
    return (
        <div className="rating_card Averge">
            <div className="card_title">Averge Rating</div>
            <div className="card_rating">
                <div className="rating_all">
                    <h1>4.5</h1>
                    <div className="rating_all_star">
                        <Rate disabled allowHalf defaultValue={4.5} />
                        <div>(2,048 次評分)</div>
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
                            percent={27}
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
