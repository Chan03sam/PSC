export interface Request {
    id: string;
    userId: string;
    status: string;
    name: string;
    address: string;
    purpose: string;
    timestamp: Date;
    showContent?: boolean;
}