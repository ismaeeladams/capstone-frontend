<template>
  <div>
    <h1>Abu is a bitch</h1>
    <h3>Range</h3>
    <div class="ui form">
      <div class="two fields">
        <div class="field">
          <label>Start date</label>
          <div class="ui calendar" id="rangestart">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input type="text" placeholder="Start" />
            </div>
          </div>
        </div>
        <div class="field">
          <label>End date</label>
          <div class="ui calendar" id="rangeend">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input type="text" placeholder="End" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <datepicker
      v-model="example2"
      :upper-limit="example2_to"
      :lower-limit="example2_from"
    />
    <input type="text" name="datefilter" value="" />

    <button><router-link to="/checkout">checkout plz</router-link></button>
  </div>
</template>

//

// export default {};
//

<script type="text/javascript">
$(function () {
  $('input[name="datefilter"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="datefilter"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("MM/DD/YYYY") +
          " - " +
          picker.endDate.format("MM/DD/YYYY")
      );
    }
  );

  $('input[name="datefilter"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
});
</script>

<style scoped></style>