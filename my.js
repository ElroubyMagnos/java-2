var calc = document.getElementById('calcpanel');

function ClickNumber(thenumber)
{
    
    if (calc.value == 0)
        calc.value = '';
    calc.value += thenumber.innerText;
}

function CalculateAll()
{
    calc.value = (new Function('return ' + calc.value)());
}

function RemoveLastchar()
{
    calc.value = '';
}