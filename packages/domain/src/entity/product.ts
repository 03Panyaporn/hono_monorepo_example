export interface IProduct {
    id: number
    code: string
    product_name: string
    cost: number
    created_at: Date
    updated_at: Date
    is_publish: boolean
}

export interface IProductEntity extends Partial<IProduct> {}