import React, { useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// antd
import { CommentOutlined } from '@ant-design/icons';

// Context
import { AdminContext } from 'contexts/admin';

const Admin = () => {
    const { adminData } = useContext(AdminContext);

    return (
        <div className="rating_card Admin">
            <div className="card_title">Admin List</div>
            <ul className="card_admin">
                {adminData.length > 0 ? (
                    adminData.map((data, index) => {
                        return (
                            <li>
                                <div className="rating_admin_img">
                                    <div className="figure_icon">
                                        <img src={require(`images/Home/test.jpg`)} alt="頭像" />
                                    </div>
                                    <p>{data.all.nickname}</p>
                                    <div className={`admin_online ${data.loginState ? 'admin_state' : ''}`} />
                                </div>
                                <div className="rating_admin_icon">
                                    <CommentOutlined className="icon-20" />
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <></>
                )}
                {/* <li>
                    <div className="rating_admin_img">
                        <div className="figure_icon">
                            <img src={require(`images/Home/test.jpg`)} alt="頭像" />
                        </div>
                        <p>william.chaung</p>
                        <div className="admin_online admin_state" />
                    </div>
                    <div className="rating_admin_icon">
                        <CommentOutlined className="icon-20" />
                    </div>
                </li>
                <li>
                    <div className="rating_admin_img">
                        <div className="figure_icon">
                            <img src={require(`images/Home/test.jpg`)} alt="頭像" />
                        </div>
                        <p>margarita.cheng</p>
                        <div className="admin_online" />
                    </div>
                    <div className="rating_admin_icon">
                        <CommentOutlined className="icon-20" />
                    </div>
                </li> */}
            </ul>
        </div>
    );
};

export default Admin;
