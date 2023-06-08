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
                Select
            </button>
            <button 
                onClick={()=>{setMode(() => 'brush')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Brush
            </button>
            <button 
                onClick={()=>{setMode(() => 'line')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Line
            </button>
            <button 
                onClick={()=>{setMode(() => 'rect')}}
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Rectangle
            </button>
            <button
                onClick={()=>{setMode(() => 'circle')}} 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Circle
            </button>
            <button
                onClick={clear} 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Clear
            </button>
            <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />

            {/* <button 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Text
            </button>
            <button 
                type="button" 
                className="-mt-px py-3 px-4 inline-flex justify-center items-center gap-2 font-medium text-white align-middle hover:bg-gray-50 hover:text-black  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
            >
            Image
            </button> */}
            {/* <div className="bg-[#2b2b2b] px-4 py-[100%]">
            </div> */}
            </div>
    //     <div className="flex flex-col justify-start items-center h-screen w-40 bg-[#2b2b2b]">
    //         <div className="flex flex-col flex-grow">
    //             <button className="flex-grow h-5 my-2 text-white">Select</button>
    //             <button className="flex-grow h-5 my-2 text-white">Line</button>
    //             <button className="flex-grow h-5 my-2 text-white">Rectangle</button>
    //             <button className="flex-grow h-5 my-2 text-white">Ellipse</button>
    //             <button className="flex-grow h-5 my-2 text-white">Text</button>
    //             <button className="flex-grow h-5 my-2 text-white">Image</button>
    //         </div>
    //   </div>
    )
}

export default LeftSidebar;

{/* <div className="w-[163px] h-[595px] bg-[#2b2b2b] border-t-0 border-r-2 border-b-0 border-l-0 border-transparent" />; */}
