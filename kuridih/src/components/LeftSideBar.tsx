import { ChromePicker } from "react-color";

interface Props {
    setMode: React.Dispatch<React.SetStateAction<string>>;
    clear: () => void;
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSidebar = ({ setMode, clear, color, setColor }: Props) => {

    return (
        <div className="max-w-[20rem] flex flex-col shadow-sm bg-[#2b2b2b]">
            <button 
                onClick={()=>{setMode(() => 'select')}}
                type="button" 
                className="py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            SELECT
            </button>
            {/* <button 
                onClick={()=>{setMode(() => 'brush')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            BRUSH
            </button> */}
            <button 
                onClick={()=>{setMode(() => 'line')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            LINE
            </button>
            <button 
                onClick={()=>{setMode(() => 'rect')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            RECTANGLE
            </button>
            <button
                onClick={()=>{setMode(() => 'circle')}} 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            CIRCLE
            </button>
            <button
                onClick={clear} 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            CLEAR
            </button>
            <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        </div>
    )
}

export default LeftSidebar;