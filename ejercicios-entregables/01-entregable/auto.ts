
export class Auto{
    //? propiedades
    private manufactorer: string;
    private model: string
    private year: number;
    private color: string;
    private patente: string;
    private speed: number;
    private radio: boolean;
    private volume: number;
    private isOn: boolean;

    //? constructor
    constructor(manufactorer: string, model: string, year: number, color: string, patente: string, speed: number, radio: boolean, volume: number, isOn: boolean){
        this.manufactorer = manufactorer;
        this.model = model;
        this.year = year;
        this.color = color;
        this.patente = patente;
        this.speed = speed;
        this.radio = radio;
        this.volume = volume;
        this.isOn =  isOn;
    }

    //? funcionalidades

    //* acelera el auto
    setAceleration(speed: number){
        this.speed = speed;
        console.log(`aceleraste a ${this.speed}`);        
    }

    //* desacelera el auto
    setDeceleration(speed: number){
        if(this.speed <= 0){
            this.speed = 0;
            console.log(`la velocidad es ${this.speed}, ya no puedes desacelerar mas!`);
        }else{
            this.speed -= speed;
            console.log(`bajaste la velocidad a ${this.speed}`);            
        }
    }

    //* devuelve la marca del auto
    getManufacturer(){
        console.log(`La marca de auto es${this.manufactorer}`);
        return this.manufactorer;        
    }

    //* devuelve el color del auto
    getColor(){
        console.log(`El auto es de color ${this.color}`);
        return this.color;
    }

    //*  devuleve el modelo del auto
    getModel(){
        console.log(`El modelo del auto es ${this.model}`);
        return this.model;
    }

    //* devuelve la patente
    getPatente(){
        return this.patente;        
    }

    //* devuelve el año 
    getYear(){
        console.log(`Es del año ${this.year}`);
        return this.year
    }

    //* enciende o apaga el auto
    setOnOf(){
        this.isOn = !this.isOn;
        if(this.isOn === true){
            console.log(`El auto está enciendido`);
        }else{
            console.log(`El auto está apagado`);
        }
    }

    //* enciende la radio según el auto este encendido o no
    setRadioOn(){
        this.radio = !this.radio;
        if(this.isOn === true){
            if(this.radio == true){
                                console.log("🤘🏻🤘🏻🎸🎸🎼🎼 If you like to gamble, I tell you I'm your man, You win some, lose some, it's all the same to me. The pleasure is to play, it makes no difference what you say. I don't share your greed, the only card I need is, The Ace of Spades, The Ace of Spades ♠ 🤘🏻🤘🏻🎸🎸🎼🎼");            
            }else{
                console.log(`Que haces con la radio apagada. Prendela ya!!!`);
                
            }
        }
    }
    
    //* manipula el volumen de la radio
    setVolumeUp(){
        if(this.radio === true){
            this.volume += 1;
            if(this.volume >= 11){
                this.volume = 11;
                console.log(`lamentablemente el volumen no da mas.`);
            }
            if(this.volume >= 0 || this.volume < 11 ){
                console.log(`Volumen: ${this.volume}`);
                
            }
        }
    }

    setVolumeDown(){
        if(this.radio === true){
            this.volume -= 1;
            if(this.volume > 0 || this.volume <= 11 ){
                console.log(`Volumen: ${this.volume}`, `¿Que tocas? Deja como estaba!!`);
            }    
        }
        if(this.volume === 0){
            this.volume = 0;
            console.log(`¿Estas conforme?!! No se escucha nada`);
        }
    }
} 



