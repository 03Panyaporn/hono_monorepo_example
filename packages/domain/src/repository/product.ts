import type {IProduct, IProductEntity} from "../entity/product.js"

export interface IProductRepository {

    // Read
    findAll(): Promise<IProductEntity[]>;
    findById(id: number): Promise<IProductEntity>;

    // Create
    create(product_name: IProduct): Promise<IProductEntity>;

    // Update
    update(code: string, product_name: Promise<IProductEntity> , cost : number ) : Promise<IProductEntity> ;

    // Delete
    delete(id: number): Promise<boolean>;

}