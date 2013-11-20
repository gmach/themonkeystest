registerTest ('The form cannot be submitted if the enquiry type is Product complaint and product name, product size, use-by date and batch code are empty.', function () {
    this
  .test('Form should be submitted if enquiry type is not Product Complaint', function($) {       
        $('#firstName').val('Bob');
        $('#surName').val('Brown');
        $('#email').val('bob@abc.com');
        $('#dcNumber').val('49578585');
        $('#address').val('55 Lane St');
        $('#suburb').val('Burwood');
        $('#state').val('QLD');
        $('#postcode').val('7000');
        $('#enqType').val('Product feedback or enquiry');
        $("input[type='submit']").click();
        var results = $('#results').html();
        notEqual( results, '', "Required fields are filled but results are still empty!" );
        $('#results').empty();
    })
    .wait(function() {
            var that = this;

            setTimeout(function(){
                // this will cause the wait to exit on 2 sec because it makes expression true before the timeout
                that.expressionGettingValid = true;
            },2000);

            return this.expressionGettingValid; 

    }, 5000) // wait 5 seconds ( Pause execution of tests per duration )

    .test('If enquiry type is Product complaint and product name, product size, use-by date and batch code are empty then form should not be processed', function($) {
        $('#firstName').val('Sarah');
        $('#surName').val('Connors');
        $('#email').val('sarah@abc.com');
        $('#dcNumber').val('048830336');
        $('#address').val('84/14 Pine Ave.');
        $('#suburb').val('Parramatta');
        $('#state').val('WA');
        $('#postcode').val('5000');
        $('#enqType').val('Product complaint');
        $('#productName').val('');
        $('#productSize').val('');
        $('#usebyDate').val('');
        $('#batchCode').val('');
        $("input[type='submit']").click();
        var results = $('#results').html();
        equal( results, '', "Form was processed even though enquiry type is Product complaint and product name, product size, use-by date and batch code are empty!" );
    })
    .wait(function() {
            var that = this;

            setTimeout(function(){
                // this will cause the wait to exit on 2 sec because it makes expression true before the timeout
                that.expressionGettingValid = true;
            },2000);

            return this.expressionGettingValid; 

    }, 5000) // wait 5 seconds ( Pause execution of tests per duration )

    .test('If enquiry type is Product complaint and product name, product size, use-by date and batch code are filled then form should now be processed', function($) {
        $('#productName').val('Nike Shoes');
        $('#productSize').val('12');
        $('#usebyDate').val('12/12/2013');
        $('#batchCode').val('39ED340D5');
        $("input[type='submit']").click();
        var results = $('#results').html();
        notEqual( results, '', "Enquiry type is Product complaint and all required fields are filled but results are still empty!" );       
    });
});
