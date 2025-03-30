import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

// Интерфейс для контекста.  Обратите внимание, что  'x' | 'o' теперь строчные буквы.
interface TurnContextType {
  turn: 'x' | 'o';
  setTurn: (newTurn: 'x' | 'o') => void; // Добавлена функция для изменения состояния
  flag: boolean;
  setFlag: (newFlag:boolean) => void;
}

// Создание контекста с указанием типа и начального значения.  Важно использовать значение по умолчанию,
// которое соответствует `TurnContextType`.  Если ничего не передать, будет ошибка.
const TurnContext = createContext<TurnContextType>({
  turn: 'x', // Начальное значение
  setTurn: () => {}, // Пустая функция-заглушка
  flag: false,
  setFlag: () => {},
});

// Хук для доступа к контексту.  Добавлена проверка на наличие контекста
export const useTurn = () => {
  const context = useContext(TurnContext);
  if (context === undefined) {
    throw new Error('useTurn must be used within a Provider');
  }
  return context;
};


interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {

  const [flag, setFlag] = useState<boolean>(false);
  const [turn, setTurn] = useState<'x' | 'o'>('x');

  const updateTurn = useCallback((newTurn: 'x' | 'o') => {
    setTurn(newTurn);
  }, [setTurn]);

  const updateFlag = useCallback(() =>{
    setFlag(prevFlag => !prevFlag);
  }, [setFlag])



 
  const value = useMemo(() => ({ turn, setTurn: updateTurn, flag, setFlag: updateFlag}), [turn, updateTurn, flag, updateFlag]);

  return (
    <TurnContext.Provider value={value}>
      {children}
    </TurnContext.Provider>
  );
};

