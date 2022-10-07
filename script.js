const mediaTag = window.jsmediatags;
const chooseSong = document.querySelector(".neu");
const playFeatures = document.querySelector(".play-features");
const welcomeWrapper = document.querySelector(".welcome-wrapper");
const clickToPlayBtn = document.querySelector(".play-music");
const secondSec = document.querySelector(".second-sec");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const trackImage = document.querySelector(".img");
///////////////////////
window.addEventListener("onLoad", hideWelcome);

function hideWelcome() {
  setTimeout(() => {
    welcomeWrapper.style.display = "none";
    secondSec.style.display = "block";
  }, 3000);
}

// ////////////////////

const jsmediatags = window.jsmediatags;

document.querySelector("#upload").addEventListener("change", (event) => {
  const file = event.target.files[0];

  jsmediatags.read(file, {
    onSuccess: function (tag) {
      // Array buffer to base64
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
        base64String += String.fromCharCode(data[i]);
      }

      // Output media tags
      document.querySelector(
        "#cover"
      ).style.backgroundImage = `url(data:${format};base64,${window.btoa(
        base64String
      )})`;

      let titleLength = (document.querySelector("#title").textContent =
        tag.tags.title);
      document.querySelector("#artist").textContent = tag.tags.artist;

      var string = titleLength;
      var length = 23;
      var trimmedString = string.substring(0, length);
      titleLength = trimmedString;
      document.querySelector("#title").textContent = trimmedString;
    },
    onError: function (error) {
      console.log(error);
    },
  });
});

function handleFiles(event) {
  var files = event.target.files;
  $("#src").attr("src", URL.createObjectURL(files[0]));
  document.getElementById("audio").load();
  document.getElementById("audio").play();
}

document
  .getElementById("upload")
  .addEventListener("change", handleFiles, false);

chooseSong.addEventListener("click", selectSong);

function selectSong() {
  setTimeout(() => {
    playFeatures.style.display = "block";
  }, 2000);
}

hideWelcome();
