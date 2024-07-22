window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click',calculatebmi)
}

function calculatebmi()
{
    let height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    if(!height || height<0 )
    {
        result.innerText = "Invalid height";
        return;
    }
    if(!weight || weight<0){
        result.innerText = "Invalid weight";
        return;
    }

    height = height/100;

    const bmi = (weight/(height*height)).toFixed(2);

    if(bmi<18.5){
        result.innerText = `underweight: ${bmi}`;
    }else if(18.5 <= bmi && bmi <= 24.5){
        result.innerText = `normal: ${bmi}`;
    }else if(25 <= bmi && bmi <= 29.5){
        result.innerText = `overweight: ${bmi}`;
    }else{
        result.innerText = `obese : ${bmi}`;
    }
}