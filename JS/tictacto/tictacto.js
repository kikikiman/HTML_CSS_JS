var 바디 = document.body;
var 테이블 = document.createElement('table');
var 행들 = [];
var 열들 = [];
var 턴 = "X"; 
var 결과 = document.createElement('div');
var 초기화 = document.createElement('button');

var 비동기콜백 = function(event) {
    // console.log(행들);                               
    // console.log(event.target);                        // <td></td>
    // console.log(event.target.parentNode);             // <tr></tr>
    // console.log(event.target.parentNode.parentNode);  // <table></table>

    var rowLocation = 행들.indexOf(event.target.parentNode);
    console.log(`열 위치 : ${rowLocation}`);
    var colLocation = 열들[rowLocation].indexOf(event.target);
    console.log(`행 위치 : ${colLocation}`);
    if(열들[rowLocation][colLocation].textContent !== "" ){
        alert('현재 위치는 값이 채워져있습니다. 빈곳에 입력해주시길 바랍니다.');
    } else {
        // 가로줄 검사
        열들[rowLocation][colLocation].textContent = 턴;
        var 다참 = false;
        if(열들[rowLocation][0].textContent === 턴 &&
            열들[rowLocation][1].textContent === 턴 &&
            열들[rowLocation][2].textContent === 턴 
        ) {
                다참 = true;
        }
            // 세로줄 검사
        if(열들[0][colLocation].textContent === 턴 &&
            열들[1][colLocation].textContent === 턴 &&
        열들[2][colLocation].textContent === 턴 
        ) {
            다참 = true;
        }
        // 대각선 검사
        if(rowLocation- colLocation === 0 || Math.abs(rowLocation - colLocation) === 2){
            if(열들[0][0].textContent === 턴&&
                열들[1][1].textContent === 턴&&
                열들[2][2].textContent === 턴
            ) {
                다참 = true;
            }
            else if(
                열들[2][0].textContent === 턴&&
                열들[1][1].textContent === 턴&&
                열들[0][2].textContent === 턴
            ){
                다참 = true;
            }
        }
        
        if(다참){
            console.log(턴 + '님의 승리!!');
            결과.textContent = 턴 + " 님이 승리!!!";
            열들.forEach(function(행){
                행.forEach(function(열){
                    열.textContent = "";
                });
            }); 
        } else {
            if(턴 === 'X'){
                턴 = 'O';
            }else {
                턴 = 'X';
            }
        } 
    }
};

var 초기화클릭 = function(event){
    var 테이블 = document.getElementsByTagName('table')[0]
    for(var i = 0; i <=2; i++){
        for(var j = 0; j<=2; j++){
            document.getElementsByTagName('table')[0].childNodes[i].childNodes[j].textContent = '';
        }
    }
}


for(var i = 0; i<=2; i++){
    var 행 = document.createElement('tr');
    행들.push(행);
    열들.push([]);
    for(var j = 0; j <=2; j++){
        var 열 = document.createElement('td');
        열.addEventListener('click', 비동기콜백);
        열들[i].push(열);
        행.appendChild(열);
    }
    테이블.appendChild(행);
}

초기화.addEventListener('click',초기화클릭);


초기화.textContent = "초기화버튼";
바디.append(테이블);
바디.append(결과);
바디.append(초기화);
console.log("열들, 행들"+열들, 행들);   

// 열들 = [
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸],
// ]












