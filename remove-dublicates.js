function removeDuplicates(input) {
	// Разделяем строку на массив слов
	const wordsArray = input.split(',');

	// Создаем набор для исключения дубликатов
	const uniqueWordsSet = new Set(wordsArray);

	// Преобразуем набор обратно в массив, затем в строку
	return Array.from(uniqueWordsSet).join(',');
}

const result = removeDuplicates("кошка,собака,лошадь,корова,кошка,собака,лошадь");
console.log(result); // "кошка,собака,лошадь,корова"
