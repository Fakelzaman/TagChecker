/*
  Check a paragraph of text to see if all Tags are valid
  Returns true if all opening tags have a matching closing tag
  Returns false if invalid
*/
const checkText = (text) => {
  let openingTags = []                                     // Queue of opening tags we will need to match
  let uncheckedTags = text.match(/(<[A-Z]>)|(<\/[A-Z]>)/g) //Quick regex check to get all opening and closing tags in an array

  if(uncheckedTags != null){ //See if any tags are in the text
    while(uncheckedTags.length > 0){  //While we still have tags to match loop
      let current = checkForMatch(uncheckedTags, openingTags)  //Check the head of each array to see if matching
      if(!current){return false}  //Fail if a match wasnt found for any reason
    }

    if(openingTags[0] != null){ //Check to see if we have any tags unmatched
      console.log(`Expected </${openingTags[0][1]}> found #`)  //Fail if we have unmatched Opening tags
      return false
    }
  }
  console.log("Correctly tagged paragraph")  //Log a success and return true if we found all matches
  return true
}
/*
  Compare the head of each array
    if head of the queue opening tag matches the head of the tags closing tag must be a match
    and returns true

   if the head of the tags is an opening tag, put it to the front of the queue for checking next round

   uncheckedTags = Array - The list of all tags that we have not found matches
   openingTags = Array - queue of opening tags we still have to find matches for
*/
const checkForMatch = (uncheckedTags, openingTags) => {
  if(uncheckedTags[0].includes('/')){ //Check to see if head of unchecked tags is a closing tag
    if(openingTags[0] == null){       //Check to see if we have an opening tag to match
      console.log(`Expected # found ${uncheckedTags[0]}`)  //Fail because we have a closing tag with an unmatched opening tag
      return false
    }
    if(openingTags[0][1] == uncheckedTags[0][2]){   // Check to see if the closing tag matches our opening tag
      openingTags.shift();
      uncheckedTags.shift();
      return true          //Success, remove both the opening tags and closing tags from their respective arrays as they have been matched successfully and carry on
    }else{
      console.log(`Expected </${openingTags[0][1]}> found ${uncheckedTags[0]}`)   // Fail because the expecting closing tag does not match the opening tag
      return false
    }
  }else{
    openingTags.unshift(uncheckedTags.shift())  // The head of the unchecked tag is an opening tag, so we add it to the front of the queue and carry on the match
    return true
  }
}

module.exports = checkText;
