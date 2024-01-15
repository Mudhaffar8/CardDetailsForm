import { UseFormWatch, FieldValues } from "react-hook-form";

export const Cards = (props: {watch : UseFormWatch<FieldValues>}) => (
    <div className="absolute h-[250px] lg:h-[335px] w-[350px] 
            left-1/2 top-1/2 -translate-y-[37%] -translate-x-1/2
            lg:left-full lg:-translate-y-1/2">
        <div className="absolute right-0 max-lg:top-0 lg:bottom-0">
            <img src="/src/images/bg-card-back.png" 
                alt="card-back" 
                width="290"
            />
            <small className="text-white absolute right-[12%] top-[44%] text-xs">
                {props.watch("cvc") || "000"}
            </small>
        </div>
        <div className="absolute max-lg:bottom-0 left-0 lg:top-0">
            <img src="/src/images/bg-card-front.png" 
                alt="card-front" 
                width="290"
            />
            <img src="/src/images/card-logo.svg" 
                alt="card-logo" 
                className="absolute left-4 top-4"
                width="50"
            />
            <small className="text-white absolute left-[8%] top-[48%] text-lg">
                {props.watch("cardNumber") || "0000 0000 0000 0000"}
            </small>
            <small className="text-white absolute left-[8%] bottom-[14%] text-[0.65rem]">
                {props.watch("cardHolderName") || "Jane Appleseed"}
            </small>
            <small className="text-white absolute right-[8%] bottom-[14%] text-[0.65rem]">
                {props.watch("expiryMonth") || "00"}/{props.watch("expiryYear") || "00"}
            </small>
        </div>
    </div>
)