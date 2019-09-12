var jamB = new JamBuddy()



describe("selectNotes", function(){

    it ("should output two random letters", function(){
        expect(jamB.selectNotes().toBe(["A", "B"]));
    });
})

describe("checkAnswer", function(){

    it ("should return a boolean", function(){
        expect(jamB.checkAnswer(2).toBeFalsy());
    });
})
   