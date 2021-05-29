import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

type VisualModeDispatchType = Dispatch<SetStateAction<VisualMode>>;

const VisualModeValueContext = createContext<VisualMode | null>(null);
const VisualModeDispatchContext = createContext<VisualModeDispatchType | null>(
    null
);

type ThemeProps = Readonly<{
    children: ReactNode;
}>;

export function Theme({ children }: ThemeProps) {
    const [visualMode, setVisualMode] = useState(VisualMode.DARK);
    let currentTheme: DefaultTheme = null;
    switch (visualMode) {
        case VisualMode.LIGHT:
            currentTheme = lightTheme;
            break;
        case VisualMode.DARK:
            currentTheme = darkTheme;
            break;
        default:
            throw new Error(`Invalid visual mode ${visualMode}`);
    }
    return (
        <VisualModeDispatchContext.Provider value={setVisualMode}>
            <VisualModeValueContext.Provider value={visualMode}>
                <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
            </VisualModeValueContext.Provider>
        </VisualModeDispatchContext.Provider>
    );
}

export function useVisualModeValue(): VisualMode {
    const visualMode = useContext(VisualModeValueContext);
    if (!visualMode) {
        throw new Error("Must wrap in Theme to use this hook!");
    }
    return visualMode;
}

export function useVisualModeDispatch(): VisualModeDispatchType {
    const setVisualMode = useContext(VisualModeDispatchContext);
    if (!setVisualMode) {
        throw new Error("Must wrap in Theme to use this hook!");
    }
    return setVisualMode;
}

export enum VisualMode {
    LIGHT = "light",
    DARK = "dark"
}
