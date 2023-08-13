"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error])
    return (
        <div className="text-yellow-500 text-xl font-bold text-center">
            <h1>{error.message || "something went wrong!"}</h1>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default GlobalError;