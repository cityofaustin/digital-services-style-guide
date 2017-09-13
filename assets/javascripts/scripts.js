/**
 * togglePressed() toggles the aria-pressed atribute between true or false
 *
 * @param ( id object) button to be operated on
 *
 * @return N/A
 */
function togglePressed(element) {

  // reverse the aria-pressed state
  if (element.attr('aria-pressed') == 'true') {
    element.attr('aria-pressed', 'false');
  }
  else {
    element.attr('aria-pressed', 'true');
  }
}

var initMobileMenus = function() {

  var html = $("html");

  var menuButton = $("#drawer-button--menu");
  menuButton.click(function () {
    html.toggleClass("drawer-open--menu");
    togglePressed(menuButton);
  });

  var translateButton = $("#drawer-button--translate");
  translateButton.click(function () {
    html.toggleClass("drawer-open--translate");
    if (html.hasClass("drawer-open--translate")) {
      $(window).scrollTop(0);
    }
    togglePressed(translateButton);
  });

}

var initLinkAttributes = function() {

  $("a").each(function() {
    var is_relative = new RegExp("//" + window.location.host + "/");
    var is_file = new RegExp(".pdf");
    var is_tel = new RegExp("tel:+")
    if (!is_relative.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--external");
    }
    if (is_file.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--file");
    }
    if (is_tel.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--phone");
    }

  });
}


$(document).ready(function(){
  initMobileMenus();
  initLinkAttributes();
});
