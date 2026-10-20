import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const BASE_URL = import.meta.env.BASE_URL;

const Project = ({
  title,
  description,
  subDescription,
  href,
  demo,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl text-text">{title}</p>
          <div className="flex flex-wrap mt-2 gap-x-5 gap-y-1 text-lavender">
            {tags.map((tag) => (
              <span key={tag.id} className="whitespace-nowrap hover:text-terminal transition-colors">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-terminal hover:text-terminal-dim hover-animation"
        >
          Read More
          <img src={`${BASE_URL}assets/icons/arrow-right.svg`} className="w-5" />
        </button>
      </div>
      <div className="divider-line" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          demo={demo}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
