


import ChessSquare from "./ChessSquare";

function ChessBoard () {
    const squares = [];

    for(let row=0; row < 8; row++){
        for(let col =0; col < 8; col++){
            const isDark = ( row + col )% 2 === 0;

            squares.push(

               <ChessBoard 
               key={`${row} - ${col}`}
               color={isDark ? 'dark':'light'}
               ></ChessBoard>

            );
            
        }
    }

    return (
        <div className="board-wrapper">
            <div className="chess-board">
                {squares}
            </div>
        </div>
    );
}

export default ChessBoard;