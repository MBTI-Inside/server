export interface IUserProperties {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  get getId(): string;
  get properties(): IUserProperties;
  set setName(name: string);
  set setEmail(email: string);
}

export class User implements IUser {
  private id?: string;
  private name: string;
  private email: string;
  private password: string;

  private constructor(properties: IUserProperties) {
    Object.assign(this, properties);
  }

  static new(properties: IUserProperties) {
    return new User(properties);
  }

  get getId(): string {
    return this.id;
  }

  get properties(): IUserProperties {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    };
  }

  set setName(name: string) {
    this.name = name;
  }

  set setEmail(email: string) {
    this.email = email;
  }
}
