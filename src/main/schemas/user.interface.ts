import Role from './role.enum'
import History from "./history.interface";

export default interface User extends History{
    username: string;
    email: string;
    password: string;
    role: Role;
    birthDay: string;
    imageUrl: string;
    address: string;
}
