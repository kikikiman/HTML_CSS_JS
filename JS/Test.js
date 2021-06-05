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

var ii = 1;
for(var i=9; i>=1;i -= 2){
    if(!(i == 9)){
        console.log(' '.repeat(9-i -ii ) + '*'.repeat(i) + ' '.repeat(9-i -ii ) );
        ii++;
}else{
    console.log(' '.repeat(9-i ) + '*'.repeat(i) + ' '.repeat(9-i) );

    } 
}


var ii = -1;
for(var i = 1; i <=5; i++){
    if(i<=3){
        ii += 2;
        console.log(' '.repeat((5 -ii)/2) + '*'.repeat(ii));
        // console.log(' '.repeat(9-i/2) + '*'.repeat(i));
    } else {
        ii -=2;
        console.log(' '.repeat((5 -ii)/2) + '*'.repeat(ii));
    }



}

