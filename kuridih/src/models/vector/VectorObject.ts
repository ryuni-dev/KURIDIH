import VectorType from "@/types/VectorType";
import { Point } from "@/types/point";

abstract class Vector {
    abstract draw(object: VectorType): void;
    abstract isSelect(object: VectorType, point: Point): boolean;

}

export default Vector;