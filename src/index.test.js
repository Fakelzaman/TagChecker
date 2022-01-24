const checkText = require("./index");

test('Passes if empty string are sent', () =>{
  expect(checkText("")).toBeTruthy();
})

test('Passes if no tags in string are sent', () =>{
  expect(checkText("This is a test script")).toBeTruthy();
})

test('Passes if one tag set in string are sent', () =>{
  expect(checkText("The following text<C>is centred and in boldface</C>")).toBeTruthy();
})

test('Passes if two tag set in string are sent', () =>{
  expect(checkText("The following text<C><B>is centred and in boldface</B></C>")).toBeTruthy();   //Default
})

test('Passes with complex tags and other bracket', () =>{
  expect(checkText("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence")).toBeTruthy();       //Default
})

test('Fails if tags are wrongly nested', () =>{
  expect(checkText("<B><C> This should be centred and in boldface, but thetagsare wrongly nested </B></C>")).toBeFalsy();      //Default
})

test('Fails if missing opening tag', () =>{
  expect(checkText("<B>This should be in boldface, but there is an extra closingtag</B></C>")).toBeFalsy();      //Default
})

test('Fails if missing closing tag', () =>{
  expect(checkText("<B><C>This should be centred and in boldface, but there isa missing closing tag</C>")).toBeFalsy(); //Default
})

test('Passes with excess brackets', () =>{
  expect(checkText("<<>><<B><<<>><><>>></B><>>><><>")).toBeTruthy();
})

test('Fail with escape characters', () =>{
  expect(checkText("The following text<C><B>is centred and in boldface<//B><//C>")).toBeFalsy();
})

test('Pass with escape characters but has proper closing afterwards', () =>{
  expect(checkText("The following text<C><B>is centred and in boldface<//B><//C> But here is the end </B></C>")).toBeTruthy();
})
