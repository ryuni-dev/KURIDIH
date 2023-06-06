import VectorObject from "@/models/vector/VectorObject";
import Canvas from "./Canvas";
import LeftSidebar from "./LeftSideBar";

interface VectorEditorProps {
    objects: VectorObject[];
    // createObject: (type: string) => void;
    // selectObject: (obj: VectorObject) => void;
    // 나머지 컨트롤러 메서드 타입 정의
}

const VectorEditor: React.FC<VectorEditorProps> = ({
    objects,
    // createObject,
    // selectObject
}) => {
    return (
        <div className="flex flex-row w-screen h-screen">
        {/* <div className="w-1/4"> */}
            <LeftSidebar/>
        {/* </div> */}
        {/* <div className="w-1/2"> */}
            <Canvas objects={objects} width={800} height={600}/>
        {/* </div> */}
        {/* <div className="w-1/4"> */}
          {/* <ObjectDetails selectedObject={selectedObject} /> */}
        {/* </div> */}
    </div>
    )
}

export default VectorEditor;