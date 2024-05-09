import { Category, Image } from "@/app/core/lib/definitions";

const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL;

export const getImages: () => Promise<Image[]> = async () => {
    const response = await fetch(`${BASE_URL}/Image/get-images`);
    const images: Image[] = await response.json();
    return images;
}

export const getUserImages: (userId: number | string) => Promise<Image[]> = async (userId: number | string) => {
    const response = await fetch(`${BASE_URL}/Image/get-user-images?`
        + new URLSearchParams({foo: "userId", value:`${userId}`})
    );
    const images: Image[] = await response.json();
    return images;
}

export const getCategories: () => Promise<Category[]> = async () => {
    const response = await fetch(`${BASE_URL}/Category/get-categories`);
    const categories: Category[] = await response.json();
    return categories;
}

export const uploadImage = async (imageData: any) => {
    try 
    {
        let data = new FormData();
        data.append("image", imageData.image[0])
        data.append("categories[]", JSON.stringify((imageData.categories as string).split(",")))
        Object.keys(imageData)
            .filter(key => !["image", "categories"].includes(key))
            .map(key => data.append(key, imageData[key]))

        const post = await fetch(`${BASE_URL}/Image/upload-image`, {
            method: 'post',
            body: data,
        });
        return post;
    } catch (err) 
    {
        throw new Error((err as Error).message)
    }
}

export const deleteImage = async (imageId: string) => {
    try 
    {
        const _delete = await fetch(`${BASE_URL}/Image/delete-image/${imageId}`, {
            method: 'delete',
        });
        return _delete;
    }
    catch (err) {
        throw new Error("An unespected error happened")
    }
};

export const updateImage = async (imageData: any, imageId: number) => {
    try 
    {
        const data:any = {
            name: imageData.name,
            description: imageData.description,
            price: Number(imageData.price),
            categories: imageData.categories.split(",").map((c:string) => Number(c))
        }
        console.log(data)
        const put = await fetch(`${BASE_URL}/Image/update-image/${imageId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              },
        });
        return put;
    } catch (err) 
    {
        throw new Error((err as Error).message)
    }
}