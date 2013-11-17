registerTest ('All required fields not empty?', function () {
    this
    .test('All required fields not empty?', function($) {
        var sourceCode = this.page.source.toLowerCase();
        $("form input[type='text'][required='required']").each(function() {
            var name = $(this).attr("name");
            var val = $(this).val(); 
            ok( val != null && val != "", "Required field " + name + " is empty!" );
        });
        $("form select[required='required']").each(function() {
            var name = $(this).attr("name");
            var val = $(this).val(); 
            ok( val != null && val != "", "Required field " + name + " is empty!" );
        });
        
    });
});
