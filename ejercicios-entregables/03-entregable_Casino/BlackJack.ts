import { JuegosDeCasino } from "./JuegosDeCasino";

export class BlackJack extends JuegosDeCasino{
    private betLimit: number;

    public constructor(name: string, section: string, dealer: string, betLimit: number){
        super(name, section, dealer);
        this.betLimit = betLimit;
    }

    public getInfo(): BlackJack{
        return this;
    }
}