// Validate email using regex
export const validEmail = (email) => {
    // Regular expression to validate email format
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Get initials from full name
export const getInitials = (name) => {
    if (!name) return "";

    // Split name by spaces, filter out empty parts, and take the first letter of each word
    const initials = name
        .split(" ")
        .filter(Boolean) // filters out any empty strings caused by multiple spaces
        .map(word => word[0].toUpperCase())
        .join("");

    return initials;
};
