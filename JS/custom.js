/* 
- toggleClass method in jQuery is used to add CSS class from selected elements
- Without the open class: The section is collapsed.
- With the open class: The section is expanded.
*/

//for controling icons

// Add `open` class CSS for `:after` dynamically
$("head").append(
  '<style>.footer-links-wrapper h3.open:after { content: "\\f00d"; }</style>'
);
function showAndHide() {
  const isMobile = $(window).width() <= 768; //741//819
  $(".footer-links-wrapper h3").off("click");
  if (isMobile) {
    $(".footer-links-wrapper h3").on("click", function () {
      $(this).toggleClass("open").next("ul").slideToggle(); //event.target x
    });
  } else {
    $(".footer-links-wrapper h3").removeClass("open"); //x
    $(".footer-links-wrapper ul").removeAttr("style");
  }
}
showAndHide();
$(window).on("resize", showAndHide);

//

/* $(".footer-links-wrapper h3").each(function () {
  $(this).on("click", function () {
    let abc = $(this);

    $(".footer-links-wrapper ul")
      .not(abc.next("ul"))
      .slideUp(function () {
        $(".footer-links-wrapper h3").not(abc).removeClass("expanded");
      });

    abc.next("ul").slideToggle(function () {
      abc.toggleClass("expanded");
    });
  });
}); */
