let boxes = document.querySelectorAll(".box");
let re = document.querySelector("#regame");
let newg = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box => {
    box.addEventListener("click",()=>{
        if(turno){ // O turn
            box.innerText = "O";
            turno=false;
        }else{ //X turn
            box.innerText = "X";
            turno=true;
        }
        box.disabled = true;

        checkwinner();
    });
}));

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
    }

const showWinner = (winner) =>{
    msg.innerText = `winner : ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () =>
{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
}

newg.addEventListener("click",resetGame);
re.addEventListener("click",resetGame);