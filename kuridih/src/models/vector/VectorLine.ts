import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";
import { Point } from "@/types/point";

class VectorLine extends Vector {
    draw(object: VectorType) {
        const { x: currX, y: currY } = object.currentPoint;
        const ctx  = object.ctx;
        const lineWidth = 3;
        if(object.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = object.strokeColor;
        ctx.fillStyle = object.fillColor;
        
        ctx.beginPath()
        ctx.moveTo(object.startPoint.x, object.startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke()
    }

    isSelect(object: VectorType, point: Point) {
        const minX = Math.min(object.startPoint.x, object.currentPoint.x);
        const maxX = Math.max(object.startPoint.x, object.currentPoint.x);
        const minY = Math.min(object.startPoint.y, object.currentPoint.y);
        const maxY = Math.max(object.startPoint.y, object.currentPoint.y);
        
        return (
            point.x >= minX && point.x <= maxX &&
            point.y >= minY && point.y <= maxY
        );
    }
};

export default VectorLine;