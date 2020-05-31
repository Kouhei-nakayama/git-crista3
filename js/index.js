function openClass() {
  const nav = document.getElementById("js_open");
  const top = document.getElementsByClassName("bar_top");
  const bottom = document.getElementsByClassName("bar_bottom");
  const mid = document.getElementsByClassName("bar_mid");
  const bgmusk = document.getElementsByClassName("burger-musk");
  nav.classList.toggle("open");

  // ハンバーガーメニューをクロスさせる
  top[0].classList.toggle("closs");
  bottom[0].classList.toggle("closs");
  mid[0].classList.toggle("closs");
  // メニューが開いたときに背景を薄暗く
  bgmusk[0].classList.toggle("fadein");
}
// openClass取得したidやクラスにクラスを付与する関数

const btn = document.getElementById("js_bars");
btn.addEventListener("click", () => {
  openClass();
});
// js_barsをクリックした時に、関数openClassを実行

const list = document.getElementsByClassName("nav-item");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    openClass();
  });
}
// nav-iemのいずれかクリックした時に関数openClassを実行

$(".nav-list a").click(function () {
  var attr = $(this).attr("href"); //クリックしたリンクのhref属性の値を代入
  var position = $(attr).offset().top; //対応するコンテンツのページ上端からの距離を代入
  $("html, body").animate(
    {
      scrollTop: position,
    },
    500
  ); //スクロール速度
  return false;
});

$(function () {
  var $win = $(window),
    $fv = $("#mv"),
    $burger = $(".menu"),
    $bar = $(".bar"),
    // 使用するすべての変数を定義
    fvHeight = $fv.outerHeight();
  // #mvの高さを取得

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    // スクロールした値を取得

    if (value > fvHeight) {
      $burger.addClass("scroll");
      $bar.addClass("bar-color");
      $(".site-title").css("fill", "#000");
    } else {
      $burger.removeClass("scroll");
      $bar.removeClass("bar-color");
      $(".site-title").css("fill", "#fff");
    }

    // スクロールした値 > #mvの高さの場合は.fクラスを追加
    // それ以外はクラスを消す
  });
});
