function calculateHandshakes(n) {
	return (n * (n - 1)) / 2;
}

const numberOfPeople = 10;
const handshakes = calculateHandshakes(numberOfPeople);

console.log(`Количество рукопожатий для ${numberOfPeople} человек: ${handshakes}`);
