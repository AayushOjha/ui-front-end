// export const depositMoney = (amount) => {
//   return {
//     type: 'deposit',
//     payload: amount,
//   };
// };

// export const withdrawMoney = (amount) => {
//   return {
//     type: 'withdraw',
//     payload: amount,
//   };
// };

export const editHtml = (newData) => {
  return {
    type: 'edit',
    payload: newData,
  };
};
