describe("A function", function() {

  it("Should add inputs", function() {
    expect(calInstance.add(5, 3)).toBe(8);
  });
  it("Should be able to allocate a slot", function() {
    expect(calInstance.set_slot(1)).toBe(8);
  });
  it("Should be able to get allocated slot", function() {
    expect(calInstance.get_slot(1)).toBe(8);
  });
  it("Should be able to store memory of last calculation", function() {
    expect(calInstance.last()).toBe(10);
  });
  it("Should be able to handle more than two arguments", function() {
    expect(calInstance.add(5, 3, 2)).toBe(10);
  });
  it("Should be able to allocate a slot", function() {
    expect(calInstance.set_slot(2)).toBe(13);
  });
  it("Should be able to add a number with last calculation result", function() {
    expect(calInstance.add("LAST", 3)).toBe(11);
  });
});
