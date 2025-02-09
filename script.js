let storyIndex = 0;
let gameData = {
    progress: 0,
    choices: []
};

  // ゲーム開始
  function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    showStory();
  }

const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices');
const imageContainer = document.getElementById('image-container'); // 画像を表示するためのコンテナ
const imgElement = document.createElement('img');
imageContainer.appendChild(imgElement); // imageContainerに追加

const story = [
    {
        //シナリオ0
        text: "ヴェロキラプトル「おねえちゃん、ちょっと聞いてほしいんだけど…僕、原宿が好きなんだ。おねえちゃんと一緒に行きたいな！」",
        Image:"images/raptor1.jpg",//画像が入れられない
        choices: [
            { text: "次へ", next: 1 }
        ]
    },
    {
                //シナリオ1
        text: "主人公（来週はヴェロキラプトルくんと初めての外出だ）",
        Image:"images/raptor1.jpg",
        choices: [
            { text: "「いいね！行こうよ！」", next: 2 },
            { text: "「原宿、ちょっと得意じゃないな…」", next: 7 }
        ]
    },
    {
                //シナリオ2
        text: "ヴェロキラプトル「やった！おねえちゃんとのデート楽しみ！」",
        Image:"images/raptor1.jpg",
        choices: [
            { text: "次へ", next: 4 }
        ]
    },
    {
                //シナリオ3
                    text: "ヴェロキラプトル「楽しい場所がいっぱいだから、きっとおねえちゃんも楽しめるよ！一緒に行こうよ！」",
                    Image:"images/raptor1.jpg",
                    choices: [
            { text: "次へ", next: 4 }
        ]
    } ,
    {
                //シナリオ4
        text: "主人公「デート？！なんだか恥ずかしいな。。」",
        Image:"images/raptor1.jpg",
        choices: [
            { text: "次へ", next: 5 }
        ]
    },
    {
                //シナリオ5
        text: "ヴェロキラプトル「おねえちゃん、恥ずかしがり屋だね。でも、僕は楽しみだよ。今日は僕が全部案内してあげる！」",
        Image:"images/RaptorUp.jpg",
        choices: [
            { text: "次へ", next: 6 }
        ]
    },
    {
                //シナリオ6
        text: "主人公「ヴェロキラプトルくんとのお出かけ楽しみだな。」",
        Image:"images/RaptorUp.jpg",
        choices: [
            { text: "次へ", next: 10 }
        ]
    },
    {
                //シナリオ7
        text: "ヴェロキラプトル「え、そうなの？でも僕と一緒ならきっと楽しいよ！おねえちゃんを楽しませられるように頑張るから、、だめ？」",
        Image:"images/RaptorFront.jpg",
        choices: [
            { text: "次へ", next: 8 }
        ]
    },
    {
        //シナリオ8
        text: "主人公「うーん、ヴェロキラプトルくんがそう言うなら、ちょっとだけ行ってみようかな。」",
        Image:"images/RaptorFront.jpg",
        choices: [
            { text: "次へ", next: 9 }
        ]
    },
    {
        //シナリオ9
        text: "主人公「おねえちゃん、ありがとう！絶対に楽しいデートにするから！」",
        Image:"images/RaptorFront.jpg",
        choices: [
            { text: "次へ", next: 10 }
        ]
    },
    {
        //シナリオ10
        text: "原宿の街並み、おしゃれなショップが並ぶ通り",
        Image:"images/RaptorHarajuku.jpg",
        choices: [
            { text: "次へ", next: 11 }
        ]
    },
    {
        //シナリオ11
        text: "ヴェロキラプトル「見て見て！ここ、すごく可愛いお店だよ！おねえちゃん、絶対好きそう！」",
        Image:"images/RaptorHarajuku.jpg",
        choices: [
            { text: "次へ", next: 12 }
        ]
    },
    {
        //シナリオ12
        text: "主人公「わぁ、本当に可愛い！ちょっと見てみようかな。」",
        Image:"images/RaptorHarajuku.jpg",
        choices: [
            { text: "次へ", next: 13 }
        ]
    },
    {
        //シナリオ13
        text: "ヴェロキラプトル「おねえちゃんに似合うものを僕が選んであげるよ！」",
        Image:"images/RaptorScarf.jpg",
        choices: [
            { text: "次へ", next: 14 }
        ]
    },
    {
        //シナリオ14
        text: "主人公「ヴェロキラプトルくんが選んでくれるの、なんだか恥ずかしいかも。」",
        Image:"images/RaptorScarf.jpg",
        choices: [
            { text: "次へ", next: 15 }
        ]
    },
    {
        //シナリオ15
        text: "ヴェロキラプトル「僕が選んだら、絶対似合うから。ほら、これなんかどう？」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 16 }
        ]
    },
    {
        //シナリオ16
        text: "主人公「試してみようかな。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 17 }
        ]
    },
    {
        //シナリオ17
        text: "ヴェロキラプトル「うん！おねえちゃん、似合うよ、絶対。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 18 }
        ]
    },
    {
        //シナリオ18
        text: "主人公「ヴェロキラプトルくんが選んでくれた髪飾りすごくかわいい。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "「じゃあ、ちょっとこれ買っちゃおうかな。」", next: 19 },
            { text: "「うーん。でもやっぱり、もう少しだけ見て回るね。」", next: 22 }
        ]
    },
    {
        //シナリオ19
        text: "ヴェロキラプトル「本当に？よかった！とっても似合ってるよ！」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 20 }
        ]
    },
    {
        //シナリオ20
        text: "主人公「ありがとう、ヴェロキラプトルくん。こんなに選んでくれるなんて、ちょっと嬉しいかも。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 21 }
        ]
    },
    {
        //シナリオ21
        text: "ヴェロキラプトル「おねえちゃんが喜んでくれて、僕も嬉しいよ。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 25 }
        ]
    },
    {
        //シナリオ22
        text: "ヴェロキラプトル「そっか、…おねえちゃんが喜んでくれると僕も嬉しいんだけどな。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 23 }
        ]
    },
    {
        //シナリオ23
        text: "主人公「ごめんね、ちょっと気になるものがあったから。」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 24 }
        ]
    },
    {
        //シナリオ24
        text: "ヴェロキラプトル「うん、わかるよ！じゃあ、次のお店行こう！おねえちゃんが楽しめるように頑張るよ！」",
        Image:"images/RaptorAccessory.jpg",
        choices: [
            { text: "次へ", next: 25 }
        ]
    },
    {
        //シナリオ25
        text: "買い物のあとカフェにて",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 26 }
        ]
    },
    {
        //シナリオ26
        text: "ヴェロキラプトル「...........。おねえちゃん、今日は本当に楽しかった。でも…最近、僕、ずっと考えてたんだ。」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 27 }
        ]
    },
    {
        //シナリオ27
        text: "主人公「どうしたの？急に黙っちゃって。」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 28 }
        ]
    },
    {
        //シナリオ28
        text: "ヴェロキラプトル「おねえちゃんのこと、なんだか最近、気になって仕方ないんだ。」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 29 }
        ]
    },
    {
        //シナリオ29
        text: "主人公「え？ヴェロキラプトルくん、どういうこと？」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 30 }
        ]
    },
    {
        //シナリオ30
        text: "ヴェロキラプトル「僕、最初はおねえちゃんとただの友達だと思ってた。でも、最近気づいたんだ…おねえちゃんのことが好きだって。」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 31 }
        ]
    },
    {
        //シナリオ31
        text: "主人公「え…？」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 32 }
        ]
    },
    {
        //シナリオ32
        text: "ヴェロキラプトル「おねえちゃん、僕…好きだよ。こんなこと、今まで言ったことなかったけど。」",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "次へ", next: 33 }
        ]
    },
    {
        //シナリオ33
        text: "主人公（ヴェロキラプトルくん真剣だ。どうしよう…。）",
        Image:"images/RaptorCafe.jpg",
        choices: [
            { text: "「ちょっと待って！私はまだよくわからないんだけど…」", next: 34 },
            { text: "「私も…実は、私も好き。」", next: 37 }
        ]
    },
    {
        //シナリオ34
        text: "ヴェロキラプトル「そっか、おねえちゃんはまだ僕の気持ち、わからないよね。でも、僕はあきらめないから、待ってるよ。」",
        Image:"images/Raptor in Cafe Up.jpg",
        choices: [
            { text: "次へ", next: 35 }
        ]
    },
    {
        //シナリオ35
        text: "主人公「うーん、まだ混乱してるけど、少しずつ考えてみるね。」",
        Image:"images/Raptor in Cafe Up.jpg",
        choices: [
            { text: "次へ", next: 36 }
        ]
    },
    {
        //シナリオ36
        text: "ヴェロキラプトル 「無理に答えを出さなくていいよ。僕はおねえちゃんが答えを出すまで待つから。」",
        Image:"images/Raptor in Cafe Up.jpg",
        choices: [
            { text: "次へ", next: 41 }
        ]
    },
    {
        //シナリオ37
        text: "ヴェロキラプトル 「ほんとに？！おねえちゃん、ありがとう！僕、ずっと待ってたんだよ！」",
        Image:"images/Raptor in Cafe.jpg",
        choices: [
            { text: "次へ", next: 38 }
        ]
    },
    {
        //シナリオ38
        text: "主人公 「うん、実は私も気になってたんだ。なんだか不思議だけど、あなたのこと、すごく大切に思ってる。」",
        Image:"images/Raptor in Cafe.jpg",
        choices: [
            { text: "次へ", next: 39 }
        ]
    },
    {
        //シナリオ39
        text: "ヴェロキラプトル 「おねえちゃん、僕もだよ！これからもっと一緒にいろんなことを楽しもうね！」",
        Image:"images/Raptor in Cafe.jpg",
        choices: [
            { text: "次へ", next: 40 }
        ]
    },
    {
        //シナリオ40　エンディング恋人
        text: "一か月後、、、 \n ヴェロキラプトル 「おねえちゃん！次はあっちの乗り物に乗ろう！二人で過ごせて幸せだよ。」",
        Image:"images/RaptorPark.jpg",
        choices: [
            { text: "タイトルへ戻る", next: 43 },
            { text: "クレジットを見る", next: 42 }
        ]
    },
    {
        //シナリオ41  エンディング友達
        text: "ヴェロキラプトル (おねえちゃんとは結ばれなかったけど、最高の友達がいるから悪くない)",
        Image:"images/RaptorFried.jpg",
        choices: [
            { text: "タイトルへ戻る", next: 43 },
            { text: "クレジットを見る", next: 42 }
        ]
    },
    {
        //シナリオ42  クレジット
        text: "Thank you for playing! \n\n キャラクター設定：白澄(Hasu)&古知累すすむ \n シナリオ：ChatGPT \n イラスト：Gemini \n プログラムベース：ChatGPT \n プログラム添削:Copilot  \n シナリオ添削、プログラム修正:Runa"  ,
        Image:"images/T-rex.jpg",
        choices: [
            { text: "タイトルへ戻る", next: 43 }
        ]
    }
];

function showStory() {
    storyText.innerText = story[storyIndex].text;
    imgElement.src = story[storyIndex].Image; // 画像のパスを更新
    choicesContainer.innerHTML = "";
    story[storyIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => selectChoice(choice.next);
        choicesContainer.appendChild(button);
    });
}

function selectChoice(nextIndex) {
    if (nextIndex === 43) {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('home-screen').style.display = 'flex';
        storyIndex = 0; // ゲームをリセット
    } else {
        storyIndex = nextIndex;
        showStory();
    }
}

function returnToTitle() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
    storyIndex = 0; // ゲームをリセット
}

function saveGame() {
    gameData.progress = storyIndex; // 現在のシナリオインデックスを保存
    localStorage.setItem('gameData', JSON.stringify(gameData));
    alert('ゲームをセーブしました！');
}

function loadGame() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        gameData = JSON.parse(savedData);
        storyIndex = gameData.progress;
        document.getElementById('home-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        showStory();
        alert('ゲームをロードしました！');
    } else {
        alert('セーブデータがありません。');
    }
}

function exitGame() {
    if (confirm('ゲームを終了しますか？')) {
        window.close();
    }
}

showStory();
