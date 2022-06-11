写真はimgで指定するのではなく背景に指定すると調整しやすい



個別で文字を入れる場合
swiper-wrapperの中にpタグを作る
swiper-wrapperにposition: relative;
swiper-wrapper pにposition: absolute;（この時共通項目を設定する）
↓
個別位置を調整す際は
swiper-wrapper1 pに個別の値を書き込んでいく



全体に同じ文字を入れる場合
swiper-container自体をdivタグで囲み
直下にpタグを記入する
swiper-containerにposition: relative;
直下のpタグにposition: absolute;


文字以外にも動画やバナーなどを配置することもできる
発想次第でいろいろできる


その他詳しいカスタマイズはdemoと確認→APIでそれぞれのカスタマイズの値を確認することができる


注意点：横スクロールができてしまう場合は
swiper-container {
  overflow: hidden;
}
を指定する