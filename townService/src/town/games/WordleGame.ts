import InvalidParametersError, { GAME_FULL_MESSAGE, GAME_NOT_IN_PROGRESS_MESSAGE, INVALID_GUESS, PLAYER_ALREADY_IN_GAME_MESSAGE, PLAYER_NOT_IN_GAME_MESSAGE } from "../../lib/InvalidParametersError";
import Player from "../../lib/Player";
import { GameMove, WordleGameState, WordleGuess } from "../../types/CoveyTownSocket";
import Game from "./Game";
import axios from "axios";
export default class WorldleGame extends Game<WordleGameState, WordleGuess> {
    //fetch goal words
    
    public constructor() {
        super({
            goalWords: [],
            score: 0,
            index: 0,
            difficulty: 5,
            numGuesses: 0,
            guesses: [],
            status: "WAITING_TO_START"
        })
    }

    async getWords(): Promise<String[]> {
        const { data } = await axios.get(`http://random-word-api.herokuapp.com/home/word?/length=${this.state.difficulty}&number=10`)
        return data;
    }

    public applyMove(move: GameMove<WordleGuess>): void {
        const cleanMove: WordleGuess = {
            guess: move.move.guess
        }
        this._validateMove(cleanMove)
        this._applyMove(cleanMove)
    }

    private _applyMove(move: WordleGuess): void {
        this.state = {
            ...this.state,
            numGuesses: this.state.numGuesses++,
            guesses: [...this.state.guesses, move],
          };
        this._checkCorrectWord(move);
        this._checkForGameEnding();
    }

    private _checkCorrectWord(guess: WordleGuess): void {
        if (this.state.goalWords[this.state.index] === guess.guess.join()) {
            this.state.score++;
            this.state.index++;
        }
    }
    
    private _checkForGameEnding(): void {
        if(this.state.index === 10) {
            this.state = {
                ...this.state,
                status: 'OVER',
                winner: this._players[0].id
            };
        }
    }

    private _validateMove(move: WordleGuess) {
        if(move.guess.length !== this.state.difficulty) {
            throw new InvalidParametersError(INVALID_GUESS);
        }
        if (this.state.status !== 'IN_PROGRESS') {
            throw new InvalidParametersError(GAME_NOT_IN_PROGRESS_MESSAGE);
          }
    }
    protected _join(player: Player): void {
        if (this.state.player === player.id) {
            throw new InvalidParametersError(PLAYER_ALREADY_IN_GAME_MESSAGE);
        }
        if (!this.state.player) {
            this.state.player = player.id
            this.state.status = 'IN_PROGRESS';
        } else {
            throw new InvalidParametersError(GAME_FULL_MESSAGE);
        }
    }
    protected _leave(player: Player): void {
        if (this.state.player !== player.id) {
            throw new InvalidParametersError(PLAYER_NOT_IN_GAME_MESSAGE);
          }
    }
    
}