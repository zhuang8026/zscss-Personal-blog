import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const CardList = () => {
    return (
        <div class="rating_r_list">
            <div class="rating_r_select">selectBlock</div>
            <div class="rating_r_Showing">
                <p>Showing 1-10 of 100 items</p>
            </div>
            <div class="rating_list_inner">

                <div class="r_list">
                    <div class="r_list_card">
                        <div class="r_list_title">
                            <div class="r_list_title_left">
                                <div class="r_list_head">
                                    <img src="" alt="icon"/>
                                </div>
                                <div class="r_list_content">
                                    <h2 class="right_list_title"> React 經驗分享 </h2>
                                    <p>2020/09/11, 08:00</p>
                                </div>
                            </div>
                            <div class="r_list_title_right">
                                <img src="" alt="icon"/>
                            </div>
                        </div>
                        <div class="r_list_bottom">
                            <div class="r_list_star">
                                <div>🌟 🌟 🌟 🌟 🌟</div>
                            </div>
                            <div class="r_list_tag">
                                <span>#Comment A</span>
                                <span>#Comment B</span>
                            </div>
                            <div class="r_list_tag_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="r_list">
                    <div class="r_list_card">
                        <div class="r_list_title">
                            <div class="r_list_title_left">
                                <div class="r_list_head">
                                    <img src="" alt="icon"/>
                                </div>
                                <div class="r_list_content">
                                    <h2 class="right_list_title"> React 經驗分享 </h2>
                                    <p>2020/09/11, 08:00</p>
                                </div>
                            </div>
                            <div class="r_list_title_right">
                                <img src="" alt="icon"/>
                            </div>
                        </div>
                        <div class="r_list_bottom">
                            <div class="r_list_star">
                                <div>🌟 🌟 🌟 🌟 🌟</div>
                            </div>
                            <div class="r_list_tag">
                                <span>#Comment A</span>
                                <span>#Comment B</span>
                            </div>
                            <div class="r_list_tag_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardList;