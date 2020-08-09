export class User {
    constructor(public email: string, public password: string, public firstName?: string, public lastName?: string )
    {
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
