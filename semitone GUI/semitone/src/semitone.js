let notes=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

class JamBuddy{
    constructor(){
        this.num1;
        this.num2;
    }

    selectNotes(){
    //select two different notes
        this.num1 = Math.floor(Math.random()* (notes.length-1));
        this.num2 = Math.floor(Math.random()* (notes.length-1));
        var note1 = notes[this.num1];
        var note2 = notes[this.num2];

        this.arr = [note1, note2];

        document.getElementById("note1").innerHTML = this.arr[0];
        document.getElementById("note2").innerHTML = this.arr[1];
        
        return this.arr;
    }

    checkAnswer(){
        if(this.num1 < this.num2){
            var result=this.num2-this.num1;
        } else {
            result = (11 - this.num1) + (this.num2 + 1);
    }

    var userAnswer = document.getElementById("userAnswer").value;
    userAnswer = parseInt(userAnswer);
    
    if(result === userAnswer){
        var ans = true;
    }else{
        ans = false;
    }

    alert('The answer ' + ans);
        
    return ans;
    }

}

let jambuddy = new JamBuddy();
jambuddy.selectNotes();
