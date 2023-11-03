import History from "./history.interface";

export default interface Teacher extends History{
    userId: string;
    fullname: string;
    courses: any; 
}