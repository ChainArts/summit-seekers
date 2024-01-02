import { getCategoryID, useFetchPosts } from "../scripts/functions";
import { useState } from "react";

const Footer = () => {

    const { posts, loading, error } = useFetchPosts('Footer');

    let content = null;
    let splitPost = null;

    if (posts.length > 0) {
        content = posts[0].content.rendered;
        content = content.replace(new RegExp("\n", "g"), "")
        splitPost =content.split("</ul>").map((part) => part + "</ul>")
    }

    return (
        <>
            <div className="continents">
                {splitPost ? splitPost.map((part) => (
                    <div key={part} dangerouslySetInnerHTML={{ __html: part }} />
                )) : null}
            </div>
            <div className="contact">
                <p className="follow">Follow me</p>
                
                <ul>
                    <li>Privacy</li>
                    <li>Terms of use</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </>
    );
}

export default Footer