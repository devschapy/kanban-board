import React, { Fragment, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);
    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                onClick={onOpen}
                className={`taskItem 
                ${status.status === 'open' ? 'bg-blue-50 border-blue-200 border' : '' ||
                        status.status === 'in progress' ? 'bg-yellow-50 border-yellow-200 border' : '' ||
                            status.status === 'done' ? 'bg-green-50 border-green-200 border' : ''}}`}
            >
                <p className={"text-gray-700 text-center"}>{item.content}</p>
                <p className="absolute top-1 right-1 cursor-pointer">{status.icon}</p>
            </div>

            <Window onClose={onClose} item={item} show={show} />
        </Fragment>
    );
};

export default Item;