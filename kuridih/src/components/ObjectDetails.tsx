import VectorObject from "@/models/vector/VectorObject";
import VectorType from "@/types/VectorType";
import InfoBox from "./InfoBox";

interface ObjectDetailsProps {
    mode: string,
    // selectedObjects: VectorType[];
}

const ObjectDetails: React.FC<ObjectDetailsProps> = ({ 
    mode,
    // selectedObjects 
}) => {
    // if (!selectedObjects) {
    //     return <div>No object selected.</div>;
    // }
    
    return (
        <div className="flex flex-col">
            <h2
                className='text-white'
            >
            지금 선택된 기능은 {mode} 이에요!
            </h2>
            <InfoBox></InfoBox>
            {/* <h3>{selectedObjects}</h3> */}
            {/* 나머지 상세 정보 표시 */}
        </div>
    );
}

export default ObjectDetails;