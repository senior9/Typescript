{
// TypeScript Mapped Types 

type UserString={
    name:string;
    age:string;
    // bioData:{
    //     adreess:string;
    //     postAdress: string;
    // }
}

// type userNumber ={
// // mapped type in typescript 
//  [key in keyof UserString]: boolean 
// }


// Dynamic Mappped push or use caase 

type userNumb<T> = {
    [key in keyof T]: T[key];
}

const area1:userNumb <{hobbyList:number; job:string}> ={
    hobbyList: 5,
    job:"five"

}

// look up Type 

type AreaNumber ={
    height: number;
    width: string;
}

type Width = AreaNumber["width"];


}