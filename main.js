"use strict";

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
  const targets = document.querySelectorAll(".animate");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}


{
  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
}