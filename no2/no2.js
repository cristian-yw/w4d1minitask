const chess = document.createElement("div");
chess.className = "chess";

for (row = 0; row < 8; row++){
    for (col = 0; col < 8; col++){
        const square = document.createElement("div");
        if ((row + col) % 2 === 0 ){
            square.className="white";
        }else{
            square.className="black";   
        }
        chess.appendChild(square)
    }
}
document.body.appendChild(chess)