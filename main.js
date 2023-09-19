function validateForm() {
  let uName = document.forms["myForm"]["uName"].value.toLowerCase();
  let pName = document.forms["myForm"]["pName"].value.toLowerCase();
  
  if (uName == "" && pName == "") {
    alert("Name must be filled out");
    return false;
  }
calculateRelationship(uName, pName);
}


function calculateRelationship(name1, name2) {
  let name1Chars = name1.split("");//b,a,t,r,i
  let name2Chars = name2.split("");
  let flames = [
    "Friends",
    "Lovers",
    "Affectionate",
    "Marriage",
    "Enemies",
    "Siblings",
  ];

  // same char remover
  for (let i = 0; i < name1Chars.length; i++) {
    for (let j = 0; j < name2Chars.length; j++) {
      if (name1Chars[i] === name2Chars[j]) {
        name1Chars[i] = "";
        name2Chars[j] = "";
        break;
      }
    }
  }

  let remainingChars = colonRemover(name1Chars + name2Chars);
  while (flames.length > 1) {
    const indexToRemove = (remainingChars.length % flames.length) - 1;
    if (indexToRemove >= 0) {
      flames.splice(indexToRemove, 1);
    } else {
      flames.splice(flames.length - 1, 1);
    }
  }

  console.log(flames)
  // alert(flames)

}

// colon remover
function colonRemover(remaining) {
  let remainingChars = "";
  for (let colon = 0; colon < remaining.length; colon++) {
    if (remaining[colon] !== ",") {
      remainingChars += remaining[colon];
    }
  }

  return remainingChars;
}


