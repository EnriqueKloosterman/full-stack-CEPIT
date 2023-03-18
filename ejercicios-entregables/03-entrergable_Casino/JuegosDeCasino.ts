import { BlackJack } from "./BlackJack";
import { Roulette } from "./Roulette";

export class JuegosDeCasino{
    private name: string;
    private section: string;
    private dealer: string;

    public constructor(name: string, seaction: string, dealer: string, ){
        this.name = name;
        this.section = seaction;
        this.dealer = dealer;
    }

    public getInfo(): JuegosDeCasino{
        return this;
    }
}