export function datePokemon(date: string): string {
  const dateFormat = date.split("/");
  const year = dateFormat[0].split("");
  const month = dateFormat[1].split("");
  const day = dateFormat[2].split("");
  const yearSum = reduceNumber(year);
  const monthSum = reduceNumber(month);
  const daySum = reduceNumber(day);
  const pokemonID = `${daySum - 1}${monthSum - 1}${yearSum - 1}`;
  return pokemonID;
}

function reduceNumber(array: string[]) {
  let arraySum = array.reduce((a, b) => a + parseInt(b), 0);
  while (arraySum >= 10) {
    arraySum = arraySum
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
  }
  return arraySum;
}
