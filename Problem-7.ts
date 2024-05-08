
{ 
    type Param = string | unknown ;
    type LogString =(str:Param) => string | unknown 
    
        const logString:LogString =(parameter)=>{

            if (typeof parameter === "string"){
                return parameter;
            }
            else{
                return "Input is not a string";
            }
        } 
    
        //  sample Input 
        console.log(logString("Hello, TypeScript"));
        console.log(logString([""]));
}
