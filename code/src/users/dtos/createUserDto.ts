import { IsDefined, IsEmail, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @MaxLength(20)
    @IsDefined()
    public readonly username: string;
    
    @IsDefined()
    @IsEmail()
    public readonly email: string;

    @IsDefined()
    @MinLength(6)
    public readonly password: string;

    @IsOptional()  
    public readonly age?: number; 

    public constructor(username: string, email: string, password: string, age?: number) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
    }
}
