export interface IProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images?: string;
    category: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IProductResponse {
    message: string;
    data: IProduct[];
    count: number;
}