const ENG_LETTERS = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

export type TLanguages = "EN";
export default function getRandomLetter(lng: TLanguages) {
  switch (lng) {
    case "EN":
      return ENG_LETTERS[Math.floor(Math.random() * ENG_LETTERS.length)];
    default:
      return ENG_LETTERS[Math.floor(Math.random() * ENG_LETTERS.length)];
  }
}
