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
  const images = document.querySelectorAll('.img-wrap');
  const animationClassName = 'img-animation';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClassName);
        observer.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => {
    observer.observe(image);
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const content4 = document.querySelector(".content4");
    const scrollThresholdStart = 0; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 0; // 変化が終わるスクロールの閾値

    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const skill = document.querySelector(".myskill");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content4.offsetTop - scrollThresholdStart)
        && scrollPosition < (content4.offsetTop + content4.offsetHeight + scrollThresholdEnd)
      ) {
        skill.style.backgroundColor = "#DEB887";
        skill.style.color = "white"; // 文字色を白に変更
      } else {
        skill.style.backgroundColor = "black";
        skill.style.color = "white"; // 文字色を黒に変更
      }
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const content3 = document.querySelector(".content3");
    const scrollThresholdStart = 100; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 100; // 変化が終わるスクロールの閾値

    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const work = document.querySelector(".work");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content3.offsetTop - scrollThresholdStart)
        && scrollPosition < (content3.offsetTop + content3.offsetHeight + scrollThresholdEnd)
      ) {
        work.style.backgroundColor = "#336666";
        work.style.color = "white"; // 文字色を白に変更
      } else {
        work.style.backgroundColor = "#DEB887";
        work.style.color = "white"; // 文字色を黒に変更
      }
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const content2 = document.querySelector(".content2");
    const scrollThresholdStart = 100; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 100; // 変化が終わるスクロールの閾値

    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const introduction = document.querySelector(".introduction");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content2.offsetTop - scrollThresholdStart)
        && scrollPosition < (content2.offsetTop + content2.offsetHeight + scrollThresholdEnd)
      ) {
        introduction.style.backgroundColor = "#DEB887";
        introduction.style.color = "white"; // 文字色を白に変更
      } else {
        introduction.style.backgroundColor = "#336666";
        introduction.style.color = "white"; // 文字色を黒に変更
      }
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const content1 = document.querySelector(".content1");
    const scrollThresholdStart = 100; // 変化が始まるスクロールの閾値
    const scrollThresholdEnd = 100; // 変化が終わるスクロールの閾値

    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const profile = document.querySelector(".profile");
      // スクロール位置に応じて背景色と文字色を変更
      if (scrollPosition > (content1.offsetTop - scrollThresholdStart)
        && scrollPosition < (content1.offsetTop + content1.offsetHeight + scrollThresholdEnd)
      ) {
        profile.style.backgroundColor = "black";
        profile.style.color = "white"; // 文字色を白に変更
      } else {
        profile.style.backgroundColor = "#336666";
        profile.style.color = "white"; // 文字色を黒に変更
      }
    });
  });
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
  const targets = document.querySelectorAll(".mywork");//監視されるもの
  targets.forEach(target => {
    observer.observe(target);//obseverにtargetが入るときの.observe監視対象にする
  });
}