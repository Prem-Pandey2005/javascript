const Nums=  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const values = Nums.forEach( (num)=>{
    // console.log(num);
    return Nums
    
} )
// console.log(values);

const myNums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (item)=> {
//    return  item > 5
    
// })
// console.log(newNums);

// ****************same thing in forEach 

// const newNums = []
// myNums.forEach ((num)=>{
//     if ( num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: 'book one', genre:'Fiction',publish: 1981, editon:2004 },
    
    {title: 'book two', genre:'Non-Fiction',publish: 1992, editon:2008 },
    
    {title: 'book three', genre:'history',publish: 1999, editon:2007 },
    
    {title: 'book four', genre:'Non-Fiction',publish: 1989, editon:2010 },
    
    {title: 'book five', genre:'science',publish: 2009, editon:2014 },
    
    {title: 'book six', genre:'Fiction',publish: 1987, editon:2010 },
    
    {title: 'book seven', genre:'history',publish: 1986, editon:1996},
    
    {title: 'book eight', genre:'science',publish: 1986, editon:1996 },
    
    {title: 'book nine', genre:'Non-Fiction',publish: 2011, editon:2016 },
    
];
let userbooks = books.filter( (bk) =>bk.genre ==='history' )

userbooks = books.filter( (bk) =>bk.genre ==='Non-Fiction' )

userbooks = books.filter ( (bk) =>{
   return  bk.publish >= 1995 && bk.genre ==="history"
} )
console.log(userbooks);
