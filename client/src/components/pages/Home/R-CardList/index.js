import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import Loading from 'components/DesignSystem/Loading';

// antd
import { Rate } from 'antd';
import { Select } from 'antd';
import { CloudUploadOutlined, StarFilled } from '@ant-design/icons';

const CardList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { Option } = Select;

    const handleChange = value => {
        console.log(`selected: ${value}`);
    };

    return (
        <div className="rating_r_list">
            <div className="rating_r_select">
                <Select defaultValue="all rating" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="0">all rating</Option>
                    <Option value="1">
                        1 <StarFilled className="icon_star" />
                    </Option>
                    <Option value="2">
                        2 <StarFilled className="icon_star" />
                    </Option>
                    <Option value="3">
                        3 <StarFilled className="icon_star" />
                    </Option>
                    <Option value="4">
                        4 <StarFilled className="icon_star" />
                    </Option>
                    <Option value="5">
                        5 <StarFilled className="icon_star" />
                    </Option>
                </Select>
            </div>
            <div className="rating_r_Showing">
                <p>Showing 1-10 of 100 items</p>
            </div>
            <div className="rating_list_inner">
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="r_list">
                        <div className="r_list_card">
                            <div className="r_list_title">
                                <div className="r_list_title_left">
                                    <div className="r_list_head">
                                        <div className="figure_icon">
                                            <img src={require(`images/Home/test.jpg`)} alt="頭像" />
                                        </div>
                                    </div>
                                    <div className="r_list_content">
                                        <h2 className="right_list_title"> React 經驗分享 </h2>
                                        <p>2020/09/11, 08:00</p>
                                    </div>
                                </div>
                                <div className="r_list_title_right">
                                    <CloudUploadOutlined className="icon-20" />
                                </div>
                            </div>
                            <div className="r_list_bottom">
                                <div className="r_list_star">
                                    <Rate disabled allowHalf defaultValue={3.5} />
                                </div>
                                <div className="r_list_tag">
                                    <span>#太棒了</span>
                                    <span>#非常有幫助</span>
                                </div>
                                <div className="r_list_tag_content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                    laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
                                    sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="r_list">
                    <div className="r_list_card">
                        <div className="r_list_title">
                            <div className="r_list_title_left">
                                <div className="r_list_head">
                                    <div className="figure_icon">
                                        <img src={require(`images/Home/test.jpg`)} alt="頭像" />
                                    </div>
                                </div>
                                <div className="r_list_content">
                                    <h2 className="right_list_title"> React 經驗分享 </h2>
                                    <p>2020/09/11, 08:00</p>
                                </div>
                            </div>
                            <div className="r_list_title_right">
                                <CloudUploadOutlined className="icon-20" />
                            </div>
                        </div>
                        <div className="r_list_bottom">
                            <div className="r_list_star">
                                <Rate disabled allowHalf defaultValue={3.5} />
                            </div>
                            <div className="r_list_tag">
                                <span>#太棒了</span>
                                <span>#非常有幫助</span>
                            </div>
                            <div className="r_list_tag_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
                                sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
