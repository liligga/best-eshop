import { useEffect, useRef } from "react";
import { getCells } from "./utils";

const Draggable = ({ images, handleDrag, handleDrop }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            const { width, height } = containerRef.current.getBoundingClientRect();
            const cells = getCells(width, height, images).sort(
                (a, b) => a.image.order - b.image.order
            );

            for (let i = 0; i < cells.length; ++i) {
                const cell = cells[i];
                const draggable = document.createElement("div");

                draggable.ondragover = (ev) => ev.preventDefault();
                draggable.ondragstart = handleDrag;
                draggable.ondrop = handleDrop;

                const style =   `position: absolute; 
                                z-index: 2;
                                width: ${cell.width}px; 
                                height: ${cell.height}px; 
                                left: ${cell.xOffset}px;
                                top: ${cell.yOffset}px; 
                                background-size: cover;
                                background-position: center;
                                background-image: url(${cell.image.small})`;

                draggable.setAttribute("style", style);
                draggable.setAttribute("draggable", true);
                draggable.setAttribute("id", cell.image.id);

                containerRef.current.appendChild(draggable);
            }
        }
    }, [images, containerRef, handleDrag, handleDrop]);

    return <div style={{ width: "500px", height: "500px" }} ref={containerRef} />;
};

export default Draggable;