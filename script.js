const extendHex = (shortHex) => {
  // write your code here
	if (typeof shortHex !== 'string' || (shortHex.length !== 4 && shortHex.length !== 7) || shortHex[0] !== '#') {
    throw new Error("Invalid input. Please provide a valid short hex code.");
  }

  // Extract color components
  const r = shortHex[1].repeat(2) || shortHex.slice(1, 3);
  const g = shortHex[2].repeat(2) || shortHex.slice(3, 5);
  const b = shortHex[3].repeat(2) || shortHex.slice(5);

  // Construct and return the full hex code
  const fullHex = `#${r}${g}${b}`;
  return fullHex;

};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
