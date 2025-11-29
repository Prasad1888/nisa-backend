import axios from "axios";
import { validateFormFields } from "../utils/validateFields.js";

export const submitForm = async (req, res) => {
    try {
        const { Name, Email, Number, Address } = req.body;

        // Validate user inputs
        const validationError = validateFormFields({ Name, Email, Number, Address });
        if (validationError) {
            return res.status(400).json({ success: false, message: validationError });
        }

        // Send to SheetDB
        const sheetResponse = await axios.post(process.env.SHEETDB_URL, {
            data: [
                {
                    Name,
                    Email,
                    Number,
                    Address,
                    Timestamp: new Date().toLocaleString("en-IN"),
                },
            ],
        });

        return res.status(200).json({
            success: true,
            message: "Form submitted successfully!",
            data: sheetResponse.data,
        });
    } catch (error) {
        console.error("SheetDB Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};
