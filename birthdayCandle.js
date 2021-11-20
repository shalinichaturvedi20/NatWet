const k=require("readline-sync")
var num=k.questionInt("Enter the number of elements of array: ")
var arr=[]
for (let i=0;i<num;i++){
    element=k.questionInt("Enter the element of array: ")
    arr.push(element)
}
console.log(arr);

var max=0
for ( i of arr){
    if (i>max){
        max=i
    }
}
console.log(max);
var count=0
for ( j of arr){
    if (j===max){
        count+=1
    }
}
console.log(count);