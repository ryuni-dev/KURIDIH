'use client';

import LeftSidebar from "@/components/editor/LeftSideBar";
import VectorEditor from "@/components/editor/VectorEditor";

import VectorObject from "@/models/vector/VectorObject"
import { useState } from "react"

import { useDraw } from '@/hooks/useDraw'
import { Draw, Point } from '@/types/point';
import { ChromePicker } from 'react-color'
import VectorLine from "@/models/vector/VectorBrush";
import VectorType from "@/types/VectorType";



export default function Editor() {
    const [color, setColor] = useState<string>('#000')
    const [vector, setVector] = useState<VectorType>();
    // const vectorLine = new VectorLine()
    const { canvasRef, onMouseDown, clear, setMode } = useDraw(color)

    // const [objects, setObjects] = useState<VectorObject[]>([]);
    // const model = new CanvasModel();

    function drawLine({ startPoint, prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint
        const lineColor = color
        const lineWidth = 5

        let cur = prevPoint ?? currentPoint
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        ctx.moveTo(cur.x, cur.y)
        ctx.lineTo(currX, currY)
        ctx.stroke()

        ctx.fillStyle = lineColor
        ctx.beginPath()
        ctx.arc(cur.x, cur.y, 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    function drawRect({ startPoint, ctx, currentPoint, prevPoint, isDraw }: Draw) {
        const { x: currX, y: currY } = currentPoint
        const lineColor = color
        const lineWidth = 5
        if(isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        let cur = prevPoint ?? currentPoint
        const width = currX - startPoint.x; // 사각형의 가로 길이 계산
        const height = currY - startPoint.y; // 사각형의 세로 길이 계산
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        // ctx.moveTo(startPoint.x, startPoint.y)
        // ctx.lineTo(currX, currY)

        
        ctx.rect(startPoint.x, startPoint.y, width, height);
        ctx.stroke()
        

        // ctx.fillStyle = lineColor
        // ctx.beginPath()
        // ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
        // ctx.fill()
    }

    function drawEllipse({ startPoint, prevPoint, currentPoint, ctx, isDraw }: Draw) {
        const { x: currX, y: currY } = currentPoint
        const lineColor = color
        const lineWidth = 5
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        let cur = prevPoint ?? currentPoint
        let rad = Math.abs(currX- startPoint.x)
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        // ctx.moveTo(startPoint.x, startPoint.y)
        // ctx.lineTo(currX, currY)
        ctx.beginPath()
        ctx.arc(startPoint.x, startPoint.y, rad, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        // ctx.fillStyle = lineColor
        // ctx.beginPath()
        // ctx.fill()
    }

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
        <div className='w-screen h-screen bg-white flex justify-center items-center'>
            <div className='flex flex-col gap-10 pr-10'>
                <button 
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
                </button>
                <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
            </div>
            <canvas
                ref={canvasRef}
                onMouseDown={onMouseDown}
                width={650}
                height={650}
                className='border border-black rounded-md'
            />
        </div>
        </>
    )
}