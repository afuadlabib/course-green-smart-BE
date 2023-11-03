import History from "./History";

export default interface Discusion extends History{
    description: string;
    userId: string;
    favorite: string[];
}