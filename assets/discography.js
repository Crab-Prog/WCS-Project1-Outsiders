const cards = document.querySelector(".cards");
const fullAlbum = document.querySelector(".full-album");

/*const albumToChange = [
    {
        title: "Smoke in the air",
        picture: "./img/pic-album-1.jpg"
      },
    {
      title: "Liberty",
      picture: "./img/pic-album-2.jpg"
    }
];
*/

function changeCard() {
    const picture = document.querySelector(".card-picture");
    fullAlbum.appendChild(picture);

    const album = document.querySelector(".full-album");
    album.appendChild(albumPic);

    const albumPic = document.querySelector(".album-pic");
    albumPic.appendChild(picture);
};

for (let i = 0; i < changeCard.length; i++) {
  if ( i = 0){
    changeCard();
  } 
  else ( console.log("click somewhere"));

/*picture.addEventListener("click", event => {
    albumPic.innerHTML = function changeCard(albumToChange[0].title,albumToChange[0].picture)};)*/
