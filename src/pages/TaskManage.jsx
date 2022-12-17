import React from "react";
import { statuses } from "../data";
import Col from "../components/Col";
import Item from "../components/Item";
import ColTitle from "../components/ColTitle";
import Header from "../components/common/Header";
import CreateTask from "../components/CreateTask";
import DropWrapper from "../components/DropWrapper";
import { useSelector, useDispatch } from "react-redux";
import { addTaskList, moveTask, dropNewTask } from "../store/actions/actions";

const TaskManage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state);

    const onDrop = (item, monitor, status) => {
        const newItems = items.filter(i => i.id !== item.id).concat({ ...item, status })
        dispatch(dropNewTask(newItems));
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];

        const newItems = items.filter((i, idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, item);
        dispatch(moveTask(newItems));
    };

    const createNewTaskHandler = (task) => dispatch(addTaskList(task));

    return (
        <main>
            <Header />
            <CreateTask onTaskAdd={createNewTaskHandler} />

            <div className={"flex justify-center gap-10"}>
                {statuses.map(s => {
                    return (
                        <div key={s.status} className={"relative bg-gray-50 rounded-md pt-16 px-4 py-2 shadow-md "}>
                            <ColTitle Style={s.status}>{s.status.toUpperCase()}</ColTitle>
                            <DropWrapper onDrop={onDrop} status={s.status}>
                                <Col status={s.status}>
                                    {items
                                        .filter(i => i.status === s.status)
                                        .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                    }
                                </Col>
                            </DropWrapper>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default TaskManage;