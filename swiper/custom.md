※swiperは連想配列で記入する

  loop: true,
  // 最終画像を見せた後繰り返しスワイプされる

  speed: 2500,
  // スワイプ始まりから終わりまでの速度を変化

  slidesPerView: 1,
  // 一度に表示する画像の枚数

  spaceBetween: 10,
  // 画像同士の間隔を調整

  centeredSlides: true,
  // 最初の画像を真ん中に

  autoplay: {
    delay: 1500
  },
  // スワイプさせる秒間を指定
  // loop: true,がないと戻る時に前スライドが一瞬で見える仕様がある

  breakpoints: {
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 5,
    }
  },
  // ○○以上で〜という書き方

  // effect: 'fade', ****注意****  
  // 切り替えをfadeで行う

