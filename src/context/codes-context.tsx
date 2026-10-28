import { createContext, useContext, useState } from "react";

export type CodeContextType = {
  selectedCodes: string[];
  onSelectedCodes: (code: string) => void;
};

const ContextCode = createContext<CodeContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedCode = () => {
  const context = useContext(ContextCode);

  if (!context) {
    throw new Error("Context no found");
  }

  return context;
};

export default function CodeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);

  const onSelectedCodes = (code: string) => {
    setSelectedCodes((prev) => {
      if (prev.includes(code)) {
        return prev.filter((c) => c !== code);
      }
      return [...prev, code];
    });
  };

  return (
    <ContextCode.Provider value={{ selectedCodes, onSelectedCodes }}>
      {children}
    </ContextCode.Provider>
  );
}
