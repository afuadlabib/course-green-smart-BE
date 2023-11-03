import History from "./history.interface";

export default interface Author extends History{
    name: string;
    userId: bigint;
}