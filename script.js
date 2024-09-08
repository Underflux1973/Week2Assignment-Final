console.log("This better work");
console.dir(document);
console.log(document);
let currentIndex = 0;
let images = [
  {
    src: "/Images/Greece_2015_1.JPG",
    alt: "mother and son relaxing on a beach in Ios, Greece",
    width: 300,
    height: 200,
  },
  {
    src: "/Images/Greece_2015_2.JPG",
    alt: "a young girl sitting on a sun lounger on a beach in Ios, Greece",
    width: 300,
    height: 200,
  },
  {
    src: "/Images/Greece_2015_3.JPG",
    alt: "sun shinning through a palm tree in Ios, Greece",
    width: 300,
    height: 200,
  },
  {
    src: "/Images/Greece_4.JPG",
    alt: "young boy sitting next a beach in Ios, Greece",
    width: 300,
    height: 200,
  },
];
console.log(images);

let thumbnailsContainer = document.querySelector("#thumbnails-container");
console.log(thumbnailsContainer);

let largeImageContainer = document.querySelector("#large-image-container");
console.log(largeImageContainer);

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    let newSmallIMG = document.createElement("img");
    newSmallIMG.src = images[i].src;
    newSmallIMG.alt = images[i].alt;
    newSmallIMG.width = images[i].width;
    newSmallIMG.height = images[i].height;
    thumbnailsContainer.appendChild(newSmallIMG);
    console.log(newSmallIMG);
    newSmallIMG.addEventListener("click", (e) => {
      largeImageContainer.src = e.target.src;
      largeImageContainer.alt = e.target.alt;
    });
  }
}
createThumbnails();
