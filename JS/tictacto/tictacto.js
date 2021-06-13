var 바디 = document.body;
var 테이블 = document.createElement('table');
var 행들 = [];
var 열들 = [];
  
var 비동기콜백 = function(event) {
    // console.log(행들);                               
    // console.log(event.target);                        // <td></td>
    // console.log(event.target.parentNode);             // <tr></tr>
    // console.log(event.target.parentNode.parentNode);  // <table></table>

    var rowLocation = 행들.indexOf(event.target.parentNode);
    console.log(rowLocation);
    var colLocation = 열들[rowLocation].indexOf(event.target);
    console.log(colLocation);
    if(행들[rowLocation][colLocation]) { //칸이 이미 채워져 있는가?

    }
};

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
바디.append(테이블);
console.log(열들, 행들);   

// 열들 = [
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸],
//     [첫칸, 두칸, 세칸],
// ]