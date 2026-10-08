



function Player({name , player , time , active}) {


    return (
        <div className="player">
            <div className="player-info">
                <div className="avatar">
                      {/* {player} */}
                </div>

                <div>
                    <h3>{name}</h3>
                    <span>Player {player === 'W' ? '1' : '2'} </span>
                </div>
            </div>

            <div className= {`timer ${active ? 'active' : ""}`}>
                {time}
            </div>
        </div>
    )
}

export default Player;