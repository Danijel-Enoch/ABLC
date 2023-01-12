export declare function useWeb3ModalTheme(): {
    theme: {
        themeMode: "dark" | "light" | undefined;
        themeColor: "blackWhite" | "blue" | "default" | "green" | "magenta" | "orange" | "purple" | "teal" | undefined;
        themeBackground: "gradient" | "themeColor" | undefined;
    };
    setTheme: (theme: Pick<import("@web3modal/core").ConfigCtrlState, "themeBackground" | "themeColor" | "themeMode">) => void;
};
