'use client';

import { useState } from "react"

import { useDraw } from '@/hooks/useDraw'
// import { Draw, Point } from '@/types/point';
import { ChromePicker } from 'react-color'

import VectorType from "@/types/VectorType";
import LeftSidebar from "@/components/LeftSideBar";
import ObjectDetails from "@/components/ObjectDetails";



export default function Editor() {
    const [color, setColor] = useState<string>('#000000')
    const [vector, setVector] = useState<VectorType>();
    const { canvasRef, onMouseDown, clear, mode, setMode, selectedObject } = useDraw(color)

    // const addObject = (obj: VectorObject) => {
    //     model.addObject(obj);
    //     setObjects(model.getAllObjects());
    // };
    
    // //   const selectObject = (obj: VectorObject) => {
    // //     // 로직: 선택된 VectorObject 업데이트
    // //   };
    // const removeObject = (obj: VectorObject) => {
    //     model.removeObject(obj);
    //     setObjects(model.getAllObjects());
    // };

    return (
        <>        
        <div className='bg-[#2b2b2b] flex h-screen'>
            <div className='flex flex-col'>
                <LeftSidebar 
                    setMode={setMode} 
                    clear={clear}
                    color={color} 
                    setColor={setColor}
                />
                {/* <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={()=>{setMode(() => 'select')}}
                >
                Select
                </button>
                <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={()=>{setMode(() => 'brush')}}
                >
                Brush
                </button>
                <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={()=>{setMode(() => 'line')}}
                >
                Line
                </button>
                <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={()=>{setMode(() => 'rect')}}
                >
                Rectangle
                </button>
                <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={()=>{setMode(() => 'circle')}}
                >
                Circle
                </button>
                <button 
                    type='button' 
                    className='p-2 rounded-md border border-black' 
                    onClick={clear}
                >
                Clear 
                </button> */}
                {/* <ChromePicker color={color} onChange={(e) => setColor(e.hex)} /> */}
            </div>
            <div>

            <canvas
                ref={canvasRef}
                onMouseDown={onMouseDown}
                width={850}
                height={650}
                className='bg-white border border-black rounded-md'
                />
            </div>
            <ObjectDetails mode={mode}/>
        {/* <div className='w-screen bg-white flex justify-center items-center'>
            console.log(selectedObject)
        </div> */}
        </div>
        </>
    )
}