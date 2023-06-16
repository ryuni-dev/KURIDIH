'use client';

import { useState } from "react"
import { useDraw } from '@/hooks/useDraw'
import LeftSidebar from "@/components/LeftSideBar";
import ObjectDetails from "@/components/ObjectDetails";


export default function Editor() {
    const [color, setColor] = useState<string>('#000000')
    const { canvasRef, onMouseDown, clear, mode, setMode, infoObject } = useDraw(color)

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
                <ObjectDetails 
                    mode={mode}
                    startPoint={infoObject?.startPoint}
                    endPoint={infoObject?.currentPoint}
                    zOrder={infoObject?.id}
                    color={infoObject?.fillColor}
                />
            </div>
        </>
    )
}