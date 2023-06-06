
const Landing = () => {
    return (
        <>
            <div className="bg-white flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-8xl font-bold mb-4">KU x MIRIDIH</h1>
                    <h2 className="text-4xl font-bold mb-4">Vector Graphic Editor</h2>
                    <p className="text-gray-500 text-lg mb-4">고려대학교 COSE457 Term Project입니다.</p>
                    {/* <p className="text-gray-500 text-lg mb-4">본 사이트를 통해서 Vector Graphic Editor를 제작할 때 어떤 디자인 패턴이 적용되는지 알 수 있습니다.</p> */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Start Editing</button>
                </div>
            </div>
        </>
    )
}

export default Landing;