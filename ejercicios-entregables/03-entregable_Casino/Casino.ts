import { JuegosDeCasino } from "./JuegosDeCasino";

export class Casino{
    private name: string;
    private capacity: number;
    private sections: number;
    private juegosDeCasino: JuegosDeCasino[];

    public constructor(name: string, capacity: number, sections: number){
        this.name = name;
        this.capacity = capacity;
        this.sections = sections;
        this.juegosDeCasino = [];
    };

    public getInfo(): Casino{
        console.log(this);
        
        return this;
    }

    public setCasinoGames(games: JuegosDeCasino){
        this.juegosDeCasino.push(games);
    }   


}