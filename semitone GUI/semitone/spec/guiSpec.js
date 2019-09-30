describe("Jambuddy", function() {
  it("should be defined", function() {
    expect(jambuddy).toBeDefined();
  });
  it("should check for flats", function() {
    expect(flats).toBeDefined();
  });

  it("should check for notes", function() {
    expect(notes).toBeDefined();
  });

  it("should check if the user has inserted an answer in the text field", function() {
    expect(userAnswer).not.toBeNull();
  });

  it("should check if checkAnswer() equals the userAnswer",  function(){
    expect(userAnswer).toBeDefined();

  })
});
