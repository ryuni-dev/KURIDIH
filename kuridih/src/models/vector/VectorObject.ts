import VectorType from "@/types/VectorType";

abstract class Vector {
    props: VectorType;

    constructor(props: VectorType) {
        this.props = props
    }

    abstract draw(): void;
    abstract move(): void;

}

export default Vector;