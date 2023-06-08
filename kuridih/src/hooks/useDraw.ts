import VectorFactory from '@/models/VectorFactory';
import VectorType from '@/types/VectorType';
import { Draw, Point } from '@/types/point';
import { useEffect, useRef, useState } from 'react';

export const useDraw = (color:string) => {
    const [mouseDown, setMouseDown] = useState(false);
    const [startPoint, setStartPoint] = useState<Point | null>(null);
    const [objects, setObjects] = useState<VectorType[]>([]);
    const [mode, setMode] = useState<string>('select'); 
    const [obj, setObj] = useState<VectorType>();
    const [selectedObjects, setSelectedObjects] = useState<number[]>([]); // 다중 선택한 도형들의 인덱스 배열
    const [selectedObject, setSelectedObject] = useState<VectorType>(); // 단일 선택한 도형

    //@ts-ignore
    const vectors = new VectorFactory()

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<Point | null>(null);


    const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setMouseDown(true);
        const startPoint = computePointInCanvas(e.nativeEvent);

        if (mode === 'select') {
            //@ts-ignore
            const selectedIdx = findSelectedObjectIndex(startPoint);
            if (selectedIdx !== null) {
              // 이미 선택된 도형일 경우 선택 해제
                if (selectedObjects.includes(selectedIdx)) {
                    setSelectedObjects(prevSelected => prevSelected.filter(idx => idx !== selectedIdx));
                } else {
                    // 새로 선택한 도형일 경우 선택 추가
                    setSelectedObjects(prevSelected => [...prevSelected, selectedIdx]);
                }
                } else {
                // 선택한 도형이 없을 경우 모든 선택 해제
                setSelectedObjects([]);
                }
            }

    
        setStartPoint(startPoint);
    };
    const computePointInCanvas = (e: MouseEvent): Point | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return { x, y };
    };
    
    const clear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setObjects(()=>[]);
    };

    const checkOutInCanvas = (point: Point): boolean => {
        const { x, y } = point;
        if (x < 0 || y < 0 || x > 650 || y > 650) {
            return false;
        }
        else {
            return true;
        }
    }

    // const updatedObjects = (dx:number, dy:number) => objects.map((obj, idx) => {
    //     if (selectedObjects.includes(idx)) {
    //         const updatedStartPoint: Point = {
    //         x: obj.startPoint.x + dx,
    //         y: obj.startPoint.y + dy,
    //     };
    //     const updatedCurrentPoint: Point = {
    //         x: obj.currentPoint.x + dx,
    //         y: obj.currentPoint.y + dy,
    //     };
    //     return {
    //         ...obj,
    //         startPoint: updatedStartPoint,
    //         currentPoint: updatedCurrentPoint,
    //     };
    //     }
    //     return obj;
    // });

    const findSelectedObjectIndex = (point: Point): number | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
    
        const objectsLength = objects.length;
        for (let i = objectsLength - 1; i >= 0; i--) {
            const { startPoint, currentPoint } = objects[i];
            if (!startPoint || !currentPoint) continue;
        
            const { x: startX, y: startY } = startPoint;
            const { x: currentX, y: currentY } = currentPoint;
        
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(currentX, currentY);
            ctx.lineWidth = 5;
            if (ctx.isPointInStroke(point.x, point.y)) {
                return i;
            }
        }
    
        return null;
        };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!mouseDown) return;
            // if (mode === 'select') return;
            const currentPoint = computePointInCanvas(e);
            const ctx = canvasRef.current?.getContext('2d');
            if (!ctx || !currentPoint) return;

            console.log(mode)
            if (mode !== 'select') {
                setObj({
                    mode,
                    ctx, 
                    currentPoint, 
                    //@ts-ignore
                    prevPoint: prevPoint.current, 
                    //@ts-ignore
                    startPoint, 
                    fillColor: '#000',
                    strokeColor: color,
                    lineWidth: 3,
                    zIndex: 3,
                    isDraw: true, 
                    isSelect: false
                })
                const newObject:VectorType = { 
                    mode,
                    ctx, 
                    currentPoint, 
                    //@ts-ignore
                    prevPoint: prevPoint.current, 
                    //@ts-ignore
                    startPoint, 
                    fillColor: color,
                    strokeColor: color,
                    lineWidth: 3,
                    zIndex: 3,
                    isDraw: true, 
                    isSelect: false
                };
                //@ts-ignore
                vectors.create(newObject);
                prevPoint.current = currentPoint;
                // setStartPoint(currentPoint);
                objects.forEach((obj) => {
                    vectors.create(obj);
                });
        }
        else if(mode === 'select' && selectedObjects.length > 0) {
            const dx = currentPoint.x - (startPoint?.x || 0);
            const dy = currentPoint.y - (startPoint?.y || 0);

            const updatedObjects = objects.map((obj, idx) => {
                if (selectedObjects.includes(idx)) {
                    const updatedStartPoint: Point = {
                        x: obj.startPoint.x + dx,
                        y: obj.startPoint.y + dy,
                    };
                    const updatedCurrentPoint: Point = {
                        x: obj.currentPoint.x + dx,
                        y: obj.currentPoint.y + dy,
                    };
                    return {
                        ...obj,
                        startPoint: updatedStartPoint,
                        currentPoint: updatedCurrentPoint,
                        isDraw: true,
                    };
                }
                return obj;
            });
            console.log('aa')
            console.log(updatedObjects)
            console.log('bb')
            setObjects(before => updatedObjects);
            setStartPoint(currentPoint);
            console.log(objects)
            objects.forEach((obj) => {
                if (obj.isSelect === true) {
                    vectors.create(obj);
                }
                // vectors.create(obj);
            });
            objects.forEach((obj) => {
                if (obj.isSelect === false) { 
                vectors.create(obj);
                }
            });
            }
        
        };

        const mouseUpHandler = (e: MouseEvent) => {
            const currentPoint = computePointInCanvas(e);
            const ctx = canvasRef.current?.getContext('2d');
            console.log(currentPoint)
            //@ts-ignore
            if (checkOutInCanvas(currentPoint)){
                // const newObject = { ctx, currentPoint, prevPoint: prevPoint.current, startPoint };
                const newObject:VectorType = { 
                    mode,
                    //@ts-ignore
                    ctx, 
                    //@ts-ignore
                    currentPoint, 
                    //@ts-ignore
                    prevPoint: prevPoint.current, 
                    //@ts-ignore
                    startPoint, 
                    fillColor: color,
                    strokeColor: color,
                    lineWidth: 3,
                    zIndex: 3,
                    isDraw: false, 
                    isSelect: false
                };
                
                setMouseDown(false);

                if (mode !== 'select'){

                    //@ts-ignore
                    setObjects(obj => [...obj, newObject])
                    prevPoint.current = null;
                }
                //     console.log(objects)
                //     console.log('aa')
                //     console.log(selectedObjects)
                if (mode === 'select' && selectedObjects.length > 0) {
                    //@ts-ignore
                    const dx = currentPoint.x - startPoint!.x;
                    //@ts-ignore
                    const dy = currentPoint.y - startPoint!.y;
                    const updatedObjects = objects.map((obj, idx) => {
                        if (selectedObjects.includes(idx)) {
                            const updatedStartPoint: Point = {
                            x: obj.startPoint.x + dx,
                            y: obj.startPoint.y + dy,
                        };
                        const updatedCurrentPoint: Point = {
                            x: obj.currentPoint.x + dx,
                            y: obj.currentPoint.y + dy,
                        };
                        return {
                            ...obj,
                            startPoint: updatedStartPoint,
                            currentPoint: updatedCurrentPoint,
                            isDraw: false
                        };
                        }
                        return obj;
                    });
                    setObjects(updatedObjects);
                }   
            }
            if (selectedObjects.length === 1 ){
                setSelectedObject(objects[selectedObjects[0]])
            }
            objects.forEach((obj) => {
                vectors.create(obj);
            })
        };

        canvasRef.current?.addEventListener('mousemove', handler);
        window.addEventListener('mouseup', mouseUpHandler);

        return () => {
            canvasRef.current?.removeEventListener('mousemove', handler);
            window.removeEventListener('mouseup', mouseUpHandler);
        };
    }, [startPoint, mouseDown, objects, mode, selectedObjects]);

    return { canvasRef, onMouseDown, clear, mode, setMode, selectedObject };
};