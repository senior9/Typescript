// Interface- Genric combination 

interface Bekarjubok<T> {
    name: string;
    biodata: {
        grade: string;
        age: number;
        incomePerMonth: number;
        married: boolean;
    }
    hobby: T;

}

// use Type for genric Type <T>

type hobby1={
    travelTrack: string;
    blogging: string;
    buyWatch: number;
    love: string
}

const boy1: Bekarjubok<hobby1> = {
    name: "fillal",
    biodata: {
        grade: "b",
        age: 20,
        incomePerMonth: 2000,
        married: false
    },
    hobby: {
        travelTrack: "BD",
        blogging: "Facebook",
        buyWatch: 5,
        love: "adi"

    }
}

// use Interface for dynamic Genric Type <T>

interface hobby2 {
    travelTrack: string;
    blogging: string;
    buyWatch: number;
    love: string
}

const boy2: Bekarjubok<hobby2> = {
    name: "billa",
    biodata: {
        grade: "A",
        age: 20,
        incomePerMonth: 25214000,
        married: true
    },
    hobby: {
        travelTrack: "BD",
        blogging: "Facebook",
        buyWatch: 5,
        love: "adi"

    }
}