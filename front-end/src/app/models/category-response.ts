export interface CategoryResponse {
    image_url:string;
    category_name:string;
}

export interface ApiCategoryResponse {
    content: CategoryResponse[];
    page: {
        totalPages: number;
        number: number;
    };
}