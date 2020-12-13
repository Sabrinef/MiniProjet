import { Food } from './food';
import { User } from './user';
export class Comment {
    id: number;
    body: string;
    date:Date;
    user:User;
    food:Food;
}