export const validateFormFields = ({ Name, Email, Number, Address }) => {
    if (!Name || !Email || !Number || !Address) {
        return "All fields are required.";
    }

    if (!/^[a-zA-Z ]{2,30}$/.test(Name)) {
        return "Invalid name format.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        return "Invalid email address.";
    }

    if (!/^\d{10}$/.test(Number)) {
        return "Phone number must be 10 digits.";
    }

    return null; // No errors
};