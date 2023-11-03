import History from "./history.interface";

export default interface Attachment extends History{
    name: string;
    materialId: bigint;
}