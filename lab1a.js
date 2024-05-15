const s1 = [2, 4, 1, 8, 9];
const s2 = [11, 3, 7, 5];

solution(s1, s2);

function solution (s1, s2) {
    // Проверка длины массивов
 if (s1.length < 4 || s2.length < 4) {
    throw new Error("Каждый массив должен содержать не менее 4 элементов");
  }

  // Поиск двух минимальных элементов в s1
  const min1s1 = Math.min(...s1);
  const min2s1 = Math.min(...s1.filter(num => num > min1s1));

  // Поиск двух минимальных элементов в s2
  const min1s2 = Math.min(...s2);
  const min2s2 = Math.min(...s2.filter(num => num > min1s2));

 // Вывод суммы минимальных элементов s1
 console.log(`Сумма двух минимальных чисел s1: ${min1s1 + min2s1}`);

 // Вывод суммы минимальных элементов s2
 console.log(`Сумма двух минимальных чисел s2: ${min1s2 + min2s2}`);
}