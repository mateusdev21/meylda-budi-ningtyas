export type SkillIcon =
    | "chef-hat"
    | "shield-check"
    | "utensils-crossed"
    | "soup"
    | "package-check"
    | "users"
    | "cooking-pot"
    | "timer-reset";

export type Skill = {
    icon: SkillIcon;
    title: string;
    description: string;
};

export const skills: Skill[] = [
    {
        icon: "chef-hat",
        title: "Food Preparation",
        description:
            "Preparing ingredients efficiently while maintaining consistency and quality.",
    },
    {
        icon: "shield-check",
        title: "Kitchen Hygiene",
        description:
            "Maintaining cleanliness and food safety standards in kitchen environments.",
    },
    {
        icon: "utensils-crossed",
        title: "Kitchen Assistance",
        description:
            "Supporting chefs and kitchen operations during busy service hours.",
    },
    {
        icon: "soup",
        title: "Basic Plating",
        description:
            "Helping prepare and present dishes neatly before serving.",
    },
    {
        icon: "package-check",
        title: "Inventory Support",
        description:
            "Assisting stock organization and ingredient availability checks.",
    },
    {
        icon: "users",
        title: "Team Coordination",
        description:
            "Working effectively with kitchen staff in fast-paced environments.",
    },
    {
        icon: "cooking-pot",
        title: "Ingredient Handling",
        description:
            "Understanding ingredient preparation and proper kitchen workflow.",
    },
    {
        icon: "timer-reset",
        title: "Time Management",
        description:
            "Managing preparation timing efficiently during operational hours.",
    },
];