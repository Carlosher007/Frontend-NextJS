import { Category, Image } from "@/types";

const BASE_URL = "https://localhost:7172/api";

export const getImages: () => Promise<Image[]> = async () => {
    const response = await fetch(`${BASE_URL}/Image/get-images`);
    const images: Image[] = await response.json();
    return images;
}

export const getCategories: () => Promise<Category[]> = async () => {
    return await [
        {
            category_id: 24,
            name: "terror",
            description: "Categoria del terror"
        },
        {
            category_id: 25,
            name: "comedy",
            description: "Categoria de la comedia"
        },
        {
            category_id: 3,
            name: "drama",
            description: "Categoria del drama"
        },
        {
            category_id: 4,
            name: "action",
            description: "Categoria de la acción"
        },
        {
            category_id: 5,
            name: "romance",
            description: "Categoria del romance"
        }
    ]
}

export const uploadImage = async (imageData: any) => {
    let data = new FormData();
    data.append("image", imageData.image[0])
    data.append("name", imageData.name)
    data.append("description", imageData.description)
    data.append("categories", imageData.categories)

    const post = await fetch(`${BASE_URL}/Image/upload-image`, {
        method: 'post',
        body: data,
    });
    return await post.text();
}