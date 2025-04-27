export const saveToStorage = (key, value) => {
   try {
      localStorage.setItem(key, JSON.stringify(value));
   } catch (error) {
      console.log('Erro ao salvar dados no localStorage', + error)
   }
};

export const getFromStorage = (key) => {
   try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : [];
   } catch (error) {
      console.log('Erro ao carregar dados do localStorage' + error);
      return []
   }
};

export const removeFromStorage = (key) => {
   localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
   localStorage.clear();
};