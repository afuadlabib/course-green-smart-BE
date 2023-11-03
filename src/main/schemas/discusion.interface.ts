import History from "./history.interface";

export default interface Discusion extends History{
    description: string;
    userId: string;
    favorite: string[];
}