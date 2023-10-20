import Player from "../../lib/Player";
import { GameMove, WordleGameState, WorldleGuess } from "../../types/CoveyTownSocket";
import Game from "./Game";

export default class WorldleGame extends Game<WordleGameState, WorldleGuess> {
    //populate words
    public constructor() {
        super({
            goalWords: [],
            score: [],
            difficulty: 5,
            numGuesses: 0,
            guesses: [],
            status: "WAITING_TO_START"
        })
    }

    public applyMove(move: GameMove<WorldleGuess>): void {
        throw new Error("Method not implemented.");
    }
    protected _join(player: Player): void {
        throw new Error("Method not implemented.");
    }
    protected _leave(player: Player): void {
        throw new Error("Method not implemented.");
    }
    
}