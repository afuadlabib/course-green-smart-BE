import History from "./history.interface";

export default interface Student extends History{
    userId: bigint;
    fullname: string;
    schoolId: string;
    classId: string;
}