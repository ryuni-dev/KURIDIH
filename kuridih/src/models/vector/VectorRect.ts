import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";
import { Point } from "@/types/point";

class VectorRect extends Vector {
    draw(object: VectorType) {
        const { x: currX, y: currY } = object.currentPoint;
        const ctx  = object.ctx;
        const lineWidth = 3;
        if(object.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        const width = currX - object.startPoint.x; 
        const height = currY - object.startPoint.y; 

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = object.strokeColor;
        ctx.fillStyle = object.fillColor;
        
        ctx.beginPath();
        ctx.rect(object.startPoint.x, object.startPoint.y, width, height);
        ctx.stroke();
        ctx.fill();
    }
    
    isSelect(object: VectorType, point: Point) {
        const left = Math.min(object.startPoint.x, object.currentPoint.x);
        const right = Math.max(object.startPoint.x, object.currentPoint.x);
        const top = Math.min(object.startPoint.y, object.currentPoint.y);
        const bottom = Math.max(object.startPoint.y, object.currentPoint.y);

        return (
            point.x >= left && point.x <= right &&
            point.y >= top && point.y <= bottom
        );
    }
}

export default VectorRect;