window.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select audio element with keycode
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select key element with keycode
    if (!audio) return; //stop the function
    audio.currentTime = 0; //rewind it to start
    audio.play(); // play audio
    key.classList.add("playing"); //add playing css class to key
    // console.log(audio);
  });

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if it is not a transform
    this.classList.remove("playing"); //remove playing class from key element
  }

  const keys = document.querySelectorAll(".key"); //make an array with selecting all key classes
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );