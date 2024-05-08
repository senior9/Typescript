{
    type ReverseArray = <T> (arr: T[]) => T[] | string

    const reverseArray: ReverseArray = (array) => {

        if (array.length === 0) {
            return "Your Array is empty";
        }
        else {
            const reverseArray = [];
            for (let i = array.length - 1; i >= 0; i--) {
                const element  = array[i];
                reverseArray.push(element);

            }

            return reverseArray;
        }


    }


    console.log(reverseArray(["abul", "gabul", "mokbuk"]));
    console.log(reverseArray([1, 2, 3, 4, 5, 6]));
    console.log(reverseArray([]));


}