let firstVal = document.getElementById('NumberOne');
let seconde = document.getElementById('NumberSecond');
let total = document.getElementById('total');
/* const cal = (val) => {
    let tot = 0;
    if (val == 'sum') {
        tot = (firstVal.value * 1) + (seconde.value * 1);
        tot = 'Addition : ' + tot;
    } else if (val == 'sub') {
        tot = (firstVal.value * 1) - (seconde.value * 1);
        tot = 'Suction : ' + tot;
    } else if (val == 'mul') {
        tot = (firstVal.value * 1) * (seconde.value * 1);
        tot = 'Multiplication : ' + tot;
    } else if (val == 'div') {
        tot = (firstVal.value * 1) / (seconde.value * 1);
        tot = 'Division : ' + tot;
    }
    total.innerText = tot;
} */


/* const cal = (val) => {

    let tot;
    switch (val) {
        case 'sum':
            tot = (firstVal.value * 1) + (seconde.value * 1);
            tot = 'Addition : ' + tot;
            break;
        case 'sub':
            tot = (firstVal.value * 1) - (seconde.value * 1);
            tot = 'Subtraction : ' + tot;
            break;
        case 'mul':
            tot = (firstVal.value * 1) * (seconde.value * 1);
            tot = 'Multiplication : ' + tot;
            break;
        case 'div':
            tot = (firstVal.value * 1) / (seconde.value * 1);
            tot = 'Division : ' + tot;
            break;
        default:
            tot = 0;
    }
    total.innerText = tot;
} */


const cal = (val) => {
    let tot = 0;
    val == 'sum' ? tot = 'Addition : ' + ((firstVal.value * 1) + (seconde.value * 1))
        : val == 'sub' ? tot = 'Addition : ' + ((firstVal.value * 1) + (seconde.value * 1))
            : val == 'sub' ? tot = 'Addition : ' + ((firstVal.value * 1) + (seconde.value * 1))
                : val == 'sub' ? tot = 'Addition : ' + ((firstVal.value * 1) + (seconde.value * 1))
                    : tot = 0;

    /*  if (val == 'sum') {
         tot = (firstVal.value * 1) + (seconde.value * 1);
         tot = 'Addition : ' + tot;
     } else if (val == 'sub') {
         tot = (firstVal.value * 1) - (seconde.value * 1);
         tot = 'Suction : ' + tot;
     } else if (val == 'mul') {
         tot = (firstVal.value * 1) * (seconde.value * 1);
         tot = 'Multiplication : ' + tot;
     } else if (val == 'div') {
         tot = (firstVal.value * 1) / (seconde.value * 1);
         tot = 'Division : ' + tot;
     } */
    total.innerText = tot;
}
/* document.write("<pre>");

for (i = 1; i < 5; i++) {

    for (k = 5; k > i; k--) {
        document.write(" ");
    }
    for (j = 1; j <= i; j++) {
        document.write(" ");

        document.write(i);
    }
    document.write("<br>");
}
document.write("</pre>"); */