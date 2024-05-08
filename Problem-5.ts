{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    
    type CalculateAverageGrade = (object: Student) => number | string;

    const calculateAverageGrade: CalculateAverageGrade = (object): number | string => {

        if (object.grades.length === 0) {
            return "Object grade is empty ";
        }
        else {
            const totalGrade = object.grades.reduce((totalSum, currentValue) => totalSum + currentValue, 0)
            const averageNum = totalGrade / object.grades.length;
            return averageNum;
        }
    }

    const student1: Student = {
        name: "Billa",
        age: 23,
        grades: [25, 14, 75, 18, 56, 89]
    }
    const teacher: Student = {
        name: "killa",
        age: 30,
        grades: [75, 80, 82, 88, 90]
    }

    // sample Input 
    console.log(calculateAverageGrade(student1));
    console.log(calculateAverageGrade(teacher));
}