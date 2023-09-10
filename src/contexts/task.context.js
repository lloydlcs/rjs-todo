import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const TaskContext = createContext({
    setTask: () => {}
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTask] = useLocalStorage("todo", []);
    // const [token, setToken] = useLocalStorage("token", null);
    // const [notificationMsg, setNotificationMsg] = useLocalStorage("alert", "");

    // const isMobile = window.matchMedia("(max-width: 767px)").matches;
    // const isTabletPortraitCustom = window.matchMedia(
    //     "(min-width: 768px) and (max-width: 1200px) and (hover: none)"
    // ).matches;

    const value = {
        tasks,
        setTask
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
    return useContext(TaskContext);
};