var toggleCollapseIcon = function (id) {
  $("#"+id+" i").toggleClass("icon-minus");
  $("#"+id+" i").toggleClass("icon-plus");   
};

var toggleCollapseCaret = function (id) {
  $("#"+id+" .caret_div").toggleClass("icon_caret_right");
  $("#"+id+" .caret_div").toggleClass("icon_caret_down");   
};

$("#id_delivers").click(function(event){
    $("").toggleClass("hidden");
    $("").toggleClass("visible");
});

$('.carousel').carousel({
    interval: false
});





/********** HOW IT WORKS ***********/

//howItWorks hover steps

$("#button-one").hover(
	function(){
		$("#button-one").click();
	},
	function(){
		$("#button-one").click();
});

$("#button-two").hover(function(){
		$("#button-two").click();
	},
	function(){
		$("#button-two").click();
});
$("#button-three").hover(function(){
		$("#button-three").click();
	},
	function(){
		$("#button-three").click();
});

$("#button-four").hover(function(){
		$("#button-four").click();
	},
	function(){
		$("#button-four").click();
});


/***
$('.steps').hover(function(){
		$('.instrucHow').toggle();
});

$('.firstDiv').wrapAll('<div class="span12" />');
$('.secondDiv').wrapAll('<div class="span12" />');
****/


//Utilities

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function asMoney(amount) {
	//Takes an mount and returns it with two decimal places.
	var split = String(amount).split(".");
	
	if (split.length === 1) {
		var new_amt = amount + ".00";
	} else if (split.length === 2) {
		var decimals = split[1];

		switch(decimals.length){
			case 1:
				var new_amt = amount+"0";
				break;
			case 2:
				var new_amt = amount;
				break;
			default:
				//Could add some rounding.
				split[1] = split[1].substring(0, 2);
				var new_amt = split.join(".");
		}
		
	} else {
		console.log("asMoney Error: Number with more than one period.");
	}

	return new_amt;

}

/**********************************
          Landing Page
**********************************/
currentIndx=0;


function chooseImage(){
	var image = $("#landingImage");
// create array and fill it with images
	landingArray = new Array();
	landingArray[0] = "/img/ecommerce1.jpg";
	landingArray[1] = "/img/ecommerce2.jpg";
	landingArray[2] = "/img/ecommerce3.jpg";
	landingArray[3] = "/img/ecommerce4.jpg";
	landingArray[4] = "/img/ecommerce5.jpg";
//get random index number
	var randomIdx = Math.round(Math.random()*4);
	var chosenImage = landingArray[randomIdx];
//display random image
	image.attr("src", chosenImage);
}

$("#loginButton").hover(
	function(){
		$("#loginButton img").attr('src', '/img/login_down_dark.png');
	},
	function(){
		$("#loginButton img").attr('src', '/img/login_down.png');
	}
);

/*function loginIconChange() {
	if ($("#loginButton").hasClass('active')){
		$("#loginButton img").attr('src', '/img/login_up.png');
	}
	else {
		$("#loginButton img").attr('src', '/img/login_down.png');
		$("#loginButton").hover(
			function(){
				$("#loginButton img").attr('src', '/img/login_down_dark.png');
			},
			function(){
				$("#loginButton img").attr('src', '/img/login_down.png');
			}
		);
	}
}
*/
/**********************************
          Pricing
**********************************/

$(".pcorp").hover(
  function () {
    $(".pcorp").addClass("selectedPlan");
  },
  function () {
    $(".pcorp").removeClass("selectedPlan");
  }
);

$(".pent").hover(
  function () {
    $(".pent").addClass("selectedPlan");
  },
  function () {
    $(".pent").removeClass("selectedPlan");
  }
);

$(".pemp").hover(
  function () {
    $(".pemp").addClass("selectedPlan");
  },
  function () {
    $(".pemp").removeClass("selectedPlan");
  }
);

$(".pcorp, .pent, .pemp").hover(
  function () {
    $(".lr").addClass("sP");
  },
  function () {
    $(".lr").removeClass("sP");
  }
);

$("#pricingFormBtn").click(function(){
	var valid = validateField('pricing-email', true);
	if (valid){
		$(".alert-message").remove();
		$("#pricingForm").ajaxSubmit();
		$("#pricingForm, .contentFormPri").removeClass("withError");
		$("#project_header").after('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-success"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Gracias!</h4>Tu mensaje ha sido enviado exitosamente.</div></div></div>');
	}
	else{
		$(".alert-message").remove();
		$("#pricingForm, .contentFormPri").removeClass("withError");
		$("#project_header").after('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Error!</h4>Tu mensaje no se pudo enviar. Por favor corrige los errores señalados.</div></div></div>');
		$("#pricingForm, .contentFormPri").addClass("withError");
	}
});



/**********************************
          Contact Us
**********************************/

$("#contactus-email").change( function(){ validateField('contactus-email', true)});
$("#contactus-name").change( function(){ validateField('contactus-name', true)});
$("#contactus-message").change( function(){ validateField("contactus-message",true)});

$("#contactUsFormBtn").click(function(){
	var valid_user_email = validateField('contactus-email', true);
	var valid_name = validateField('contactus-name', true);
	var valid_message = validateField("contactus-message",true);
	var valid = valid_user_email && valid_name && valid_message;
	if (valid){
		$("#contactUsForm").ajaxSubmit();
		$(".alert-message").remove();
		$("#project_header").after('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-success"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Gracias!</h4>Tu mensaje ha sido enviado exitosamente.</div></div></div>');
	}
	else{
		$(".alert-message").remove();
		$("#project_header").after('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Error!</h4>Tu mensaje no se pudo enviar. Por favor corrige los errores señalados.</div></div></div>');
	}
});


/**********************************
                FAQ
**********************************/

$("#faq-email").change( function(){ validateField('faq-email', true)});
$("#faq-name").change( function(){ validateField('faq-name', true)});
$("#faq-message").change( function(){ validateField("faq-message",true)});

$("#faqFormBtn").click(function(){
	var valid_user_email = validateField('faq-email', true);
	var valid_name = validateField('faq-name', true);
	var valid_message = validateField("faq-message",true);
	var valid = valid_user_email && valid_name && valid_message;
	if (valid){
		$("#faqForm").ajaxSubmit();
		$(".alert-message").remove();
		$("#faqFormWrapper").before('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-success"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Gracias!</h4>Tu mensaje ha sido enviado exitosamente.</div></div></div>');
	} else{
		$(".alert-message").remove();
		$("#faqFormWrapper").before('<div class="container alert-message"><div class="row-fluid"><div class="span12 alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">×</a><h4 class="alert-heading">¡Error!</h4>Tu mensaje no se pudo enviar. Por favor corrige los errores señalados.</div></div></div>');
	}
});

/**********************************
              Editor
**********************************/
function initializeToolbar() {
	$("#font-color-picker").val($('#font_color').val());
	$("#font-color-bar").attr("style", "background-color:#"+ $("#font-color-picker").val());

	$("#background-color-picker").val($('#background_color').val());
	$("#background-color-bar").attr("style", "background-color:#"+ $("#background-color-picker").val());
	
	$("#bar-font-color-picker").val($('#title_color').val());
	$("#bar-font-color-bar").attr("style", "background-color:#"+ $("#bar-font-color-picker").val());
	
	$("#bar-background1-color-picker").val($('#title_background_color1').val());
	$("#bar-background1-color-bar").attr("style", "background-color:#"+ $("#bar-background1-color-picker").val());
	
	$("#bar-background2-color-picker").val($('#title_background_color2').val());
	$("#bar-background2-color-bar").attr("style", "background-color:#"+ $("#bar-background2-color-picker").val());
};

function updateOriginalToolbar() {
	$('#font_color').val($("#font-color-picker").val());

	$('#background_color').val($("#background-color-picker").val());
	
	$('#title_color').val($("#bar-font-color-picker").val());
	
	$('#title_background_color1').val($("#bar-background1-color-picker").val());
	
	$('#title_background_color2').val($("#bar-background2-color-picker").val());
};

function toolbar(tool_id) {
	$(".c-chooser").hide();

	$("#"+tool_id+"-btn").click(function() {
		$("#"+tool_id+"-btn .c-chooser").show();
		document.getElementById(""+tool_id+"-picker").color.showPicker();
		$("#"+tool_id+"-btn .c-chooser").append($('.picale'));
	});

	$(document).click(function(){
	    $("#"+tool_id+"-btn .c-chooser").hide();
	});


	$("#"+tool_id+"-btn").click(function(e){
	    e.stopPropagation();
	});


	$("#"+tool_id+"-picker").change(function() {
		var bar_color = $("#"+tool_id+"-picker").val();
		$("#"+tool_id+"-bar").attr("style", "background-color:"+ bar_color);
		updateOriginalToolbar();
	});
};
