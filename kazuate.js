// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let num = document.querySelector('span#kaisu');
  num.textContent = (kaisu);
  let num1 = document.querySelector('span#answer');
  num1.textContent = (yoso);
  let ans = document.querySelector('p#result');
  if(kaisu < 4){
    if(yoso===kotae){
        ans.textContent = ("正解です.おめでとう！");
    }else if(kaisu===3){
        ans.textContent = ("まちがい. 残念でした答えは " + kotae + "です.");
    }else if(kaisu <= 2 && yoso < kotae){
        ans.textContent = ("まちがい. 答えはもっと大きいですよ ");
    }else{
        ans.textContent = ("まちがい. 答えはもっと小さいですよ ");
    }
  }else{
    ans.textContent = ("答えは " + kotae + " でした. すでにゲームは終わっています");
  }
  kaisu++;
  
}