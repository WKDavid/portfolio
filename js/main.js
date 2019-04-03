let projects = [ { name: "Sophie Sula Interiors, Web App", link: "https://sophiesulainteriors.com/", image: "img/sophieSula.png", visibility: true },
                 { name: "Global Solutions, React App", link: "http://gsrentz.com/", image: "img/gsolutions.png", visibility: true },
                 { name: "Venues Map, React App", link: "https://github.com/WKDavid/ReactVenuesMapApp", image: "img/ReactVenuesApp.png", visibility: true },
                 { name: "My Reads, React App", link: "https://github.com/WKDavid/MyReadsReactApp", image: "img/MyReadsReact.png", visibility: true },
                 { name: "Restaurant Reviews, Web App", link: "https://github.com/WKDavid/RestaurantReviewsWebApp", image: "img/RestaurantReviews.png", visibility: true },
                 { name: "Feed Reader Testing, Jasmine", link: "https://github.com/WKDavid/FeedReaderTesting", image: "img/FeedReader.png", visibility: true },
                 { name: "Arcade Game, Web App", link: "https://github.com/WKDavid/ArcadeGame", image: "img/ArcadeGame.png", visibility: true },
                 { name: "Card Matching Game, Web App", link: "https://github.com/WKDavid/CardMatchingGame", image: "img/CardMatching.png", visibility: true },
                 { name: "Python Quiz Game", link: "https://github.com/WKDavid/python_quiz_game", image: "img/quiz.png", visibility: true },
                 { name: "Generic web pages with movies and trailers, python", link: "https://github.com/WKDavid/Generic-web-page-with-movies-and-trailers",
                   image: "img/FavoriteMovies.png", visibility: true },
                 { name: "Business Card for Android, XML", link: "https://github.com/WKDavid/Business-Card-for-Android", image: "img/bcapp.png", visibility: true } ];

let shortBio = document.getElementsByClassName("shortBio")[0];
shortBio.innerHTML = `Welcome to my portfolio, please allow me a brief introduction.
                      My name is David and I am a professional Web Developer. I have a vast experience of working in the field of IT since 1990's. Since early 2000's I've been actively engaged in
                      the field of Web Development. In 2012 I've graduated from the Goethe University in Frankfurt, Germany and gained Bachelor's Degree in Computer Science.
                      As I am constantly aimed at honing my skills, I've been gaining additional qualifications by taking courses in modern Web Development at Udacity and Udemy.
                      I hope, the list of my most recent and relevant projects below will help you to assess my skill set, which includes:
                      JavaScript, jQuery, CSS, PHP, HTML, XHTML, XML, AngularJS, BackboneJS, EmberJS,
                      Bootstrap, Java, .Net, ASP.NET, Python, MySQL, GitHub, Apache Flex, JavaFX, cPanel, WordPress, Shopify, WooCommerce and big variety of graphic design programs such as:
                      Photoshop, Lightroom, Illustrator, InDesign, Animate, Dreamweaver, Fuse, Adobe Muse etc.`;

projectsToRender = () => {
  let projectList = document.getElementsByClassName("projectList")[0];
  let listItems = projects.map(aProject => { let toRender; if (aProject.visibility === true) {
                                                                toRender = `<li class="projectContainer">
                                                                            <span class="links" tabIndex="0" role="link" onclick="openLink('${aProject.link}')"
                                                                            onkeydown="keyValidate(event, '${aProject.link}')">${aProject.name}</span>
                                                                            <img class="projectPictures" onclick="openLink('${aProject.link}')" src="${aProject.image}" alt="${aProject.name}"
                                                                            role="link" onkeydown="keyValidate(event, '${aProject.link}')" tabIndex="0"></li>`
                                                              } return toRender; });
  projectList.innerHTML = listItems.join("");
  pictureSizeCheck();
}

keyValidate = (event, link) => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    openLink(link);
  }
}

pictureSizeCheck = () => {
  let picThumbs = document.getElementsByClassName("projectPictures");
    for (let i = 0; i < picThumbs.length; i++) {
      if (picThumbs[i].width !== 0 && picThumbs[i].height !== 0) {
        if (picThumbs[i].width > picThumbs[i].height) {
          picThumbs[i].style.width = "19vw";
          picThumbs[i].style.height = "auto";
        } else {
          picThumbs[i].style.height = "17vw";
          picThumbs[i].style.width = "auto";
        }
      } else {
        setTimeout(pictureSizeCheck, 10);
      }
    }
}

filterProjects = () => {
  let inputElement = document.getElementsByClassName("filter")[0];
  let filterQuery = inputElement.value.trim().toUpperCase();
    for (let projectObject of projects) {
      if (projectObject.name.toUpperCase().indexOf(filterQuery) > -1) {
        projectObject.visibility = true;
        projectsToRender();
      } else {
        projectObject.visibility = false;
        projectsToRender();
      }
    }
}

window.onload = function() {
  var loadingImg = document.getElementsByClassName("loadingCont")[0];
  loadingImg.style.display = "none";
};

openLink = (link) => {
  window.open(link);
}

projectsToRender();
