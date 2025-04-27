export const pressKeyDown = (e, func, ...args) => {
   const enter = e.toLowerCase();
   if(enter === 'enter')
   func(...args);
}