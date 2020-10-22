import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const Comments = () => {
    return (
        <div class="rating_card Comments">
            <div class="card_title">Comments Rating</div>
            <div class="card_tag_list">
                <ul>
                    <li class="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                    <li class="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                    <li class="card_tag">
                        <span>#tag</span>
                        <span>X 99</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Comments;