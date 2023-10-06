var p1=(Math.floor(Math.random()*6))+1;
var p2=(Math.floor(Math.random()*6))+1;

if(p1>p2){document.querySelector("h1").innerHTML="&#128681Player 1 wins! ";}
if(p2>p1){document.querySelector("h1").innerHTML="Player 2 wins!&#128681";}

if (p1===1){document.querySelector(".dice5").classList.add("white");}
if (p1===2){document.querySelector(".dice1").classList.add("white");
            document.querySelector(".dice9").classList.add("white");
            }
if (p1===3){document.querySelector(".dice1").classList.add("white");
            document.querySelector(".dice5").classList.add("white");
            document.querySelector(".dice9").classList.add("white");
           }
if (p1===4){document.querySelector(".dice1").classList.add("white");
            document.querySelector(".dice3").classList.add("white");
            document.querySelector(".dice7").classList.add("white");
            document.querySelector(".dice9").classList.add("white");
            }
if (p1===5){document.querySelector(".dice1").classList.add("white");
            document.querySelector(".dice3").classList.add("white");
            document.querySelector(".dice5").classList.add("white");
            document.querySelector(".dice7").classList.add("white");
            document.querySelector(".dice9").classList.add("white");
            }
if (p1===6){document.querySelector(".dice1").classList.add("white");
            document.querySelector(".dice3").classList.add("white");
            document.querySelector(".dice4").classList.add("white");
            document.querySelector(".dice6").classList.add("white");
            document.querySelector(".dice7").classList.add("white");
            document.querySelector(".dice9").classList.add("white");
                        }


if (p2===1){document.querySelector(".dice52").classList.add("white");}
if (p2===2){document.querySelector(".dice12").classList.add("white");
            document.querySelector(".dice92").classList.add("white");
           }
if (p2===3){document.querySelector(".dice12").classList.add("white");
            document.querySelector(".dice52").classList.add("white");
            document.querySelector(".dice92").classList.add("white");
           }
if (p2===4){document.querySelector(".dice12").classList.add("white");
            document.querySelector(".dice32").classList.add("white");
            document.querySelector(".dice72").classList.add("white");
            document.querySelector(".dice92").classList.add("white");
            }
if (p2===5){document.querySelector(".dice12").classList.add("white");
            document.querySelector(".dice32").classList.add("white");
            document.querySelector(".dice52").classList.add("white");
            document.querySelector(".dice72").classList.add("white");
            document.querySelector(".dice92").classList.add("white");
              }
if (p2===6){document.querySelector(".dice12").classList.add("white");
            document.querySelector(".dice32").classList.add("white");
            document.querySelector(".dice42").classList.add("white");
            document.querySelector(".dice62").classList.add("white");
            document.querySelector(".dice72").classList.add("white");
            document.querySelector(".dice92").classList.add("white");
           }
