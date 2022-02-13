$(function() {
  const drawer = $(".drawer");
  const blur = $(".drawer-blur");
  $(".btn-drawer").on("click", () => {
    openDrawer();
  });

  // ボタン以外のクリック時
  blur.on("click", () => {
    openDrawer();
  });

  const openDrawer = () => {
    drawer.toggleClass("drawer-active");
    blur.toggleClass("drawer-active");
  }

  $(".drawer-item").on("click", function(e) {
    const items = $(this).children(".drawer-items");
    if (items.length) {
      $(this).toggleClass("accordion-active");
      items.stop().slideToggle(300).css("display", "block");
    }
    e.stopPropagation();
  });
});