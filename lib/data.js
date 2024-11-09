export const componentsList = [
    {
        id: 1,
        name: "Hero Section",
        slug: "hero",
        description: "Home page hero section",
        attribute: [
            {
                name: "title",
                type: "text",
                placeholder: "hero title",
                isRequired: true,
                label: "Tile",
            },
            {
                name: "sub_title",
                type: "text",
                placeholder: "hero sub title",
                isRequired: true,
                label: "Sub Title",
            },
            {
                name: "image",
                type: "file",
                placeholder: "hero image",
                isRequired: false,
                label: "Image",
            },
        ],
    },
    {
        id: 34,
        name: "About",
        slug: "about",
        description: "about page hero section",
        attribute: [
            {
                name: "title",
                type: "text",
                placeholder: "hero title",
                isRequired: true,
                label: "Title",
            },
            {
                name: "description",
                type: "textarea",
                placeholder: "details",
                isRequired: true,
                label: "Description",
            },
        ],
    },
    {
        id: 6,
        name: "Services",
        slug: "about",
        description: "about page hero section",
        attribute: [
            {
                name: "title",
                type: "text",
                placeholder: "hero title",
                isRequired: true,
                label: "Title",
            },
            {
                name: "description",
                type: "textarea",
                placeholder: "details",
                isRequired: true,
                label: "Description",
            },
            {
                name: "services",
                type: "component",
                componentId: 10,
                repeatable: true,
                
            },
        ],
    },
    {
        id: 10,
        name: "Service",
        slug: "service",
        description: "service page hero section",
        attribute: [
            {
                name: "title",
                type: "text",
                placeholder: "hero title",
                isRequired: true,
                label: "Title",
            },
            {
                name: "description",
                type: "textarea",
                placeholder: "details",
                isRequired: true,
                label: "Description",
            },
        ],
    },
];

export const getFormSchema = (id) => {
    return componentsList.filter((item) => item.id == id)[0];
};
