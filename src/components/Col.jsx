import React from "react";

const Col = ({ isOver, status, children }) => {
    const className = isOver ? `${status === 'open' ? 'bg-blue-100 duration-300' : '' ||
        status === 'in progress' ? 'bg-yellow-100 duration-300' : '' ||
            status === 'done' ? 'bg-green-100 duration-300' : ''}` : null;

    return (
        <div className={`${className} min-h-[300px] max-w-[300px] w-[300px] space-y-3`}>
            {children}
        </div>
    );
};

export default Col;