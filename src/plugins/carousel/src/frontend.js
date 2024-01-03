import "./frontend.scss";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useFetchPosts } from "../../functions";

const carousel = document.querySelectorAll(".carousel-update");

if (carousel !== null) {
    carousel.forEach((div) => {
        const data = JSON.parse(div.querySelector("pre").innerText);
        if (data) {
            ReactDOM.render(<Carousel {...data} />, div);
        }
    });
}

function Carousel(data) {

    const { posts, loading, error } = useFetchPosts(data.categoryID);

    return (
        <>
            {posts.map((post) => (
                <CarouselItem key={post.id} data={post} />
            ))}
        </>
    );
}

function CarouselItem({ data }) {
    return (
        <div className="card">
            <div className="image">
                {/* {console.log(data.featured_media)} */}
                <Image id={data.featured_media} />
            </div>
            <div className="content">
                <div className="arrow"></div>
                <h3>{data.title.rendered}</h3>
            </div>
        </div>
    );
}

function Image({ id }) {
    const [image] = useImageUrl(id)
    //const [imageTag, setImageTag] = useState(" ")
    const imgTagRegex = /<img [^>]*src="[^"]*"[^>]*>/;
    let imageTag = ""

    if (image.description) {
        const match = image.description.rendered.match(imgTagRegex);
        imageTag = match ? match[0] : "";
    }


    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: image.description
                        ? imageTag
                        : null,
                }}
            />
        </>
    );
}


export function useImageUrl(image_id) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `http://cms.localhost/wp-json/wp/v2/media/${image_id}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [image_id]);

    return [post, loading, error];
}

export default Carousel;
