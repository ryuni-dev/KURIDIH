import VectorFactory from '@/models/VectorFactory';
import VectorType from '@/types/VectorType';
import { Point } from '@/types/point';
import { useEffect, useRef, useState } from 'react';

export const useDraw = (color:string) => {
    const [mouseDown, setMouseDown] = useState(false);
    const [startPoint, setStartPoint] = useState<Point | null>(null);
    const [objects, setObjects] = useState<VectorType[]>([]);
    const [mode, setMode] = useState<string>('select'); 
    const [selectedObject, setSelectedObject] = useState<VectorType | null>(); 
    const [infoObject, setInfoObject] = useState<VectorType | null>(); 
    const [oid, setOid] = useState<number>(0); 
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<Point | null>(null);
    
    const vectors = new VectorFactory()

    const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setMouseDown(true);
        const startPoint = computePointInCanvas(e.nativeEvent);

        if (mode === 'select') {
            //@ts-ignore
            findSelectedObject(startPoint);
        }
        setStartPoint(startPoint);
    };

    const clear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setObjects(()=>[]);
        setInfoObject(() => null);
        setSelectedObject(() => null);
    };

    const computePointInCanvas = (e: MouseEvent): Point | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return { x, y };
    };

    const checkOutInCanvas = (point: Point): boolean => {
        const { x, y } = point;
        if (x < 0 || y < 0 || x > 850 || y > 650) {
            return false;
        }
        else {
            return true;
        }
    }

    const findSelectedObject = (point: Point) => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
    
        const objectsLength = objects.length;
        for (let i = objectsLength - 1; i >= 0; i--) {
            if(vectors.checkSelect(objects[i], point)) {
                setSelectedObject(() => objects[i]);
                setInfoObject(() => objects[i]);
                console.log(objects[i])
            }
        }
    };

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            if (!mouseDown) return;
            const currentPoint = computePointInCanvas(e);
            const ctx = canvasRef.current?.getContext('2d');
            if (!ctx || !currentPoint) return;

            console.log(mode)
            if (mode !== 'select') {
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
                    zIndex: 0,
                    isDraw: true, 
                };
                //@ts-ignore
                vectors.create(newObject);
                setInfoObject(() => newObject);
                prevPoint.current = currentPoint;
                objects.forEach((obj) => {
                    vectors.create(obj);
                });
            }
            else if(mode === 'select' && selectedObject) {
                const dx = currentPoint.x - (startPoint?.x || 0);
                const dy = currentPoint.y - (startPoint?.y || 0);

                const updatedStartPoint: Point = {
                    x: selectedObject.startPoint.x + dx,
                    y: selectedObject.startPoint.y + dy,
                };
                const updatedCurrentPoint: Point = {
                    x: selectedObject.currentPoint.x + dx,
                    y: selectedObject.currentPoint.y + dy,
                };

                setSelectedObject(() => ({
                    ...selectedObject,
                    startPoint: updatedStartPoint,
                    currentPoint: updatedCurrentPoint,
                    isDraw: true,
                }))

                setStartPoint(currentPoint);
                vectors.create(selectedObject);
                objects.forEach((obj) => {
                    if(obj.id !== selectedObject.id){
                        vectors.create(obj);
                    }
                });
            }
        };

        const mouseUpHandler = (e: MouseEvent) => {
            const currentPoint = computePointInCanvas(e);
            const ctx = canvasRef.current?.getContext('2d');
            //@ts-ignore
            if (checkOutInCanvas(currentPoint)){
                setMouseDown(false);
                if (mode !== 'select'){
                    const newObject:VectorType = {
                        id: oid,
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
                        zIndex: oid,
                        isDraw: false
                    };
                    
                    setOid(oid => oid + 1);
                    //@ts-ignore
                    setObjects(obj => [...obj, newObject])
                    setInfoObject(() => newObject);
                    prevPoint.current = null;
                }
                if (mode === 'select' && selectedObject) {
                    //@ts-ignore
                    const dx = currentPoint.x - (startPoint?.x || 0);
                    //@ts-ignore
                    const dy = currentPoint.y - (startPoint?.y || 0);

                    const updatedStartPoint: Point = {
                        x: selectedObject.startPoint.x + dx,
                        y: selectedObject.startPoint.y + dy,
                    };
                    const updatedCurrentPoint: Point = {
                        x: selectedObject.currentPoint.x + dx,
                        y: selectedObject.currentPoint.y + dy,
                    };
                    setObjects(objects.map(obj => 
                        obj.id === selectedObject.id ? 
                            {
                                ...selectedObject,
                                startPoint: updatedStartPoint,
                                currentPoint: updatedCurrentPoint,
                                isDraw: false
                            } 
                            : obj
                    ))
                    setSelectedObject(() => null);
                }   
            }
            objects.forEach((obj) => {
                if(selectedObject && selectedObject.id !== obj.id){
                    vectors.create(obj);
                }
            })
        };

        canvasRef.current?.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);

        return () => {
            canvasRef.current?.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
        };
    }, [startPoint, mouseDown, objects, mode, selectedObject, infoObject]);

    return { canvasRef, onMouseDown, clear, mode, setMode, infoObject };
};