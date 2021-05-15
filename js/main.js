// kvスライダー
$('.slick').slick({
  autoplaySpeed: 5000,
  autoplay: true,
  Speed: 1000,
  arrows: false,
  dots: false,
  infinite: true,
  fade: true,
  cssEase: 'linear'
});

// ハンバーガー
if (window.matchMedia('(max-width: 375px)').matches) {
  //スマホ処理

  $(".openbtn7").click(function () {//ボタンがクリックされたら
    $(".openbtn7").removeClass('active');
    $(this).toggleClass('active');
      $(".nav").fadeToggle(500);
      $(this).toggleClass('active');
  });

  $(".nav_item").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".nav").fadeToggle(500);//ボタンの activeクラスを除去し
      $(".openbtn7").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
  });

}


AOS.init()
