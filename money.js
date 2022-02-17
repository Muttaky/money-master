document.getElementById('calc').addEventListener('click',function()
{
    let income=document.getElementById('income');
    let incomeNum= parseInt(income.value);


    let food=document.getElementById('food');
    let foodNum= parseInt(food.value);
    let cloths=document.getElementById('cloths');
    let clothsNum= parseInt(cloths.value);
    let rent=document.getElementById('rent');
    let rentNum= parseInt(rent.value);

    let totalExpenses=document.getElementById('totalExpenses');
    let balance=document.getElementById('balance');

    totalExpenses.innerText=foodNum+clothsNum+rentNum;
    balance.innerText=incomeNum-totalExpenses.innerText

})