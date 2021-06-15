 
var 맵 =  Array(45)
          .fill()
          .map(function(요소, 인덱스){
    return 인덱스 +1;
});
console.log(맵);

var 셔플 = [] ;
// while(맵.length > 0){
//    var 이동값 = 맵.splice(Math.floor(Math.random()* 맵.length), 1)[0];
//    셔플.push(이동값);
// }
셔플 = 맵.splice(5,3)
//678
console.log(셔플);
// for(var i = 1; i<=45;i++){
//     lotto  = i;
//     console.log(lotto);
// 
// }
//empty 특징 알아두세요 반복문 불가!

