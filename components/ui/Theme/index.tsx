import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

type ThemeProps = Readonly<{
    children: ReactNode;
}>;

export function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
