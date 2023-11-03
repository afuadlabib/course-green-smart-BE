import History from "./History";

export default interface Material extends History{
    title: string;
    isComplited: boolean;
    isSubscription: boolean;
    price: bigint;
    attachment: any;
    discusionId: String;
    thumbnail: string;
    userSubcription: boolean;
}

