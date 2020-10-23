import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// antd
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';

const Averge = () => {
    return (
        <div className="rating_card Averge">
            <div className="card_title">Averge Rating</div>
            <div className="card_rating">
                <div className="rating_all">
                    <h1>3.5</h1>
                    <div className="rating_all_star">
                        <Rate disabled allowHalf defaultValue={3.5} />
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
                    <div className="rating_line"></div>
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
                    <div className="rating_line"></div>
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
                    <div className="rating_line"></div>
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
                    <div className="rating_line"></div>
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
                    <div className="rating_line"></div>
                </div>
            </div>
        </div>
    );
};

export default Averge;
