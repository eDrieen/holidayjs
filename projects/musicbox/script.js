/*jshint esversion: 6 */

let cAudio = new Audio();
cAudio.src = "music_notes/c_note.mp3";
let dAudio = new Audio();
dAudio.src = "music_notes/d_note.mp3";
let eAudio = new Audio();
eAudio.src = "music_notes/e_note.mp3";
let fAudio = new Audio();
fAudio.src = "music_notes/f_note.mp3";
let gAudio = new Audio();
gAudio.src = "music_notes/g_note.mp3";
let aAudio = new Audio();
aAudio.src = "music_notes/a_note.mp3";
let bAudio = new Audio();
bAudio.src = "music_notes/b_note.mp3";

let arr = [cAudio, dAudio, eAudio, fAudio, gAudio, aAudio, bAudio];

let instrument_box = null;

document.addEventListener("DOMContentLoaded", function () {
      instrument_box = document.querySelectorAll(".instrument_box");

      [].forEach.call(instrument_box, function (el, i) {
            el.addEventListener("mouseover", function () {
                  let getAudio = arr[i];
                  getAudio.currentTime = 0;
                  getAudio.play();
                  el.classList.add("active");

                  el.addEventListener("mouseout", function() {
                        el.classList.remove("active");
                  });

            });

      });
});