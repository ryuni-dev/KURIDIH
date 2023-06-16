import { Point } from "@/types/point";

interface ObjectDetailsProps {
    mode: string,
    startPoint: Point | undefined,
    endPoint: Point | undefined,
    color: string | undefined,
    zOrder: number | undefined,
}

const ObjectDetails: React.FC<ObjectDetailsProps> = ({ 
    mode,
    startPoint,
    endPoint,
    color,
    zOrder,
}) => {
    
    return (
            <form className="w-full max-w-lg px-4 py-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
                        MODE
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-password" 
                        placeholder="******************"
                        value={mode}
                        disabled
                        readOnly
                    />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Start : x
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-last-name" 
                            type="number"
                            value={startPoint? startPoint.x : 0}
                            placeholder="x"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Start : y
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-last-name" 
                        type="number" 
                        value={startPoint ? startPoint.y : 0}
                        placeholder="y"/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            End : x
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-last-name" 
                            type="number"
                            value={endPoint ? endPoint.x : 0}
                            placeholder="x"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        End : y
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-last-name" 
                        type="number" 
                        value={endPoint ? endPoint.y : 0}
                        placeholder="y"/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            z-order
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-last-name" 
                            type="number"
                            value={zOrder ? zOrder : 0}
                            placeholder="Size"/>
                    </div>
                    
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Color
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-last-name" 
                        type="text" 
                        value={color ? color : ""}
                        placeholder="Color"/>
                    </div>
                </div>
            </form>
    );
}

export default ObjectDetails;