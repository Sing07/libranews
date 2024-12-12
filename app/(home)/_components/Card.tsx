import React from "react";

const Card = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="shadow-lg rounded-xl border mx p-2">
            {children}
        </div>
    );
};

export default Card;
