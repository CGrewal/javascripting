
function rollDice(instances){
	var result;
	var resultArray = [];
	for (var i = 0; i < instances; i++) {
		result = Math.floor(Math.random() * 6);
		resultArray.push(result);
}
console.log("Rolled " + instances + " dice: " + resultArray.join(", "));
}
var input = process.argv.slice(2);

(rollDice(input));

