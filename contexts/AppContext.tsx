import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react";


const AppContext = createContext<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    actualColor: ColorType | undefined;
    setActualColor: Dispatch<SetStateAction<ColorType | undefined>>;
}>(null!);

export type ColorType = {
    name: string;
    className: string;
    type: 'brand' | 'gray' | 'stats';
}

export function AppProvider({ children }: PropsWithChildren<{}>) {
    const [isOpen, setIsOpen] = useState<boolean>(
        false
    );
    const [actualColor, setActualColor] = useState<ColorType>();

    const values = {
        isOpen,
        setIsOpen,
        actualColor,
        setActualColor
    };
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(
            "AppContext must be used within a AppProvider"
        );
    }
    return context;
};