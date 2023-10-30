interface Material extends History{
    title: string;
    isComplited: boolean;
    isSubscription: boolean;
    price: bigint;
    attachment: Attachment[];
    discusionId: String;
    thumbnail: string;
    userSubcription: boolean;
}