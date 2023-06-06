import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";

class VectorRect extends Vector {
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

        const width = currX - this.props.startPoint.x; 
        const height = currY - this.props.startPoint.y; 

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = this.props.strokeColor;
        ctx.fillStyle = this.props.fillColor;
        
        ctx.beginPath()
        ctx.rect(this.props.startPoint.x, this.props.startPoint.y, width, height);
        ctx.stroke()
    }
    
    move() {
        const { x: currX, y: currY } = this.props.currentPoint;
        const ctx  = this.props.ctx;
        const lineWidth = 5;
        if(this.props.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        const width = currX - this.props.startPoint.x; 
        const height = currY - this.props.startPoint.y; 
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = this.props.strokeColor
        ctx.rect(this.props.startPoint.x, this.props.startPoint.y, width, height);
        ctx.stroke()
    }
}

export default VectorRect;