import History from "./history.interface";

export default interface Activity extends History{
    ipAddress: string;
    description: string;
}