// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let num = [0,1,3]
 
const findMissing = () =>{
    let n = num.length;
    let findn = (n*(n+1))/2;
    // console.log(findn);
     
    let sum = num.reduce((accum, cur)=>{
         
        return accum = accum+cur
    })
    // console.log(sum);

    return findn - sum; 
    // console.log(findn - sum);
}
findMissing()

 