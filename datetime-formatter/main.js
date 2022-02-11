$(function() {
  $(".datepicker").on("focusout", function() {
    const date = $(this).val();
    const delimiter = "-";
    const pattern = /\d{6}/;
    if (date.match(pattern)) {
      const y = date.substring(0, 4).padStart(4, "0");
      const m = date.substring(5, 6).padStart(2, "0");
      const d = date.substring(7, 8).padStart(2, "0");
      const result = [y, m, d].join(delimiter);
      $(this).val(result);
    }
  });

  $(".timepicker").on("focusout", function() {
    const time = $(this).val();
    const delimiter = ":";
    const pattern = /\d{4}/;
    if (time.match(pattern)) {
      const h = time.substring(0, 2).padStart(2, "0");
      const m = time.substring(3, 4).padStart(2, "0");
      const result = [h, m].join(delimiter);
      $(this).val(result);
    }

  });

});