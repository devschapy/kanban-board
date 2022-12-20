import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropNewTask } from "../store/actions/actions";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import Window from "./Window";

const Item = ({ item, index, moveItem, status }) => {
    const { items } = useSelector(state => state);
    const dispatch = useDispatch();

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
    drag(drop(ref));


    const deleteHandler = () => {
        const newItems = items.filter(i => i.id !== item.id);
        dispatch(dropNewTask(newItems));
    }

    const [show, setShow] = useState(false);
    const onClose = () => setShow(false);
    const onOpen = () => setShow(true);

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
                <p className="absolute top-0 left-0.5 text-[10px] cursor-pointer">{status.icon}</p>

                <button onClick={() => deleteHandler()}
                    className="absolute top-0 right-0.5 text-[8px] cursor-pointer z-20 hover:scale-125 duration-300">❌</button>

            </div>

            <Window onClose={onClose} item={item} show={show} icon={status.icon} />
        </Fragment>
    );
};

export default Item;