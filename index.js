// let 変数名　=　値　;　変数の指定
let msg = "hello world";
//Java同様に変数の上書きも可能
msg = "こんにちは世界 by msg";

//const 定数名　=　値　;　定数の指定

const msg02 = "Hello World by msg02";
//配列宣言呼び出し方法もJavaと変わらない
let quiz = ["one","tow","three","four"];
console.log(quiz[0]);
console.log(quiz[1]);

console.log(msg);
console.log(msg02);

// ループ処理
// let index = 0;
// while(index < quiz.length){
//   console.log(quiz[index]);
//   index++;
// }

//条件分岐
// if(quiz.length > 3){
//   console.log("要素は3個以上あります");
// }else{
//   console.log("要素数は3以下です");
// }

//関数
const test = (num) =>{
  //実行する処理を記述
    if(quiz.length > 3){
    console.log("要素は3個以上あります");
  }else{
    console.log("要素数は3以下です");
  }
  console.log(num + "は英語の数字です");
}
//関数の呼び出し方法
test(quiz[0]);

//javaとほぼ同様に引数の受け渡しも可能。
// const msgsbu = (num) =>{
//   console.log(num + "です");
// }
// msgsbu(6);

//オブジェクト
const quizG = {
  Q1:"日本で一番高い山は？",
  Q2:"大阪にあるテーマパークは？",
  Q3:"ディズニーランドがある県は？",
  sample: () => {
    console.log("オブジェクト内関数です");
  }
};
console.log(quizG.Q1);
console.log(quizG.Q2);
console.log(quizG.Q3);
console.log(quizG.sample());

//js標準オブジェクト
//window,document,event
//window.alert("HHello world");//ポップアップを呼び出すオブジェクト

console.log(document.getElementsByTagName("button"));//タグ名で検索をかけヒットしたモノを表示
//一つ目のボタンを取得し指定する
document.getElementsByTagName("button")[0].addEventListener("click",()=>{
  window.alert("HHello world");//ポップアップを呼び出すオブジェクト
});