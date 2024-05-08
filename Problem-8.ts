{
    class Car {
        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }

        displayInfo(): string {
            return `Your car model is : ${this.year} ${this.brand} ${this.model}`
        }
    }

    // sample input 

    const carDes = new Car("Toyota", "Corolla", 2020);
    console.log(carDes.displayInfo());
    // sample Outoput is -> Your car model is:  2020 Toyota Corolla
}
