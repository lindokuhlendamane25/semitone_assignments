let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var arr = [];
class JamBuddy {
  constructor() {
    this.num1;
    this.num2;
    this.streak = 0;
  }
  selectNotes() {
    //select two different notes
    this.num1 = Math.floor(Math.random() * notes.length);
    this.num2 = Math.floor(Math.random() * notes.length);
    var note1 = notes[this.num1];
    var note2 = notes[this.num2];
    var flat1 = ["A#", "bFlat"];
    var flat2 = ["C#", "dFlat"];
    var flat3 = ["D#", "eFlat"];
    var flat4 = ["F#", "gFlat"];
    var flat5 = ["G#", "aFlat"];
    if (note1 === "A#") {
      var flatNum1 = Math.floor(Math.random() * 2);
      note1 = flat1[flatNum1];
    }
    if (note2 === "A#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note2 = flat1[flatNum1];
    }
    if (note1 === "C#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note1 = flat2[flatNum1];
    }
    if (note2 === "C#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note2 = flat2[flatNum1];
    }
    if (note1 === "D#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note1 = flat3[flatNum1];
    }
    if (note2 === "D#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note2 = flat3[flatNum1];
    }
    if (note1 === "F#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note1 = flat4[flatNum1];
    }
    if (note2 === "F#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note2 = flat4[flatNum1];
    }
    if (note1 === "G#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note1 = flat5[flatNum1];
    }
    if (note2 === "G#") {
      flatNum1 = Math.floor(Math.random() * 2);
      note2 = flat5[flatNum1];
    }
    arr = [note1, note2];
    document.getElementById("explanation").innerHTML = "";
    document.getElementById("notes").innerHTML = arr;
  }
  checkAnswer() {
    if (this.num1 < this.num2) {
      var result = this.num2 - this.num1;
    } else {
      result = 11 - this.num1 + (this.num2 + 1);
    }
    var userAnswer = document.getElementById("userAnswer").value;
    userAnswer = parseInt(userAnswer);
    if (result === userAnswer) {
      var ans = "You got it right .Well Done" + " Streak : ";
      document.getElementById("explanation").innerHTML = notes;
      this.streak++;
    } else {
      ans = "Wrong answer! Try again";
    }
    return alert(ans + this.streak);
  }
  revealAnswer() {
    for (var a = 0; a < notes.length; a++) {
      if (notes[a] === arr[0]) {
        notes[a] = notes[a].fontcolor("green");
      } else if (notes[a] === arr[1]) {
        notes[a] = notes[a].fontcolor("green");
      }
    }
    document.getElementById("explanation").innerHTML = notes;
  }
}
let jambuddy = new JamBuddy();
jambuddy.selectNotes();
