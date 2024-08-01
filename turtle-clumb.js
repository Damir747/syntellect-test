function turtleClimb(targetHeight, climbPerDay, slidePerNight) {
	// 100 - Целевая высота в метрах
	// 50 - Подъем за день в метрах
	// 30 - Спуск за ночь в метрах

	let currentHeight = 0;    // Текущая высота
	let days = 0;             // Количество дней

	while (currentHeight < targetHeight) {
		days++;               // Начинается новый день
		currentHeight += climbPerDay; // Черепашка поднимается

		// Проверяем, достигла ли черепашка цели
		if (currentHeight >= targetHeight) {
			break; // Если достигла, выход из цикла
		}

		currentHeight -= slidePerNight; // Черепашка скатывается ночью
	}

	return days;
}

console.log(`Черепашка залезет на вершину холма на ${turtleClimb(100, 50, 30)}-е сутки.`);

