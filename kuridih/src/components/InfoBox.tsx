interface Props {
    mode: string;
    info: string;
}

const InfoBox = ({mode, info}: Props) => {
    return (
            <div>
                <label
                htmlFor="disabled-input"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                {mode}
                </label>
                <input 
                    type="text" 
                    id="disabled-input" 
                    aria-label="disabled input" 
                    className="my-3 text-sm rounded-lg block w-full p-5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500" 
                    value={info} 
                    disabled 
                    readOnly
                />
    </div>
    );
}

export default InfoBox;