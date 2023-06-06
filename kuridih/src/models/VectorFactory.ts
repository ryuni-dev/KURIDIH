import VectorType from "@/types/VectorType";
import VectorRect from "./vector/VectorRect";
import VectorCircle from "./vector/VectorCircle";
import VectorBrush from "./vector/VectorBrush";
import VectorLine from "./vector/VectorLine";

class VectorFactory {

    create(object: VectorType) {
        let mode = object.mode;
        const brush = new VectorBrush(object);
        const line = new VectorLine(object);
        const rect = new VectorRect(object);
        const circle = new VectorCircle(object);

        if (object.isSelect){

        }
        else{
            if (mode === 'brush') {
                brush.draw()
            }
            else if (mode === 'line'){
                line.draw();
            }
            else if (mode === 'rect'){
                rect.draw()
            }
            else if (mode === 'circle') {
                circle.draw()
            }

        }
    }
}

export default VectorFactory;