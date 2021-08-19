import {addClass, handleClick, removeClass} from "./helper-functions.js";
const lightboxes = [
  {
    id: 1,
    name:'Ravenous',
    src:'./assets/images/ravenous.png',
    description:'Ravenous is a Codecademy project that uses React and the Yelp API to allow users to search for restaurants. It was my first complete use of fetch API, and I learned a lot about CORS as well.',
    url:'https://sam-alefsen.github.io/ravenous/'
  },
  {
    id: 2,
    name:'Thillen Education Foundation',
    src:'./assets/images/thillen-education-foundation.png',
    description:`I collaborated with a graphic designer to build this website in Wix's new Editor X platform. Thillen Education Foundation is a community-based financial assistance program. They strive to break the cycle of systemic poverty by financing post-secondary education and skills training for hardworking students.`,
    url:'https://www.thilleneducationfoundation.com/'
  },
  {
    id: 3,
    name:'Emory Alumni Association',
    src:'./assets/images/emory-alumni-association.png',
    description:`I attended Emory and took a job out of college in their Advancement Communications department. My role was primarily web content, which I curated with Cascade. But I frequently created custom CSS and scripts in order to enhance the features of the site. I also made use of several Google Suite products to provide analytics and improve SEO.`,
    url:'http://www.alumni.emory.edu/'
  }
];

const screenshots = document.querySelectorAll('.screenshot');


/* main function */

export const createLightbox = function createLightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const projectWindow = document.createElement('div');
  addClass(projectWindow, 'project-window');
  lightbox.appendChild(projectWindow);
  
  screenshots.forEach(screenshot => {
    const index = Array.prototype.indexOf.call(screenshots, screenshot);
    const data = lightboxes[index];

    handleClick(screenshot, event => {
      addClass(lightbox, 'active');

      projectWindow.innerHTML = `
        <h3>${data.name}</h3>
        <hr />
        <img src=${data.src} alt=${data.name} />
        <p>${data.description}</p>
        <a class='button blue' href=${data.url} target="_blank">Visit Site</button>
      `;
    });
  });

  handleClick(lightbox, event => {
    if(event.target !== event.currentTarget) {
      return;
    };
    removeClass(lightbox, 'active');
    projectWindow.innerHTML = ``;
  });
};