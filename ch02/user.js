export class User {
  firstName = '';
  lastName = '';
  #isActive = false;

  constructor(firstName, lastName, isActive = true) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#isActive = isActive;
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  get active() {
    return this.#isActive;
  }
}
