import React, { useEffect, useState } from 'react';
import style from './TemplateName.module.css';

export default function TemplateName() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        };
    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold bg-amber-500">
                TemplateName Component {counter}
            </h1>
            <p className="bg-amber-950 text-white p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deleniti!
            </p>
        </>
    );
}