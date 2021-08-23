import { NextFunction, Response, Request } from "express";

class CountRequest {

    private static COUNT: number = 0;

    private constructor() {

    }

    public static counterRequest(req: Request, res: Response, next: NextFunction) {
        
        if (CountRequest.COUNT) {
            CountRequest.COUNT++;
            console.log(CountRequest.COUNT);
            
            return next();
        }

        CountRequest.COUNT++;
        console.log(CountRequest.COUNT);
        
        return next();
    }

}

export { CountRequest };