"use strict";

{
  /*
スクロール出現
（「.offs」が付いた要素に対して、表示領域に入ったら「.ons」にクラスを変更する。）
・判定タイミング：対象がブラウザの下から 30%以上 入ったら実行、画面から出たら戻す
*/
  // スクロール出現用関数（.offs ⇄ .ons）
  function scr_ani(scr, offs_max) {
    var window_h = $(window).height(),
      offs_length = $(".offs").length,
      ons_length = $(".ons-1").length;
    if (offs_length) {
      var first_item = offs_max - offs_length;
      for (var i = 0; i < offs_length; i++) {
        var data_scr = first_item + i;
        var offs = $('.offs[data-scr="' + data_scr + '"]');
        var target = offs.offset().top;
        var trigger = target - (window_h + scr - window_h * 0.3);
        if (trigger < 0) {
          offs.removeClass("offs").addClass("ons-1");
        } else {
          break;
        }
      }
    }
    if (ons_length) {
      var last_item = ons_length - 1;
      for (var i = 0; i < ons_length; i++) {
        var data_scr = last_item - i;
        var ons = $('.ons[data-scr="' + data_scr + '"]');
        var target = ons.offset().top;
        var trigger = target - (window_h + scr);
        if (trigger > 0) {
          ons.removeClass("ons-1").addClass("offs");
        } else {
          break;
        }
      }
    }
  }
  $(function () {
    /*
    スクロール出現
    */
    var scr = $(window).scrollTop();
    // スクロール出現アイテムにナンバリング
    var offs_max = $(".offs").length;
    for (var i = 0; i < offs_max; i++) {
      $(".offs").eq(i).attr("data-scr", i);
    }
    scr_ani(scr, offs_max);
    /************
    スクロール時
    ************/
    $(window).on("scroll", function () {
      var scr = $(window).scrollTop();
      /*
      スクロール出現
      */
      scr_ani(scr, offs_max);
    }); // end scroll
  }); // end function
}

{
  /*
スクロール出現
（「.offs」が付いた要素に対して、表示領域に入ったら「.ons」にクラスを変更する。）
・判定タイミング：対象がブラウザの下から 30%以上 入ったら実行、画面から出たら戻す
*/
  // スクロール出現用関数（.offs ⇄ .ons）
  function scr_ani(scr, offs_max) {
    var window_h = $(window).height(),
      offs_length = $(".offs").length,
      ons_length = $(".ons").length;
    if (offs_length) {
      var first_item = offs_max - offs_length;
      for (var i = 0; i < offs_length; i++) {
        var data_scr = first_item + i;
        var offs = $('.offs[data-scr="' + data_scr + '"]');
        var target = offs.offset().top;
        var trigger = target - (window_h + scr - window_h * 0.3);
        if (trigger < 0) {
          offs.removeClass("offs").addClass("ons");
        } else {
          break;
        }
      }
    }
    if (ons_length) {
      var last_item = ons_length - 1;
      for (var i = 0; i < ons_length; i++) {
        var data_scr = last_item - i;
        var ons = $('.ons[data-scr="' + data_scr + '"]');
        var target = ons.offset().top;
        var trigger = target - (window_h + scr);
        if (trigger > 0) {
          ons.removeClass("ons").addClass("offs");
        } else {
          break;
        }
      }
    }
  }
  $(function () {
    /*
    スクロール出現
    */
    var scr = $(window).scrollTop();
    // スクロール出現アイテムにナンバリング
    var offs_max = $(".offs").length;
    for (var i = 0; i < offs_max; i++) {
      $(".offs").eq(i).attr("data-scr", i);
    }
    scr_ani(scr, offs_max);
    /************
    スクロール時
    ************/
    $(window).on("scroll", function () {
      var scr = $(window).scrollTop();
      /*
      スクロール出現
      */
      scr_ani(scr, offs_max);
    }); // end scroll
  }); // end function
}