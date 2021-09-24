const quiz = [
    {
        question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
        answers: [
            "任天堂ゲームボーイ",
            "PS2",
            "任天堂スイッチ",
            "任天堂DS"
        ],
        correct: "PS2",
        quizSorce: "PS2(1億5,500万台)、任天堂DS(1億5,402万台)、任天堂ゲームボーイ(1億1,869万台)、任天堂スイッチ(8,904万台)"
    }, {
        question: "床に落とした食べ物でも「すぐに拾えば大丈夫」というような意味で「3秒ルール」という言葉を使う人\
        が居ますが実際に落ちて何秒までなら拾って食べても大丈夫でしょうか？",
        answers: [
            "1秒",
            "5秒",
            "10秒",
            "落とした時点でアウト"
        ],
        correct: "落とした時点でアウト",
        quizSorce: "単純に落としたら食べたらダメ絶対！！"
    },{
        question: "お茶漬けの元に入っている「あられ」には、なんの意味があるでしょう？",
        answers: [
            "湿気予防",
            "食感が良いから",
            "香りが良いから",
            "色合いの為"
        ],
        correct: "湿気予防",
        quizSorce:"回答の通りです"
    },{
        question: "ある高級ブランドがサッカーボールを作った事があります、どのブランドでしょう？",
        answers: [
            "ルイヴィトン",
            "エルメス",
            "プラダ",
            "ロレックス"
        ],
        correct: "ルイヴィトン",
        quizSorce:"1998年に開催された、サッカーのフランスワールドカップを記念にして限定3000個で発売された。(約30万円)"
    },{
        question: "行くと食欲がなくなる場所は？",
        answers: [
            "宇宙",
            "レストラン",
            "温泉",
            "ホテル"
        ],
        correct: "宇宙",
        quizSorce:"正解は宇宙(空気が無いから(食う気が無い))"
    },{
        question: "植物にも人間と同じようなものがあります、それは何でしょう？",
        answers: [
            "脳みそ",
            "血液型",
            "心臓",
            "髪の毛"
        ],
        correct: "血液型",
        quizSorce:"植物にも血液型があります！血は流れていないのですが、「糖タンパク質」というもので\n\
        、人間と同じ血液型を調べられます。植物も「A・B・O・AB型」があります。"
    },{
        question: "飛行機の中食べられるように作られた野菜とはどれでしょう？",
        answers: [
            "パプリカ",
            "アボカド",
            "ミニトマト",
            "ズッキーニ"
        ],
        correct: "ミニトマト",
        quizSorce:"機内食の色やバランスを良くするために、どうにか小さくトマトを持ち運べないか？\n\
        という理由から機内食用にミニトマトが開発された。"
    },{
        question: "大根おろしはあるすり方をすると、辛くなります。そのすり方とはなんでしょう？",
        answers: [
            "ゆっくり擦る",
            "力を込めて擦る",
            "早く擦る",
            "力を弱めて擦る"
        ],
        correct: "早く擦る",
        quizSorce:"早くすることで、大根の細胞が壊れて苦くなってしまいます。\n\
        辛くならない方法は、ゆっくり「の」の字にすると良いです！"
    },{
        question: "日本で最初に販売されたアイスクリームの値段はいくらでしょう？",
        answers: [
            "700円",
            "3000円",
            "8000円",
            "15000円"
        ],
        correct: "8000円",
        quizSorce:"アイスクリームが初めて登場したのは明治2年で「あいすくりん」という名前で販売されていましたが、\n\
        値段は約8000円と高かったので、一般市民はなかなか食べられませんでした。"
    },{
        question: "砂糖は昔あるものとして活用されていました。活用されていたものはなんでしょう？",
        answers: [
            "湿布",
            "頭痛薬",
            "風邪薬",
            "胃痛薬"
        ],
        correct: "風邪薬",
        quizSorce:"奈良時代に、中国から砂糖が伝わって「風邪薬」として使われていました。甘くて一口なめると、\n\
        疲れがとれて元気がでて病気を治すことができると感じたからだそうです。"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let sorceIndex = 0;
let score = 0;


//HTMLオブジェクトには$を変数の頭に付ける
const $button = document.getElementsByTagName("button");
//ボタンの工数
const buttonLength = $button.length;


//クイズの問題文の選択定義
const setupQuiz = () =>{
    //タグ指定で問題文をHTMLに渡す
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    //各ボタンに回答をループで振り分ける
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();
//クリックされたボタンの処理
const clickHandler = (e) =>{
    if(quiz[quizIndex].correct　===　e.target.textContent){
        window.alert("正解!!🎉");
        window.alert("解説\n" + quiz[quizIndex].quizSorce);
        score++;
    }else{
        window.alert("不正解😭");
        window.alert("解説\n" + quiz[quizIndex].quizSorce);
    }
    quizIndex++;
    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数が無ければこちらを実行
        window.alert("以上で終了です。")
        window.alert("あなた正解数は" +　score + "/"　+ quizLength +　"です" );
        window.alert("お疲れさまでした。")
    }
};
//ボタンが押されたら正誤判定
let handlIndex = 0;
while(handlIndex < buttonLength){
    $button[handlIndex].addEventListener("click",(e)=>{
       clickHandler(e);
    });

    handlIndex++;
};
