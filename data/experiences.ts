export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    responsibilities: string[];
};

export const experiences: Experience[] = [
    {
        company: "Swasana by Temata Restaurant",
        role: "Cook Helper (Cold Kitchen) - Daily Worker",
        period: "Feb 2025",
        description:
            "Supporting kitchen operations in a fast-paced restaurant environment while maintaining food quality and hygiene standards.",
        responsibilities: [
            "Prepared ingredients before operational hours",
            "Maintained kitchen cleanliness and sanitation",
            "Assisted chefs during busy service periods",
            "Organized kitchen equipment and ingredients",
        ],
    },
    {
        company: "Grand Mercure Jakarta Kemayoran Hotel",
        role: "Cook Helper (Cold Kitchen) - Internship",
        period: "Jan 2016 - Jul 2016",
        description:
            "Supporting kitchen operations in a fast-paced restaurant environment while maintaining food quality and hygiene standards.",
        responsibilities: [
            "Prepare and serve a variety of cold dishes",
            "Arrange cold dishes with artistic precision, maintaining high presentation standards that are in keeping with the hotel's style and guest expectations",
            "Oversee the selection, storage and organization of fresh ingredients",
            "Design and organize cold food displays for buffets, banquets and special events",
            "Work closely with other kitchen departments, such as pastry, butcher and hot kitchen, to coordinate the timing and delivery of cold dishes, contributing to a smooth dining experience for guests",
        ],
    },
    {
        company: "The Akmani Hotel Jakarta",
        role: "Cook Helper (Hot Kitchen) - Internship",
        period: "Jan 2013 - Jul 2013",
        description:
            "Learned professional kitchen workflows and collaborated with culinary teams in daily operations.",
        responsibilities: [
            "Assist in preparing ingredients such as chopping vegetables, marinating meats, and assembling dishes according to standardized recipes",
            "Cook and present dishes as per the restaurant’s menu and quality standards",
            "Handle diverse cuisine styles, often including breakfast, brunch, lunch, supper, dinner, and snacks",
            "Adhere to food safety regulations (HACCP or local health standards)",
            "Properly clean and sanitize kitchen equipment and workstations before, during, and after shifts",
            "Provide support to other kitchen sections when needed (e.g., pastry, grill, or prep stations)",
            "Assist in managing multiple orders during peak service hours",
        ],
    },
];