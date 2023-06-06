import { Point } from "./point";

interface VectorType {
    mode: string;
    ctx: CanvasRenderingContext2D, 
    startPoint: Point, 
    currentPoint: Point, 
    prevPoint: Point, 
    
    fillColor: string;
    strokeColor: string;
    lineWidth: number;
    zIndex: number;
    
    isDraw: boolean,
    isSelect: boolean;
}

export default VectorType;