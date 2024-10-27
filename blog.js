"use strict";

{
  // IE、Safari対応
  // smoothscroll.js読み込み
  // https://github.com/iamdustan/smoothscroll

  // セレクタ名（.pagetop）に一致する要素を取得
  const pagetop_btn = document.querySelector(".pagetop");

  // .pagetopをクリックしたら
  pagetop_btn.addEventListener("click", scroll_top);

  // ページ上部へスムーズに移動
  function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  // スクロールされたら表示
  window.addEventListener("scroll", scroll_event);
  function scroll_event() {
    if (window.pageYOffset > 100) {
      pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
      pagetop_btn.style.opacity = "0";
    }
  }
}

{
  {
    function callback(entries, obs) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        };
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
      });
    };
    const options = {
      threshold: 0.2,
    };

    const observer = new
      IntersectionObserver(callback, options);//場所
    const targets = document.querySelectorAll(".content");//監視されるもの
    targets.forEach(target => {
      observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
    });
  }

}

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const menu = document.getElementById('menu');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}