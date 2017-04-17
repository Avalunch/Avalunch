/**
 * Created by Xla on 4/17/17.
 */

$(function () {

  $('.right-menu a').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');


    var tab = $(this).attr('href').replace('#','.');
    $('.content>div').removeClass('open');
    $(tab).addClass('open');

  });


});
