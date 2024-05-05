//  generic type 

// type genericArray <param> = Array<param> ;
type genericArray <T> = Array<T> ;

// -> this type used for dynamically "Reusable Generic" type 

const user:genericArray<{name:string,age:number}> = [

{
    name:"bilu",
    age:14
},
{
    name:"chilu",
    age:26,
}

];
console.log(user[1].age);

// -> this generic method help you to create reusable genric type 