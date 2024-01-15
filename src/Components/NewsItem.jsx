import defaultImage from "../assets/news.jpg";
import { useState } from "react";

const NewsItem = ({ title, description, src, url }) => {
  const [imageError, setImageError] = useState(false);

  function handleImageError() {
    // You can do additional error handling logic here if needed
    // For now, simply set the imageError flag to true 
    setImageError(true);
  }

  return (
    <div
      className="card bg-dark text-light d-inline-block m-3 p-2"
      style={{ maxWidth: "265px", minWidth: "265px" }}
    >
      <img
        onError={handleImageError}
        src={imageError ? defaultImage : src ? src : defaultImage}
        className="card-img-top"
        alt="..."
        style={{ height: "120px", width: "calc(100% - 1px)" }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ minHeight: "70px" }}>
          {title.slice(0, 50)}
        </h5>
        <p className="card-text" style={{ minHeight: "96px" }}>
          {description
            ? description.slice(0, 90)
            : "News having no description"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;