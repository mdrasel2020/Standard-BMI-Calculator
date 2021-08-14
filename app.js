
function calculate() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let wNum = parseFloat(weight);
    let hNum = parseFloat(height);

    if (wNum > 0 & hNum > 0) {
         let feet = (hNum * 12);
    let feetheight=feet*0.025
    let BmiResult = wNum / Math.pow(feetheight, 2);
    let result = Math.round(BmiResult);
        document.getElementById('result').value ='your Result : '+ result;
        document.getElementById('weight').value = ' ';
        document.getElementById('height').value= ' ';
    } else {
        return;
   }
   }