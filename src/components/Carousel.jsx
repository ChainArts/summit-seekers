import { useFetchPosts } from "./functions.js";

const Carousel = () => {
    
    const [posts, loading, error] = useFetchPosts("adventure story");
    console.log("Carousel:", posts, loading, error);

    return (
        <div className="carousel-container">
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title.rendered}</h3>
                </div>
            ))}
        </div>
    );
};

const CarouselItem = ({ post }) => {
    return (
        <div className="carousel-item" key={post.id}>
            <div className="carousel-image">
                <img src={post.featured_media} />
            </div>
            <div className="carousel-content">
                <div className="arrow"></div>
                <h3>{post.title.rendered}</h3>
            </div>
        </div>
    );
};

export default Carousel;
