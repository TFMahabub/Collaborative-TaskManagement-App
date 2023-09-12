import React, { createContext, useState } from "react";

type FilterType = {
  dueDate: string;
  priority: string;
  taskStatus: string;
};

interface ValueType {
  filter: FilterType;
  setFilter: any;
}

export const FilterProvider = createContext<Partial<ValueType>>({});

const FilterContext = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>({
    dueDate: "",
    priority: "",
    taskStatus: "",
  });
  return (
    <FilterProvider.Provider value={{ filter, setFilter }}>
      {children}
    </FilterProvider.Provider>
  );
};

export default FilterContext;
