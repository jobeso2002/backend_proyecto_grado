import { Request } from "express";

export interface Request_user extends Request{
    user: {email: string; role: string}
}