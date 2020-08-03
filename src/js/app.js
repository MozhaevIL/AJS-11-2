export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    const list = this.characters;
    for (const character of list) {
      yield character;
    }
  }
}
