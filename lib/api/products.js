let data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 10,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh 4",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 20,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh 2",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 35,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dkioxcw3q/image/upload/v1731421037/lmon-800_rea0zd.webp",
    title: "Lifebuoy Soap Bar Lemon Fresh 3",
    description:
      "Experience a refreshing shower every day with LIFEBUOY Lemon Fresh Soap Bar. It rejuvenates your senses keeping you fresh throughout the day. Formulated with an efficient cleansing property of lemons, this soap bar is packed with natural antibacterial properties. This disinfectant soap protects your skin from disease-causing bacteria and ensures better germ protection for you and your family. The fragrance will leave you thoroughly fresh.",
    unitPrice: 60,
    currency: "BDT",
    currencySign: "৳",
    unit: "gm",
    unitSize: "100",
  },
];

// Get all products list api
const list = () => {
  try {
    return {
      message: "Products Loaded Success",
      data: data,
      isSuccess: true,
    };
  } catch (error) {
    return {
      message: "Products Loaded failed",
      data: [],
      isSuccess: false,
    };
  }
};

// product details api
export const details = (id) => {
  try {
    const result = data.find((item) => item.id == id);

    return {
      message: "Product details Loaded Success",
      data: result,
      isSuccess: true,
    };
  } catch (error) {
    return {
      message: "Product details Loaded failed",
      data: null,
      isSuccess: false,
    };
  }
};

// products filter api
export const filter = () => {
  try {
    return {
      message: "Products Loaded Success",
      data: [],
      isSuccess: true,
    };
  } catch (error) {
    return {
      message: "Products Loaded failed",
      data: [],
      isSuccess: false,
    };
  }
};

export default list;
