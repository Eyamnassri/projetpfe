export class CreateUserDto {
    email?: string | null;
    name?: string | null;
    password?: string | null;
    role?:string|null;
  resToken?:string;
}
export class AuthUser{
    email?: string | null;
    password?: string | null 
    // role: string
}