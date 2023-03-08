class batallaNaval{
    private board: any [][];

    public constructor(){
        this.board = [
            ['cerca', 'casi', 'tocado'],
            ['segui participando', 'hundido', 'ole'],
            ['hundiste mi acorazado', 'me rayaste la pintura', 'tal ves en otro tabero']
        ];
    }
    shoot(x:number, y: number){
        console.log(`Medis el viento, apuntas, disparas y: ${this.board[x][y]} `)
        return `tu disparo: ${this.board[x][y]} ` ;
    }
}


const battle = new batallaNaval();

battle.shoot(1, 2);
