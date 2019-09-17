var jamB = new JamBuddy()



describe("selectNotes", function(){

    it ("should output two random letters", function(){
        expect(jamB.selectNotes().toBe(["A", "B"]));
    });
})

describe("checkAnswer", function(){

    it ("should check if the text field has a value ", function(){
        expect(jamB.checkAnswer().toBeDefined());
    });

    
})
   