// type alias uses 

type Add = (num1:number,num2:number) => number ;

const addition:Add =(num1,num2)=> num1+ num2;
console.log(addition(5,9));

// Interface uses 

interface Addi{
    (num1:number,num2:number):number
}

const addi:Addi=(x,y)=>x+y;
console.log(addi(5,7));

//  -> "interface" & "TYPE alas" are both of them used in function , but most of the case if your code need to be clean , you should have used "TYPE ALIAS" ;

// -> if the case is "ARRAY"  , it recommanded for you to use "TYPE ALIAS"
// -> if the cas eis object  both "interface "  & "Type alias "  will be used 
// -> "extends" keyword help you to  extend your next assign  object  and also it has other benefit it can use in "type alias "