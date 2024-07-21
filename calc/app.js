window.onload = () =>
{
    const buttons = document.querySelectorAll('.clickon');//querySelectorAll to fetch alll contents
    const screen = document.querySelector('.screen'); //querySelector to fetch one value 
    const r = document.querySelector('#result');
    const c = document.querySelector("#clear");
    
    buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            screen.value += e.target.innerHTML;
        })
    })

    r.addEventListener('click', e => {
        if(!screen.value){
            screen.value =" enter value";
        }
        else{
            screen.value = eval(screen.value);
        }
    })

    c.addEventListener('click', (e)=>{
         screen.value = "";
    })

}