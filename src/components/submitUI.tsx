export const SubmitUI = (props: {setStatus:React.Dispatch<React.SetStateAction<string>>}) => (
    <div className="max-w-xs mx-auto">
        <div className="space-y-4">
            <img src="/src/images/icon-complete.svg" 
                alt="Icon-complete"
                className="mx-auto" 
            />
            <h1 className="uppercase text-xl text-center dark:text-white">Thank You!</h1>
            <p className="text-center text-neutral-two text-sm dark:text-slate-300">
                We've added your card details!
            </p>
        </div>
        <button type="button" 
            className="w-full py-2 mt-6 rounded-md bg-neutral-three 
            text-white text-center
            hover:opacity-80"
            onClick={() => props.setStatus("typing")}>
            Continue
        </button>
    </div>
)