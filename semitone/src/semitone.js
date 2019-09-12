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
    return this.arr;
}

checkAnswer(userInput){
    for(var a=0; a<notes.length; a++){
        if(this.arr[0] ===notes[a]){
            var position1 = a;
        }
    }
        for(var b=0; b<notes.length; b++){
        if(this.arr[1] === notes[b]){
            var position2 = b;
        }
    }

   if(this.num1 < this.num2){
       var result=this.num2-this.num1;
   }else{
     result = (11 - this.num1) + (this.num2 + 1);
   }


   if(result == this.userInput){
      return true;
   }else{
    return false;
}
}

}
