$.fn.bootstrapSwitch.defaults.onText = 'pallet';
$.fn.bootstrapSwitch.defaults.offText = 'parcell';
$.fn.bootstrapSwitch.defaults.offColor = 'primary';
$(".switch").bootstrapSwitch();

$("body").on("click", "#add", function() {
    var i = 1 + $('[id*="switch_"]').length;
    $(".sub_form_section").last().append("<div class=\"sub_form\"><div class=\"sub_form_row\"><div id=\"switch_" + i + "\"" + " class=\"bootstrap-switch-container\"><input id=\"switch-state_" + i + "\"" + " type=\"checkbox\" checked=\"checked\" class=\"switch\"></div><div class=\"parcell_form hide\"><div class=\"input_item parcell col-lg-3\"><label for=\"Weight\">Weight:</label><div class=\"input-group\"><input id=\"Weight\" name=\"Weight\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Kg</span></div></div><div class=\"input_item parcell col-lg-3\"><label for=\"Length\">Length:</label><div class=\"input-group\"><input id=\"Length\" name=\"Length\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Cm</span></div></div><div class=\"input_item parcell col-lg-3\"><label for=\"Width\">Width:</label><div class=\"input-group\"><input id=\"Width\" name=\"Width\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Cm</span></div></div><div class=\"input_item parcell col-lg-3\"><label for=\"Heigth\">Heigth:</label><div class=\"input-group\"><input id=\"Heigth\" name=\"Heigth\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Cm</span></div></div></div><div class=\"pallet_form\"><div class=\"input_item pallet col-lg-3\"><label for=\"Number-of-pallets\">Number of pallets:</label><div class=\"input-group\"><input id=\"Number-of-pallets\" name=\"Number-of-pallets\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Pcs</span></div></div><div class=\"input_item pallet col-lg-3\"><label for=\"Height\">Height:</label><div class=\"input-group\"><input id=\"Heigth\" name=\"Heigth\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Cm</span></div></div><div class=\"input_item pallet col-lg-3\"><label for=\"Weight-for-pallet\">Weight for pallet:</label><div class=\"input-group\"><input id=\"Weight-for-pallet\" name=\"Weight-for-pallet\" value=\"\" type=\"text\" class=\"form-control\"><span class=\"input-group-addon\">Kg</span></div></div></div></div></div>")
    $("#switch-state_" + i).bootstrapSwitch();
});

$("#remove").click(function() {
    $(".sub_form").last().remove()
});


$('body').on("switchChange.bootstrapSwitch", ".bootstrap-switch-container", function() {
    console.log($(this));
    $(this).siblings(".parcell_form").toggleClass("hide");
    $(this).siblings(".pallet_form").toggleClass("hide");
});

function createObject(form){
	var userModel = {};
	$(form).find('input').each(function(i, element){
	   userModel[element.id] = element.value;
	});
	return userModel;
}

$('form').submit(function(event) {
	var userObject = createObject(this);
	console.log(userObject);

        $.ajax({
            type        : 'POST',
            url         : './res.php',
            data        : userObject,
            dataType    : 'json',
            encode      : true
        })
            .done(function(data) {
                console.log(data); 
            });
        event.preventDefault();
    });