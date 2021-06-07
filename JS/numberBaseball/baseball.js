// function test(){
//     var word = '테스트'
//     while(true){
//         var newWord = prompt(word);
//         var word2 = newWord;
//         console.log(word2);
//         if(word[word.length -1]  == word2[0] ){
//             console.log(`${newWord}`);
//             console.log(`true`);
//             word = word2;
//         } else {
//             console.log(`${newWord}`);
//             console.log(`false`);
//         }
//     }
// }

// var ii = 1;
// for(var i=9; i>=1;i -= 2){
//     if(!(i == 9)){
//         console.log(' '.repeat(9-i -ii ) + '*'.repeat(i) + ' '.repeat(9-i -ii ) );
//         ii++;
// }else{
//     console.log(' '.repeat(9-i ) + '*'.repeat(i) + ' '.repeat(9-i) );

//     } 
// }


// var ii = -1;
// for(var i = 1; i <=5; i++){
//     if(i<=3){
//         ii += 2;
//         console.log(' '.repeat((5 -ii)/2) + '*'.repeat(ii));
//         // console.log(' '.repeat(9-i/2) + '*'.repeat(i));
//     } else {
//         ii -=2;
//         console.log(' '.repeat((5 -ii)/2) + '*'.repeat(ii));
//     }
// }



/*
 *  숫자 야구
 */
var 바디 = document.body;
var arr;
var result; 

function 숫자뽑기(){
    arr = [1,2,3,4,5,6,7,8,9];
    result = [];
    for(var i = 0; i < 4; i++ ){
        var tempNum = arr.splice(Math.floor(Math.random()*(9 - i)) , 1)[0];
        result.push(tempNum);
    }
}
숫자뽑기();
console.log('result[] : '+result);

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
바디.append(폼);
var inputTag = document.createElement('input');
폼.append(inputTag);
inputTag.type ='text';
inputTag.maxLength = 4;
var btn = document.createElement('button');
btn.textContent = '입력';
폼.append(btn);


var 틀린횟수 = 0;
폼.addEventListener('submit', function 비동기(e){  // 언제실행될 지 모름
    e.preventDefault();  // 이벤트 멈추기
    var 답 = inputTag.value;
    if(답 === result.join('')){
        결과.textContent = '홈런!!!';
        inputTag.value = '';
        inputTag.focus();
        
        숫자뽑기()
      
        틀린횟수 = 0;
    } else {
        var resultArr = 답.split('');
        var strike = 0;
        var ball = 0;
        틀린횟수++;
        if(틀린횟수 >4){
            결과.textContent = '실패 10번 넘게 틀려서 정답 공개, 정답은 : ' + result.join(',');
            inputTag.value = '';
            inputTag.focus();

            숫자뽑기()
            틀린횟수 = 0;
        } else{
            for(var i = 0; i <= 3; i++){
                if(Number(resultArr[i]) === result[i]){
                    strike++;
                } else if(result.indexOf(Number(resultArr[i])) > -1){
                    console.log('볼');
                    ball++;
                }
            }
            결과.textContent = strike + ' Strike, ' + ball + ' ball';
            inputTag.value = '';
            inputTag.focus();
        }

    }
});

