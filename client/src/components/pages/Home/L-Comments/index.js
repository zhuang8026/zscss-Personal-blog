import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const Comments = () => {
    return (
        <div className="rating_card Comments">
            <div className="card_title">Comments Rating</div>
            <div className="card_tag_list">
                <ul>
                    <li className="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                    <li className="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                    <li className="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Comments;