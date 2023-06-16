import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";
import { Point } from "@/types/point";

class VectorBrush extends Vector {    
    draw(object: VectorType) {
        const { x: currX, y: currY } = object.currentPoint;
        const ctx  = object.ctx;
        const lineWidth = 3;

        let cur = object.prevPoint ?? object.currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = object.strokeColor;
        ctx.moveTo(cur.x, cur.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = object.strokeColor;
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }
    isSelect(object: VectorType, point: Point) {
        return false;
    }
};

export default VectorBrush;