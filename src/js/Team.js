export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newPerson) {
    if (this.members.has(newPerson)) {
      throw new Error(`Member ${newPerson.name} has already been added to the team!`);
    } else this.members.add(newPerson);
  }

  addAll(...newPersons) {
    newPersons.forEach((newPerson) => this.members.add(newPerson));
  }

  toArray() {
    return Array.from(this.members);
  }
}
