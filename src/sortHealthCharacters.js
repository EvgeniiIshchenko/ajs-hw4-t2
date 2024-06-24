export default function sortHealthCharacters(array) {
    array.sort((a, b) => b.health - a.health);
      return array;
}