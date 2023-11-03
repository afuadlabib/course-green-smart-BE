import History from "./History";

export default interface Activity extends History{
    ipAddress: string;
    description: string;
}