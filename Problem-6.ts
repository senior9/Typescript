{
    type Book ={
        title:string;
        author:string;
        publishedYear: number;
    }

    type IsRecentBook = (object:Book)=> boolean;

    const isRecentBook:IsRecentBook =(object):boolean =>{
            const newDate = new Date();
            const getCurrentYear = newDate.getFullYear();
            const getLastFiveyears = getCurrentYear -5 ;
            if(object.publishedYear >=getLastFiveyears){
                return true ;
            }
            else{
                return false
            }

            
    }


    // Sample Input 
    const book1:Book = {
        title : "Hatekolome Javascript",
        author:"Junayed Ahmed",
        publishedYear: 2019
    }

    const book2:Book ={
        title:"abc",
        author:"abc",
        publishedYear:2024

    }
    

        console.log( isRecentBook (book1));


}