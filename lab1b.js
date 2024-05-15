const num = 153
function isNarcissisticNumber(num) {
    // Преобразование числа в строку
    const numberString = String(num);
  
    // Количество цифр
    const numberDigits = numberString.length;
  
    // Сумма степеней цифр
    let sumOfPowers = 0;
    for (let i = 0; i < numberDigits; i++) {
      const digit = Number(numberString[i]);
      sumOfPowers += digit ** numberDigits;
    }
  
    // Возвращение true, если число равно сумме степеней своих цифр
    return sumOfPowers === num;
}

const isNarcissistic = isNarcissisticNumber(num);

console.log(isNarcissistic);
    // if (isNarcissistic) {
    //     console.log('true');
    // } else {
    //     console.log('false');
    // }
  
  console.log("Hello");