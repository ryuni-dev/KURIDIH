import VectorType from "@/types/VectorType";
import Vector from "./VectorObject";

class VectorCircle extends Vector {
    constructor(props: VectorType) {
        super(props);
    }

    draw() {
        const { x: currX, y: currY } = this.props.currentPoint
        const ctx  = this.props.ctx
        ctx.lineWidth = 3;

        if(this.props.isDraw){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        let rad = Math.abs(currX- this.props.startPoint.x);
        ctx.strokeStyle = this.props.strokeColor;
        ctx.fillStyle = this.props.fillColor;

        ctx.beginPath()
        ctx.arc(this.props.startPoint.x, this.props.startPoint.y, rad, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
    }
    
        move() {
            const { x: currX, y: currY } = this.props.currentPoint
            const ctx  = this.props.ctx
            ctx.lineWidth = 3;
    
            if(this.props.isDraw){
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            }
    
            let rad = Math.abs(currX- this.props.startPoint.x);
            ctx.strokeStyle = this.props.strokeColor;
            ctx.fillStyle = this.props.fillColor;
    
            ctx.beginPath()
            ctx.arc(this.props.startPoint.x, this.props.startPoint.y, rad, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.closePath()
            
    }
};

export default VectorCircle;