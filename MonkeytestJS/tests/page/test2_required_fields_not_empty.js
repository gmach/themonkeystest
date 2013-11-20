registerTest ('All required fields not empty?', function () {
    this
  .test('Required Fields empty should not be processed', function($) {       
        $("form input[type='text'][required='required']").each(function() {
            var val = $(this).val('');
        });
        $("input[type='submit']").click(); // Simulate clicking submit
        var results = $('#results').html();
        equal( results, '', "Required fields are empty but is submitted!" );
    })
    .wait(function() {
            var that = this;

            setTimeout(function(){
                // this will cause the wait to exit on 2 sec because it makes expression true before the timeout
                that.expressionGettingValid = true;
            },2000);

            return this.expressionGettingValid; 

    }, 5000) // wait 5 seconds ( Pause execution of tests per duration )

    .test('Required Fields filled should now be processed', function($) {
        $('#firstName').val('Gavin');
        $('#surName').val('Mach');
        $('#email').val('gavinmach@abc.com');
        $('#dcNumber').val('0294853456');
        $('#address').val('12 Elm St');
        $('#suburb').val('Sydney');
        $('#state').val('VIC');
        $('#postcode').val('3000');
        $('#enqType').val('Product feedback or enquiry');
        /*
        $('#productName').val('Nike Shoes');
        $('#productSize').val('12');
        $('#usebyDate').val('12/12/2013');
        $('#batchCode').val('39ED340D5');
        $('#enquiry').val('This product is broken!');
        */
        $("input[type='submit']").click();
        var results = $('#results').html();
        notEqual( results, '', "Required fields are filled but results are still empty!" );
    });
});
