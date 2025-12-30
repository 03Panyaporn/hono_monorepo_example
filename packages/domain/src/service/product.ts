import type {ProductCreateDto, ProductDto} from "../dto/product.dto.js";

export interface IProductService {

    findAllProduct() : Promise<ProductDto[]>
    create(productDto : ProductCreateDto) : Promise<ProductDto>
}