import { Food } from './food';
import { User } from './user';

export class Panier {
    id: number;
    user: User;
    food: Food[];
}