export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  *[Symbol.iterator]() {
    const list = this.characters;
    for(let index in list) {
      yield list[index];
    }
  }
}
