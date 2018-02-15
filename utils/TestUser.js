export class TestUser {
  constructor() {
    this._firstName = 'John';
    this._lastName = 'Doe';
    this._profilePictureUrl = '';
  }
  
  fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}