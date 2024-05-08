{
    type FindLargestNumber = <T extends number> (X:T[])=> number | undefined;


    const findLargestNumber1:FindLargestNumber = (array)=>{

        if (array.length === 0){
            return undefined;
        }
    
        return Math.max(...array);
    }
    console.log(findLargestNumber1([10, 5, 8, 20, 3]))
}