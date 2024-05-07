{
// 
const user ={
    name:"milat",
    home:"alat",
    age:26 
}

const getUserKey = <X,Y extends keyof X> (obj:X,key:Y)=>{
    return obj[key];
}

const resul2 =getUserKey(user,"age");
console.log(resul2);
// 
}

// Behind the scenes, this function is quite flexible because it allows you to specify any object X and any key Y of that object X, and it will return the value associated with that key from the object. The use of generics (<X, Y>) makes it reusable with different types of objects and keys. And the constraint extends keyof X ensures that Y must be a key of X, preventing errors when accessing properties that don't exist on the object.