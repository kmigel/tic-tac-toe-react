import styles from '../styles.module.css';
import { useState } from 'react';

let isXTurn = true; // Check whose turn is it - true = X's turn, false = O's turn

function Square({value, onSquareClick}) {
    return (
        <button onClick={onSquareClick} className={styles.square}>{value}</button>
    );
}

export default function Board() {
    const[squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if(!squares[i]) {
            const nextSquares = squares.slice();
            isXTurn ? nextSquares[i] = "X" : nextSquares[i] = "O";
            isXTurn = !isXTurn;
            setSquares(nextSquares);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
}