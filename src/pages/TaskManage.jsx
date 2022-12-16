import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";
import CreateTask from "../components/CreateTask";
import Header from "../components/common/Header";

const TaskManage = () => {
    const [items, setItems] = useState([{
        id: 1,
        status: "open",
        title: "Human Interest Form",
        content: "Fill out human interest distribution form",
    },
    {
        id: 2,
        status: "open",
        title: "Purchase present",
        content: "Get an anniversary gift",
    },]);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    const createNewTaskHandler = (task) => {
        console.log(task);
        setItems(prevState => {
            return [...prevState, task];
            // const newItems = prevState.concat(task);
            // return [ ...newItems ];
        });
    }

    return (
        <main>
            <Header />
            <CreateTask onTaskAdd={createNewTaskHandler} />

            <div className={"row"}>
                {statuses.map(s => {
                    return (
                        <div className={"col-wrapper"}>
                            <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                            <DropWrapper onDrop={onDrop} status={s.status}>
                                <Col>
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