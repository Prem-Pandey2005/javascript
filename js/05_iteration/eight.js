const myNums = [1, 2, 3]
// const total = myNums.reduce(function (acc, curv) {
//     console.log(`acc: ${acc} and curv: ${curv}`);
//     return acc + curv
// }, 0)

// console.log(total);
// ***** another way
 const total = myNums.reduce( (acc,curv) => acc + curv, 0 )
console.log(total);

const shoppingcart = [
    {
      courseName :"js course",
      price : 1999
    },
    {
      courseName :"py course",
      price : 999
    },
    {
      courseName :"java course",
      price : 2999
    },
    {
      courseName :" web dev course",
      price : 5999
    },
]
 const priceTopay = shoppingcart.reduce( (acc, item) =>acc + item.price, 0)
console.log(priceTopay);