export type stateType = {
  isSidebarOpen: boolean;
  isDropdownOpen: boolean;
  transactions: any[];
  categories: any[];
};

export const initialState = {
  isSidebarOpen: false,
  isDropdownOpen: false,
  transactions: [],
  categories: [],
};
