{   
    // Utility


    // Pick

    type User ={
        name : string;
        age: number;
        email?: string;
        proPic: boolean;
    }

    type pickUserNameEmail = Pick<User,"name" |"email" >



    // Omit

    type OmitUserContact = Omit<User, "name" | "proPic">
    

    // Required 
    type requiredUser = Required<User>

    // Partial 
    type partialUser = Partial<User>

    // ReadOnly 

    type ReadOnlyUser = Readonly<User>

    // Dynamuically key /Properties add in obj -> Record


    // type obj1 = {
    //     a: string;
    //     b:string;
    //     c:string;
    // }

    type obj1 = Record<string,string>

    

    // 
    
    const object:obj1 ={
        a:"aa",
        b:"bb",
        c:"cc",
        d:"dd",
        e:'ee'
    } 

    //  Most Important Part for next level use case 
    const emptyObj:Record<string,unknown> = {} 
}