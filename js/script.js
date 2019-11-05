$(document).ready(function() {

  var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  $(".user_opt_btn > img").click(function() {
    $(".user_opt_list").toggleClass("show_user_opt");
    $(".user_notify_list").removeClass("show_user_opt");
  });
  $(".user_notify_btn").click(function() {
    $(".user_notify_list").toggleClass("show_user_opt");
    $(".user_opt_list").removeClass("show_user_opt");
  });

  $(".page_container").click(function () {
    $(".user_notify_list").removeClass("show_user_opt");
    $(".user_opt_list").removeClass("show_user_opt");
  });

  $(".items, .join_trip_btn, .card, .t_view_btn").click(function() {
    $(".lightbox").css({
      'visibility': 'visible',
      'opacity': '1'
    });
  });

  $(".item_close, .abt_ride_close, .t_view_close").click(function() {
    $(".lightbox").css({
      'visibility': 'hidden',
      'opacity': '0'
    });
  });

  $(".phn_nav_btn > button").click(function() {
    $(".phn_nav_btn").hide();
    $(".phn_lightbox").css({
      'visibility': 'visible',
      'opacity': '1'
    });
    $(".phn_navbar").css('bottom','0px');
  });

  $(".phn_menu_close > button").click(function() {
    $(".phn_nav_btn").show();
    $(".phn_lightbox").css({
      'visibility': 'hidden',
      'opacity': '0'
    });
    $(".phn_navbar").css('bottom','-55%');
  });

  // -- Main page Image carousel
  $('.carousel').carousel({
    fullWidth: true
  });
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3500);
  }
  autoplay();


  $(".rider_footer_right > button").click(function () {
    $(this).addClass('hide');
    $(".rider_footer_right > span").removeClass('hide');
  });


  $(".cart_item_delete > button").click(function () {
    var del_btn = $(this).parent();
    del_btn.parent().css('visibility','collapse');
  });

  $(".post_txt_box > input").focus(function () {
    $(".post_txt_box_border").css('left','0px !important');
  });

  // -- USer Follow btn
  $(".usr_follow_btn").click(function () {
    $(".usr_follow_btn > button:nth-child(1)").toggleClass('hide');
    $(".usr_follow_btn > button:nth-child(2)").toggleClass('hide');
  });

});
