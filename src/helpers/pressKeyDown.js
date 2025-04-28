export const pressKeyDown = (e, func, ...args) => {
   const enter = e.toLowerCase();
   console.log(e)
   if(enter === 'enter' || enter === 'numpadenter'){
      func(...args);
   }
}