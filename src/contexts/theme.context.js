import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const themeColor = {
	blue: {
		color: "#0095ff",
		backgroundColor: "#d7eeff"
	},
	purple: {
		color: "#9000ff",
		backgroundColor: "#eed9ff"
	},
	green: {
		color: "#64bc00",
		backgroundColor: "#e5ffc8"
	},
	orange: {
		color: "#ff8400",
		backgroundColor: "#ffdfbc"
	}
};

export const ThemeContext = createContext({
    setTask: () => {}
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "blue");
    // const [token, setToken] = useLocalStorage("token", null);
    // const [notificationMsg, setNotificationMsg] = useLocalStorage("alert", "");

    // const isMobile = window.matchMedia("(max-width: 767px)").matches;
    // const isTabletPortraitCustom = window.matchMedia(
    //     "(min-width: 768px) and (max-width: 1200px) and (hover: none)"
    // ).matches;

    const value = {
        theme,
        setTheme
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};