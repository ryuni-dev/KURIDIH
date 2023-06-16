import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";
import { Point } from "@/types/point";

class VectorCircle extends Vector {
    draw(object: VectorType) {
        const { x: currX, y: currY } = object.currentPoint
        const ctx  = object.ctx
        ctx.lineWidth = 3;

        if(object.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        let rad = Math.abs(currX- object.startPoint.x);
        ctx.strokeStyle = object.strokeColor;
        ctx.fillStyle = object.fillColor;

        ctx.beginPath();
        ctx.arc(object.startPoint.x, object.startPoint.y, rad, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }
    
    isSelect(object: VectorType, point: Point) {
        const rad = Math.abs(object.currentPoint.x - object.startPoint.x);
        const distance = Math.sqrt(
            Math.pow(point.x - object.startPoint.x, 2) + Math.pow(point.y - object.startPoint.y, 2)
        );
        
        return distance <= rad;
    }
};

export default VectorCircle;