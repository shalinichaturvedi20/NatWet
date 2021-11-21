const readline = require("readline-sync")
var k=readline.questionInt("Enter the divisor: ");
var n = readline.questionInt("Enter the element number: ")
var list=[]
var sum=0
var a=0
var i=0
var empty_cand=[]
while (a<n){
    var num = readline.questionInt("Enter the number: ") 
    list.push(num)
    a++ 
}
console.log(list);
while (i < list.length){
    var j = 1
    while(j<list.length){
        if(i==j){

        }else{
            sum =  list[i] +list[j]
            if(sum%k==0){
                
            }else{
                empty_cand.push(list[i])
                empty_cand.push(list[j])
            }
        }

        j++
            }
            i++
        }
        arr = empty_cand
        set = new Set(arr)
        console.log(empty_cand);
        console.log(set);

