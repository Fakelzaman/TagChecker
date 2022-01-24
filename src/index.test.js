const checkText = require("./index");

test('Passes if empty string are sent', () =>{
  expect(checkText("")).toBeTruthy();
})



// 
// checkText("The following text<C><B>is centred and in boldface</B></C>")
// checkText("<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence")
// checkText("<B><C> This should be centred and in boldface, but thetagsare wrongly nested </B></C>")
// checkText("<B>This should be in boldface, but there is an extra closingtag</B></C>")
// checkText("<B><C>This should be centred and in boldface, but there isa missing closing tag</C>")
