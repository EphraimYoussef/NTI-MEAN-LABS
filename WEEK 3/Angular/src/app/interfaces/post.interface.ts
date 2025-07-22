export interface Ipost {
    id:number;
    userId: number;
    title: string;
    body: string;
    createdAt: Date;
    votes: number;
    comments: string[];
    imageUrl: string;
}