import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";

class VectorLine extends Vector {
    constructor(props: VectorType) {
        super(props);
    }
    
    draw() {
        const { x: currX, y: currY } = this.props.currentPoint;
        const ctx  = this.props.ctx;
        const lineWidth = 3;
        if(this.props.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = this.props.strokeColor;
        ctx.fillStyle = this.props.fillColor;
        
        ctx.beginPath()
        ctx.moveTo(this.props.startPoint.x, this.props.startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke()
    }

    move() {
        const { x: currX, y: currY } = this.props.currentPoint;
        const ctx  = this.props.ctx;
        const lineWidth = 3;
        if(this.props.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = this.props.strokeColor;
        ctx.fillStyle = this.props.fillColor;
        
        ctx.beginPath()
        ctx.moveTo(this.props.startPoint.x, this.props.startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke()
    }
};

export default VectorLine;