{

type RepeatString =(str:string,number:number) => string|undefined;

// Es6 
    const  repeatString:RepeatString =(str, times)=>{
       
        if(times>0){
            return str.repeat(times);
        }
    }
    console.log(repeatString("",0));
    
// While Loop 

const repeatString1:RepeatString =(str,num)=>{
    let repeatedStr= "";
    while(num>0){
        repeatedStr+=str;
        num--;
        return repeatedStr;
    }
}
 console.log(repeatString("Aditi",2));

}

