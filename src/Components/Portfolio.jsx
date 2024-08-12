/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A Text Utility Website 🎉",
    description:
      "Created a text utility website that allows users to manipulate text in various ways. Deployed to Vercel.",
    url: "https://text-util-tau.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Created a weather app that allows users to search for the weather in any city. Deployed to Vercel.",
    url: "https://weather-app-pied-zeta.vercel.app/",
  },
  {
    title: "To-Do List",
    description:
      "Created a to-do list app that allows users to add, delete, and mark tasks as complete.",
    url: "https://to-do-app-sooty-nu.vercel.app/",
  },
  {
    title: "Friday - Personal Assistant",
    description:
      "Created a personal assistant that can perform various tasks like sending emails, playing music, and more.",
    url: "https://github.com/Anubhab2003/Friday",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
