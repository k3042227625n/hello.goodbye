const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ?',
    answers: [
      'スーパーファミコン', 
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHERS2', 
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answers: [
      'フリオニール', 
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();
//ボタンをクリックしたら正誤判定
//e:イベントのオブジェクトでクリックされた要素に対して何かしたい時に使う
const clickHandler  = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score  + '/' + quizLength + 'です！');
  } 
};
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}









// 配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];
// ループ文
// let index = 0;
// while(index < 5){
//   console.log(index); //0,1,2,3,4
//   index++;
// }
let index = 0;
while(index < inoki.length){
  console.log(inoki[index]);
  index++;
}


// //関数
// // 同じ命令を何度も使いたいとき
// // 任意のタイミングで命令を実行させたいとき(このタイミングで出てきてくれ！)
// //同じ命令を一部だけ変えて使いまわしたいときに引数が有効(argument)
// const test = (arg) => {
//   if(inoki.length > arg){
//     console.log('ボンバイエ！');
//   } else {
//     console.log('ボンバ．……！');
//   }
// };
// // test(3);
// // test(4);
// // test(5);
// // test(6);

// // オブジェクト
// // 変数や定数は1:1なのに対して、オブジェクトは複数の値を持てるデータの塊
// // const unko2 = {
// //   color: 'pink',
// //   size: 'large',
// //   purfume: 'mint',
// //   goToilet: () => {
// //     console.log('hello world!');
// //   }
// // };
// // console.log(unko2.goToilet());
// デフォルトで設定されているオブジェクト
// // windowはブラウザ全体を表すオブジェクト
// console.log(window.innerWidth);
// window.alert('ダー！'); //popupを呼ぶ関数

// // documentは表示しているページ全体のオブジェクト
// // console.log(document);
// getElementBy〜 : HTMLから何かをとってくる時に使う
// console.log(document.getElementsByTagName('button')[0]);
// // event: ユーザーがアクションをしたタイミングで何かをしたいときに使う
// // addEventListenerは引数を2つ指定できる
// document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
//   window.alert('Pai Pai!');
// });