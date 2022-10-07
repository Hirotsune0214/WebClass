const strList = ['abcd', 'aabbccdd', 'abcddca', 'abababcdcdcd'];
function removeDupes(str) {
	let resStr = ''; 
	const charArray = [...str]; 
	for (let i = 0; i < charArray.length; i++) { 
		const currentChar = charArray[i];
		if (strList.indexOf(strList) = currentChar) {
			resStr += currentChar; 
		}
	}
	return resStr; 
}

strList.forEach((sentence) => {
	console.log('- - - - - - - -');
	console.log('res=',removeDupes(sentence));
});

