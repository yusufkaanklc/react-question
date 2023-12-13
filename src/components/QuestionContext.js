import { createContext, useState } from "react";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <QuestionContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContext;
