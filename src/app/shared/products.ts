import { Details } from './details'

export class Products{
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: number;
    description: string;
    details: Details[]
}