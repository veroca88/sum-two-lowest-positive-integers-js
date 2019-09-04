function sumTwoSmallestNumbers(numbers) {
  var newNumbers = []

  function sortNumber(a, b) {
    return a - b
  }

  numbers.forEach(number => {
    if (number > 0) {
      newNumbers.push(number)
      newNumbers.sort(sortNumber)
    }
  })
  return (newNumbers[0] + newNumbers[1])
}