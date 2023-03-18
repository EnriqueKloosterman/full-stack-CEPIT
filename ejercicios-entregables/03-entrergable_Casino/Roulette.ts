import { JuegosDeCasino } from "./JuegosDeCasino";

export class Roulette extends JuegosDeCasino{
    private chipWorth: number;
    
    public constructor(name: string, section: string, dealer: string, chipWorth: number) {
        super(name, section, dealer);
        this.chipWorth = 0;
    }

    public getInfo(): Roulette {
        return this;
    }
}