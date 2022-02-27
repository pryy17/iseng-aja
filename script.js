let pacar = prompt("pacar kamu siapa?", "chifuyu");

function pacarSiapa(pacarku) {
    let pacars = pacarku;
    if( pacar == "priandy") {
        alert(" love u sayangku :3 ")
    } else {
        alert("oooo gaitu yaudahh")
        pacar = prompt("pacar kamu siapa serius");
        pacarSiapa(pacar);
    }
}

pacarSiapa(pacar);
