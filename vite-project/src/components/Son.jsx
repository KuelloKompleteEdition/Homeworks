import React, { memo, useMemo } from "react";

export const Son = memo(({ numero, increment }) => {
    console.log("Son component reloaded...");
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(numero)}
        >
            {numero}
        </button>
    );
});
