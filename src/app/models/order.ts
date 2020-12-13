import { Food } from './food';
import { User } from './user';
export class Order {
    id: number;
    price:number;
    user: User;
    food: Food[];
}