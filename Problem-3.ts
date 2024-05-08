{
    type FilterEvenNumbers = <T extends number>(arr: T[]) => T[] | undefined;

    const filterEvenNumbers: FilterEvenNumbers = <T extends number>(array: T[]): T[] | undefined => {

        const newArray: T[] = array.filter((arr) => arr % 2 === 0);

        if(newArray.length>0){
            return newArray;
        }
        else{
            return undefined;
        }

       

    }

    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6,8,10,15,78,54,26,20]))
}


