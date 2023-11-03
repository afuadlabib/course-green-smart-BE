import History from "./History";

export default interface Attachment extends History{
    name: string;
    materialId: bigint;
}