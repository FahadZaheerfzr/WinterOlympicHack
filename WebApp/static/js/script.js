(function () {
  var quiz;

  $(document).ready(function () {
    return quiz.init();
  });

  quiz = {
    init: function () {
      return this.bind_events();
    },
    bind_events: function () {
      return $(document).on("click", ".btn-check", function (e) {
        return quiz.check();
      });
    },
    check: function () {
      var Estimate, correct, i, incorrect;
      i = 1;
      correct = 0;
      incorrect = 0;
      $(".question").each(function () {
        var checked_count, correct_checked, correct_count, val;
        val = $("input:radio[name='question-" + i + "']:checked").val();
        correct_count = 0;
        correct_checked = 0;
        checked_count = 0;
        $("input:checkbox[name='question-" + i + "']").each(function () {
          if ($(this).attr("value") === "true") {
            correct_count++;
            if ($(this).is(":checked")) {
              correct_checked++;
            }
          }
          if ($(this).is(":checked")) {
            return checked_count++;
          }
        });
        if (correct_count > 0 && correct_count === correct_checked && checked_count === correct_count) {
          val = "true";
        }
        $(this).removeClass("success error");
        if (val === "true") {
          $(this).addClass("success");
          correct++;
        } else {
          $(this).addClass("error");
          incorrect++;
        }
        return i++;
      });
      Estimate = "";
      if (correct === 0) {
        Estimate = "0/10";
      }
      if (correct === 1) {
        Estimate = "1/10";
      }
      if (correct === 2) {
        Estimate = "2/10";
      }
      if (correct === 3) {
        Estimate = "3/10";
      }
      if (correct === 4) {
        Estimate = "4/10";
      }
      if (correct === 5) {
        Estimate = "5/10";
      }
      if (correct === 6) {
        Estimate = "6/10";
      }
      if (correct === 7) {
        Estimate = "7/10";
      }
      if (correct === 8) {
        Estimate = "8/10";
      }
      if (correct === 9) {
        Estimate = "720-760";
      }
      if (correct === 10) {
        Estimate = "760+";
      }
      return $(".result").html("Your Score is: " + Estimate + "!").show();
    } };


}).call(this);


//# sourceURL=coffeescript