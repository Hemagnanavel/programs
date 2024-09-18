const textInput = document.getElementById('text-input');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');
submit.addEventListener('click', () => {
	const text = textInput.value.trim();
	const words = text.split(/\s+/);
	const uniqueWords = {};
	const wordCount = {};
	// Count characters
	const charCount = text.length;
	// Count words
	const wordLength = words.length;
	// Count unique words and their frequency
	words.forEach((word) => {
		word = word.toLowerCase();
		if (!uniqueWords[word]) {
			uniqueWords[word] = 1;
		} else {
			uniqueWords[word]++;
		}
	});
	// Create result string
	let result = `
		<p>No of char: ${charCount}</p>
		<p>No of word: ${wordLength}</p>
		<p>No of unique word: ${Object.keys(uniqueWords).length}</p>
		<p>Count by unique word:</p>
		<pre>${JSON.stringify(uniqueWords, null, 2)}</pre>
	`;
	resultDiv.innerHTML = result;
});

