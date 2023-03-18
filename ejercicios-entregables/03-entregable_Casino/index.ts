import { Casino } from "./Casino";
import { JuegosDeCasino } from "./JuegosDeCasino";
import { BlackJack } from "./BlackJack";
import { Roulette } from "./Roulette";


const ruleta = new Roulette('Ruleta', 'popular', 'Pepe Grillo', 500 );
const bojack = new BlackJack('Black Jack', 'VIP 1', 'Mr. T.', 10000);

const casino = new Casino('Contraband', 806, 4)
casino.setCasinoGames(ruleta);
casino.setCasinoGames(bojack);

casino.getInfo();