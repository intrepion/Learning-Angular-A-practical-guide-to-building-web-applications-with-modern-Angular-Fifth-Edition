export class User {
  constructor(private firstName: string, private lastName: string, private isActive: boolean = true) {}

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get active(): boolean {
    return this.isActive;
  }
}
