import React from "react";
import Routes from './routes/router';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const App = () => {
    return (
        <DndProvider backend={Backend}>
             <Routes />
        </DndProvider>
    );
};

export default App;