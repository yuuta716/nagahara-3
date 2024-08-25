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
  const targets = document.querySelectorAll(".myProfile");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
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
  const targets = document.querySelectorAll(".myCareer");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
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
  const targets = document.querySelectorAll(".myComment");//監視されるもの
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

{
  document.addEventListener("DOMContentLoaded", function() {
    const content1 = document.querySelector(".introduction");
    const scrollThresholdStart = 100; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 100; // 変化が終わるスクロールの閾値
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const body = document.querySelector("body");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content1.offsetTop - scrollThresholdStart) 
       && scrollPosition < (content1.offsetTop + content1.offsetHeight + scrollThresholdEnd)
       )
       {
        body.style.backgroundColor = "black";
        body.style.color = "white"; // 文字色を白に変更
       } else {
        body.style.backgroundColor = "white";
        body.style.color = "black"; // 文字色を黒に変更
      }
    });
  });
}