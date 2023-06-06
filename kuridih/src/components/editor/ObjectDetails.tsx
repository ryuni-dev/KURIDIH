import VectorObject from "@/models/vector/VectorObject";

interface ObjectDetailsProps {
    selectedObject: VectorObject | null;
}

const ObjectDetails: React.FC<ObjectDetailsProps> = ({ selectedObject }) => {
    if (!selectedObject) {
        return <div>No object selected.</div>;
    }
    
    return (
        <div>
            <h3>{selectedObject.type}</h3>
            {/* 나머지 상세 정보 표시 */}
        </div>
    );
}

export default ObjectDetails;