var testStrings = ["What do you mean?", 
    "You don't frighten us, English pig-dogs!", 
    "Go and boil your bottoms, sons of a silly person!",
    "I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!",
    "And this isn't my nose. This is a false one.",
    "Ah, now we see the violence inherent in the system!",
    "On second thoughts, let's not go there. It is a silly place.",
    "He hasn't got shit all over him.",
    "Well, Mercia's a temperate zone!",
    "Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.",
    "What a strange person.",
    "Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.",
    "Why? Who's that then?",
    "I have to push the pram a lot.",
    "Well, I didn't vote for you.",
    "Well, Mercia's a temperate zone!",
    "Shut up! Will you shut up?!",
    "It's only a model.",
    "Well, I didn't vote for you.",
    "I dunno. Must be a king.",
    "Well, what do you want?",
    "Oh, ow!",
    "Did you dress her up like this? The nose?",
    "Well, she turned me into a newt."];
QUnit.test("Add Single Object", function(assert) {
    var testString = "TestObject";
    var linkedList = new Collections.LinkedList();
    linkedList.add(testString);
    var first = linkedList.getFirst();
    assert.deepEqual(first, testString);
});
QUnit.test("Add Multiple Objects", function (assert) {
    var linkedList = new Collections.LinkedList();
    var i = 0;
    for(let dataPoint of testStrings)
    {
        linkedList.add(dataPoint);
    }
    var equivalentArray = [];
    for(var testPoint of linkedList)
    {
        equivalentArray.push(testPoint);
    }
    assert.deepEqual(equivalentArray,testStrings);
});
QUnit.test("Add Multiple Objects And AsArray", function (assert) {
    var linkedList = new Collections.LinkedList();
    for(let dataPoint of testStrings)
    {
        linkedList.add(dataPoint);
    }
    var asArray = linkedList.asArray();
    assert.deepEqual(asArray,testStrings);
});
QUnit.test("Remove Objects", function(assert) {
    var linkedList = new Collections.LinkedList();
    for(let dataPoint of testStrings)
    {
        linkedList.add(dataPoint);
    }
    var random = Math.round(Math.random() * testStrings.length);
    linkedList.remove(testStrings[random]);
    assert.notEqual(linkedList.asArray().indexOf(testStrings[random]), -1);
});
QUnit.test("Concatenate Lists", function(assert) {
    var expectedLen = (testStrings.length * 2);
    var linkedList = new Collections.LinkedList();
    var linkedList2 = new Collections.LinkedList();
    for(let dataPoint of testStrings)
    {
        linkedList.add(dataPoint);
        linkedList2.add(dataPoint);
    }
    var len = linkedList.asArray().length
    assert.equal(len, testStrings.length);
    linkedList.concat(linkedList2);
    assert.equal(expectedLen, linkedList.asArray().length);
});
QUnit.test("Add To First", function(assert){
   var firstItem = "This is the first item in the array"
   var linkedList = new Collections.LinkedList();
   for(let dataPoint of testStrings)
   {
       linkedList.add(dataPoint);
   }
   linkedList.addFirst(firstItem);
   var actual = linkedList.getFirst();
   assert.equal(actual, firstItem);
});
QUnit.test("Clear", function(assert){
    var linkedList = new Collections.LinkedList();
    for(let dataPoint of testStrings)
    {
        linkedList.add(dataPoint);
    }
    assert.equal(linkedList.asArray().length, testStrings.length);
    linkedList.clear();
    assert.equal(linkedList.asArray().length, 0);
});