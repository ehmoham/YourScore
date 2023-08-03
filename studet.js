// 680 =====> SubAllT


// Data Arrays

let ConTable = ['المادة', 'الدرجة الكاملة', 'الدرجتك'];


let ScoreArray = ['القران', 'الاسلامية', 'العربية',
    'الانجليزية', 'الرياضيات', 'كيمياء', 'فيزياء', 'احياء',
    'اجتماعيات', 'بدنية', 'حاسوب'];

let numScoreO = [20, 40, 60, 60, 80, 60, 60, 40, 40, 20, 20];

/* let ScoreArray = ['القران', 'الاسلامية', 'العربية',
    'الانجليزية', 'البدنية', 'الحاسوب', 'الرياضيات', 'الفيزياء',
    'الكيمياء', 'الاحياء', 'الجيولوجيا',
    'اختياري اعلام', 'اختياري كرة قدم الصالة'];

let numScoreO = [20, 40, 80, 80, 20, 20, 100, 80, 80, 60, 60, 20, 20]; */


/* test Data
let ScoreArray = ['a','b','c','d','e'];
let numScoreO = [0,1,2,3,4]*/


// Buttons and Inputs
let btn = document.getElementById('btn');



function Table() {
    let body = document.body;
    let table = document.createElement('table');
    let tr = document.createElement('tr'); // صف
    table.appendChild(tr);

    let mySocer = document.getElementsByClassName('mySocer');

    for (let k = 0; k < ConTable.length; k++) {
        table.appendChild(tr);
        let td = document.createElement('td'); // اعمدة
        tr.appendChild(td);

        // Custom Style
        td.style.border = '4px solid red';
        td.style.background = 'black';
        td.style.color = 'white';
        td.style.fontWeight = '900';

        // Preview
        td.innerHTML = `${ConTable[k]}`;
    }


    for (let y = 0; y < ScoreArray.length; y++) {
        let tr = document.createElement('tr'); // صف
        table.appendChild(tr);

        // Preview
        tr.innerHTML += `<td>${ScoreArray[y]}</td>`;

        tr.innerHTML += `<td>${numScoreO[y]}</td>`;

        tr.innerHTML += `<td>
        <input type="number" placeholder="ادخل درجة المادة" value="" class="mySocer">
        </td>`;

        /*tr.innerHTML += `<td>
            <progress value="${mySocer[y].value}" max="${allScore}"></progress>
        </td>`;*/
    }

    btn.onclick = function () {
        let tr2 = document.createElement('tr'); // صف
        table.appendChild(tr2);
        let myAllScore = 0;
        let allScore = 0;

       // Addition all inputs in Table
       for (let l = 0; l < mySocer.length; l++) {
        myAllScore += +mySocer[l].value
       }

        // Addition all Number in Array (numScoreO)
        for (let f = 0; f < numScoreO.length; f++) {
            allScore += numScoreO[f]
        }

        let myAllScorePer = (myAllScore / allScore) * 100;

        tr2.innerHTML += `<td>${myAllScore} : مجموعك </td>`;
        tr2.innerHTML += `<td>${myAllScorePer} % : نسبتك </td>`;
        tr2.innerHTML += `<td>${(myAllScorePer * 10) / 100} : مجموع الثانوي </td>`;

        //alert()
    }


    // test
    console.log(body.appendChild(table));
    //alert(myAllScore)
}
Table()