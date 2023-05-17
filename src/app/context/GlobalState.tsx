import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./state";

export const Context = createContext({});

export const useGlobalState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

export type GlobalProviderProps = {
  children: React.ReactNode;
};
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const addTransaction = (transaction: transactionModel) => {
  //   dispatch({
  //     type: "ADD_TRANSACTION",
  //     payload: transaction,
  //   });
  // };

  // const deleteTransaction = (id: string) => {
  //   dispatch({
  //     type: "DELETE_TRANSACTION",
  //     payload: id,
  //   });
  // };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        // addTransaction,
        // deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
