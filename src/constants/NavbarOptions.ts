type NavbarOptionsType = {
    title: string;
    link: string;
    subOptions?: NavbarOptionsType[]
}

export const NavbarOptions: NavbarOptionsType[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Request Tutorial",
        link: "",
    },
    {
        title: "Edit Tutorial",
        link: "",
        subOptions: [
            {
                title: "Add Tutorial",
                link: "",
            },
            {
                title: "Update Tutorial",
                link: "",
            },
            {
                title: "Delete Tutorial",
                link: "",
            },
            {
                title: "View Tutorial History",
                link: "",
            },
        ],
    },
    {
        title: "View Packets",
        link: "",
    },
    {
        title: "Message Board",
        link: "",
    },
    {
        title: "Admin",
        link: "",
    },
]
