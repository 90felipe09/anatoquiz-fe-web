import { useState } from "react";

export const useRandom = () => {
    const [selectedCategory, selectCategory] = useState<string>('Cardiovascular');
  const [selecionando, setSelecionando] = useState<boolean>(true);

  return {selectedCategory, selectCategory, selecionando, setSelecionando}
}