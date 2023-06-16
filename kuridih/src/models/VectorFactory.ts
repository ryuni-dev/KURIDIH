import VectorType from "@/types/VectorType";
import VectorRect from "./vector/VectorRect";
import VectorCircle from "./vector/VectorCircle";
import VectorBrush from "./vector/VectorBrush";
import VectorLine from "./vector/VectorLine";
import { Point } from "@/types/point";

class VectorFactory {
    brush: VectorBrush;
    line: VectorLine;
    rect: VectorRect;
    circle: VectorCircle;

    constructor() {
        this.brush = new VectorBrush();
        this.line = new VectorLine();
        this.rect = new VectorRect();
        this.circle = new VectorCircle();
    }

    create(object: VectorType) {
        let mode = object.mode;

        if (mode === 'brush') {
            this.brush.draw(object)
        }
        else if (mode === 'line'){
            this.line.draw(object);
        }
        else if (mode === 'rect'){
            this.rect.draw(object)
        }
        else if (mode === 'circle') {
            this.circle.draw(object)
        }
    }

    checkSelect(object: VectorType, point: Point): boolean {
        let mode = object.mode;

        if (mode === 'brush') {
            return this.brush.isSelect(object, point);
        }
        else if (mode === 'line'){
            return this.line.isSelect(object, point);
        }
        else if (mode === 'rect'){
            return this.rect.isSelect(object, point);
        }
        else if (mode === 'circle') {
            return this.circle.isSelect(object, point);
        }
        else{
            return false;
        }
    }
}

export default VectorFactory;