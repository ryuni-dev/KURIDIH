import { Point } from "./point";

interface VectorType {
    id: number;
    mode: string;
    ctx: CanvasRenderingContext2D;
    startPoint: Point;
    currentPoint: Point;
    prevPoint: Point;
    
    fillColor: string;
    strokeColor: string;
    lineWidth: number;
    zOrder: number;
    
    isDraw: boolean;
}

export default VectorType;