registerTest ('"The form cannot be submitted if the enquiry type is 'Product
      complaint' and product name, product size, use-by date and batch code
      are empty."', {
    setup: function($) {
        this.sourceCode = this.page.source;
        this.analyticsMatchDummyString = "UA-XXXXX-X";
    },
    load : function($) {
        this
        .test("The form cannot be submitted if the enquiry type is 'Product
      complaint' and product name, product size, use-by date and batch code
      are empty.",function($) {
            var enqType = $("#enqType").val();
            if (enqType == "Product complaint") {
                 ok(  $("#productName").val() != null &&  $("#productName").val() != "", "Required field productName is empty!" );
                 ok(  $("#productSize").val() != null &&  $("#productSize").val() != "", "Required field productSize is empty!" );
                 ok(  $("#usebyDate").val() != null &&  $("#usebyDate").val() != "", "Required field usebyDate is empty!" );
                 ok(  $("#batchCode").val() != null &&  $("#batchCode").val() != "", "Required field batchCode is empty!" );
            }
        });
    }
});
