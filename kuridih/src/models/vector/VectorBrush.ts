import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";

class VectorBrush extends Vector {
    constructor(props: VectorType) {
        super(props);
    }
    
    draw() {
        const { x: currX, y: currY } = this.props.currentPoint;
        const ctx  = this.props.ctx;
        const lineWidth = 3;

        let cur = this.props.prevPoint ?? this.props.currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = this.props.strokeColor;
        ctx.moveTo(cur.x, cur.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = this.props.strokeColor;
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }

    move() {

    }
};

export default VectorBrush;