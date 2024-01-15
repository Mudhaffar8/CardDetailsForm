import { BaseDataInput } from "../utils/interfaces";

export const formData : {[index: string]: BaseDataInput} = {
    cardHolderName : {
        id: "cardHolderName",
        label: "Cardholder Name",
        placeholder: "e.g. Jane Appleseed",
        errs : {
        required: "Field cannot be empty",
        pattern : {
            value:/^[a-zA-Z]{2,} [a-zA-Z]{2,}$/,
            message: "Incorrect Format"
        }
        }
    },
    cardNumber : {
        id: "cardNumber",
        label: "Card Number",
        placeholder: "e.g. 1234 5678 9123 0000",
        errs : {
        required: "Field cannot be empty",
        pattern : {
            value:/^\d{4}-\d{4}-\d{4}-\d{4}$|^\d{4} \d{4} \d{4} \d{4}$/,
            message: "Wrong Format, Numbers Only"
        }
        }
    },
    expiryMonth : {
        id: "expiryMonth",
        label: "Exp. Date",
        placeholder: "MM",
        errs : {
        required: "Can't be blank",
        min: {
            value: 0,
            message: "Value must be within 0-12"
        },
        max: {
            value: 12,
            message: "Value must be within 0-12"
        },
        pattern : {
            value:/^\d{2}$/,
            message: "Format must be in MM and contain only numbers"
        }
        }
    },
    expiryYear : {
        id: "expiryYear",
        label: "(MM/YY)",
        placeholder: "YY",
        errs : {
        required: "Can't be blank",
        min: {
            value: 0,
            message: "Value must be within 0-12"
        },
        max: {
            value: 99,
            message: "Value must be within 0-12"
        },
        pattern : {
            value:/^\d{2}$/,
            message: "Format must be in YY and contain only numberes"
        }
        }
    },
    cvc : {
        id: "cvc",
        label: "cvc",
        placeholder: "e.g. 123",
        errs : {
        required: "Can't be blank",
        pattern : {
            value:/^\d{3}$/,
            message: "Format must be in YY and contain only numberes"
        }
        }
    },
}