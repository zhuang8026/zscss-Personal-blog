import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// API
import axios from 'axios';
import { productsPagesAPI } from 'api/products';

// DesignSystem
import Loading from 'components/DesignSystem/Loading';

// antd
import { Rate } from 'antd';
import { Select } from 'antd';
import { Pagination } from 'antd';
import { CloudUploadOutlined, StarFilled } from '@ant-design/icons';

const CardList = ({ history }) => {
    const [isLoading, setIsLoading] = useState(true); // 載入
    const [isPage, setIsPage] = useState(1); // 頁碼
    const [isStar, setIsStar] = useState(0); // rating 數量
    const [isData, setIsData] = useState({}); // 此頁資料
    const fetchListener = useRef(null); // fetch
    const btnElement = useRef(null);
    const { Option } = Select;

    const handleChange = value => {
        // console.log(`selected: ${value}`);
        setIsStar(value);
        setIsPage(1);
    };

    // API 獲取此頁資料
    const productsPagesAPICallBack = () => {
        const data = {
            isPage: isPage,
            isStar: isStar
        };
        setIsLoading(true);
        fetchListener.current = axios(productsPagesAPI('GET', data))
            .then(result => {
                // console.log(result);
                setTimeout(() => {
                    setIsLoading(false);
                    setIsData(result.data);
                }, 1000);
            })
            .catch(err => {
                console.error(err);
            });
    };

    //  取消監聽
    useEffect(() => {
        document.addEventListener('click', e => {
            console.log(e.target);
        });
        if (btnElement.current) {
            btnElement.current.addEventListener('click', e => {
                console.log(e.target);
            });
        }
    }, []);

    // 商品數量
    useEffect(() => {
        productsPagesAPICallBack();
    }, [isPage, isStar]);

    return (
        <div className="rating_r_list">
            {/* 評分 */}
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
            {/* 數量 */}
            <div className="rating_r_Showing">
                <p>
                    Showing {isData.rows ? 1 : 0}-{isData.rows ? isData.rows.length : 0} of{' '}
                    {isData.rows ? isData.totalRows : 0} items
                </p>
            </div>
            {/* 內容 */}
            <div className="rating_list_inner">
                {isLoading ? (
                    <>
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                    </>
                ) : isData.totalRows > 0 ? (
                    <>
                        {isData.rows.map((data, index) => {
                            return (
                                <div
                                    className="r_list"
                                    key={index}
                                    id={data.itemId}
                                    ref={btnElement}
                                    // onClick={e => {
                                    //     e.nativeEvent.stopImmediatePropagation();
                                    //     console.log(e.target);
                                    //     history.push(`/pen-detail/${e.target.id}`);
                                    // }}
                                >
                                    <div className="r_list_card">
                                        <div className="r_list_title">
                                            <div className="r_list_title_left">
                                                <div className="r_list_head">
                                                    <div className="figure_icon">
                                                        <img src={require(`images/Home/${data.itemImg}`)} alt="頭像" />
                                                    </div>
                                                </div>
                                                <div className="r_list_content">
                                                    <h2 className="right_list_title"> {data.itemName} </h2>
                                                    <p>{data.updated_at}</p>
                                                </div>
                                            </div>
                                            <div className="r_list_title_right">
                                                <CloudUploadOutlined className="icon-20" />
                                            </div>
                                        </div>
                                        <div className="r_list_bottom">
                                            <div className="r_list_star">
                                                <Rate disabled allowHalf defaultValue={data.itemStar} />
                                            </div>
                                            <div className="r_list_tag">
                                                <span>#太棒了</span>
                                                <span>#非常有幫助</span>
                                            </div>
                                            <div className="r_list_tag_content">{data.itemsText}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <Pagination
                            simple
                            current={isPage}
                            defaultCurrent={1}
                            total={parseInt(`${isData.totalPages}0`)}
                            onChange={event => {
                                setIsPage(event);
                            }}
                        />
                    </>
                ) : (
                    <>NoData</>
                )}
            </div>
        </div>
    );
};

export default withRouter(CardList);
