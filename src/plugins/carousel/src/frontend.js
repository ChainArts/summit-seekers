import "./frontend.scss";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useFetchPosts } from "../../functions";
import { LiaArrowRightSolid, LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide} from "swiper/react";

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
    const swiperRef = useRef(null);
    const { posts, loading, error } = useFetchPosts(data.categoryID);

    const getSwiperInstance = (swiper) => {
        swiperRef.current = swiper;
    };

    return (
        
        <div className="slide-swiper-container">
            <CarouselButton direction="prev" swiperRef={swiperRef}/>
            <Swiper
            ref={swiperRef}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1256: {
                        slidesPerView: 3,
                        spaceBetween: 48
                    }
                }}
                loop={true}
                onSwiper={getSwiperInstance}
            >
                {posts.map((post) => (
                    <SwiperSlide>
                        <CarouselItem key={post.id} data={post} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CarouselButton direction="next" swiperRef={swiperRef} />
        </div>
    );
}

function CarouselButton({ direction, swiperRef}) {
    const swiper = swiperRef.current;
    return (
        <div onClick={() =>  ( direction === 'next' ) ? swiper.slideNext() : swiper.slidePrev()} className={`cursor-anchor carousel-button carousel-button-${direction}`}>
            {direction === "next" ? <LiaAngleRightSolid /> : <LiaAngleLeftSolid />}
        </div>
    );
}

function CarouselItem ({ data }) {
    return (
        <a href={data.link} className="card">
            <Image id={data.featured_media} />
            <div className="content">
                <LiaArrowRightSolid className="arrow" />
                <h3>{data.title.rendered}</h3>
                <p>{data.meta.footnotes}</p>
            </div>
        </a>
    );
}

function Image({ id }) {
    const [image] = useImageUrl(id);
    const imgTagRegex = /<img [^>]*src="[^"]*"[^>]*>/;
    let imageTag = "";

    if (image.description) {
        const match = image.description.rendered.match(imgTagRegex);
        imageTag = match ? match[0] : "";
    }

    return (
        <>
            <div
                className="picture-container"
                dangerouslySetInnerHTML={{
                    __html: image.description ? imageTag : null,
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
                    `${window.location.origin}/wp-json/wp/v2/media/${image_id}`
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
