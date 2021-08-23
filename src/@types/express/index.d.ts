declare namespace Express {
    export interface Request {
        project: {
            id: string;

            title: string;

            tasks?: string[];

            created_at?: Date;
        }
    }
}