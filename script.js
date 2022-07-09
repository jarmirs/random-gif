let imageURL =
  "https://media2.giphy.com/media/3ohhwqE7e9tJ4sfTaM/giphy.gif?cid=4fcb9bd3f1fb2dd1fe561ecea09ceafdfb4c94e76efb707c&rid=giphy.gif&ct=g";
const imageEl = document.getElementById("new-gif");
const displayImage = () => {
  imageEl.src = imageURL;
};
const buttonEl = document.getElementById("new");

buttonEl.addEventListener("click", () => {
  console.log("you clicked the button");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "http://api.giphy.com/v1/gifs/random?api_key=Kvb0OQ3fOzwpIQsFkGOKmmpKhJE1RS3S",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(result.data.images.original.url);
      imageURL = result.data.images.original.url;
      displayImage();
    })
    .catch((error) => console.log("error", error));
});
