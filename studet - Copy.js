// Data Arrays
let ConTable = ['المادة', 'الدرجة الكاملة', 'الدرجتك', 'Progress Bar'];

let ScoreArray = ['القران', 'الاسلامية', 'العربية',
    'الانجليزية', 'الرياضيات', 'كيمياء', 'فيزياء', 'احياء',
    'اجتماعيات', 'بدنية', 'حاسوب'];

let numScoreO = [20, 40, 60, 60, 80, 60, 60, 40, 40, 20, 20];



// ......................   Table Mangmant   .......................................

let body = document.body; // الموقع نفسه
let table = document.createElement('table'); // جدول كله
let tr = document.createElement('tr'); // صف
table.appendChild(tr);

// Buttons and Inputs.....
let btn = document.getElementById('btn');

// This is a for loop to making header in table
for (let k = 0; k < ConTable.length; k++) {
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


let mySocer = document.getElementsByClassName('mySocre');


function click() {

      // Addition all inputs in Table
      let myAllScore = 0;
      for (let l = 0; l < mySocer.length; l++) {
          myAllScore += +mySocer[l].value;
  
      }
  
      // Addition Numbers in numScoreO Array
      let allScore = 0;
      for (let i = 0; i < numScoreO.length; i++) {
          allScore += numScoreO[i]
      }
  
      for (let p = 0; p < ScoreArray.length; p++) {
          let tr1 = document.createElement('tr');
          table.appendChild(tr1);
      
          tr1.innerHTML += `<td>${ScoreArray[p]}</td>`;
          tr1.innerHTML += `<td>${numScoreO[p]}</td>`;
          tr1.innerHTML += `<input type="number" value="" placeholder="اكتب درجتك هنا" class="mySocre">`;
          tr1.innerHTML += `<td><progress value="${myAllScore}" max="${allScore}"></progress></td>`;
      }

        let tr2 = document.createElement('tr'); // صف
        table.appendChild(tr2);
    
        let myAllScorePer = (myAllScore / allScore) * 100;

        tr2.innerHTML += `<td>${myAllScore} : مجموعك </td>`;
        tr2.innerHTML += `<td>${myAllScorePer} % : نسبتك </td>`;
        tr2.innerHTML += `<td>${(myAllScorePer * 10) / 100} : مجموع الثانوي </td>`;    
}

btn.onclick = click;

console.log(body.appendChild(table));