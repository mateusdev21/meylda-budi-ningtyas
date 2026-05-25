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
    {
        title: "Mix Green Salad",
        category: "Appetizer",
        image: "/dishes/mix-green-salad.jpeg",
        height: "h-[320px]",
    },
    {
        title: "Ayam Bakar",
        category: "Indonesian Cuisine",
        image: "/dishes/ayam-bakar.jpeg",
        height: "h-[420px]",
    },   
    {
        title: "Sliced Fruit Platter",
        category: "Dessert",
        image: "/dishes/slice-fruit.jpeg",
        height: "h-[240px]",
    }, 
    {
        title: "Club Sandwich with Herb Mayonnaise",
        category: "Sandwich",
        image: "/dishes/club-sandwich.jpeg",
        height: "h-[500px]",
    }, 
];