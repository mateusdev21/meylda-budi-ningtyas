export type GalleryItem = {
    title: string;
    category: string;
    image: string;
    height: string;
};

export const galleryItems: GalleryItem[] = [
    {
        title: "Panna Cotta",
        category: "Italian Dessert",
        image: "/dishes/panna-cotta.jpeg",
        height: "h-[420px]",
    },
    {
        title: "Fish & Chips",
        category: "Western Cuisine",
        image: "/dishes/fishnchips.jpeg",
        height: "h-[320px]",
    },
];