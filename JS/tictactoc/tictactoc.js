var 바디 = document.body;
var 테이블 = document.createElement('table');
바디.append(테이블);

for(var i = 1; i<=3; i++){
    var 행 = document.createElement('tr');
    for(var j = 1; j <=3; j++){
        var 열 = document.createElement('td');
        행.appendChild(열);
    }
    테이블.appendChild(행);
}