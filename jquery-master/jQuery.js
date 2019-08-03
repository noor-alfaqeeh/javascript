/*
Q1:
Check if jQuery is loaded
*/
$(function (){
	$('#q1').html("I loaded it");
})

/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$(function(){
	$('#goTop').click(function() {
  $("html,body").animate({ scrollTop: 0 }, "slow");  
});
})


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$(function(){
	$("#btn1").click(function(){
		$("#box").animate({
			height: '+=150px',
			width: '+=150px'
		});
	});
});

$(function(){
	$("#btn2").click(function(){
		$("#box").animate({
			height: '150px',
			width: '150px'
		});
	});
});

/*
Q4:
Learn how to fadein your boxes
*/

$(function(){
	$('#btnF').click(function(){
		$('#div1').fadeIn();
		$('#div2').fadeIn('fast');
		$('#div3').fadeIn(2000);

	});
});

/*
Q5:
User must first accept then he or she can signup
*/

$(function(){
	$('#accept').click(function(){
		$('#submitbtn').attr('disabled',!this.checked);
	})
})

/*
Q6:
Let them print
*/

	$('.printPage').click(function(){
		 window.print();
	})


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

$(function(){
	$('#textarea').attr('maxLength','20');
})


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(function (){
	$('.p1').css({fontWeight : 'bold'});
})


/*
Q9:
Add new div to your website
*/

$(function (){
	$('#a').click(function(){
		$('#a').after("<div> Here should be some text probably with some sense within but its friday so im really really tired </div>" );
	});
})


/*
Q10:
Select values from a JSON object using jQuery
*/

/*
Q11:
Add element within ul list
*/

$(function(){
	$('#btnclick').click(function(){
		$('#header li:last').append('<li><a href="#">Noor</li>');
	})

})
/*
Q12:
Know what user puts into textbox
*/

$(function(){
	$('#usertext').change(function(){
		var text =$('#usertext').val();
		$('#usertext').after(text);
	})
})




/*
Q13:
Change input value
*/

$(function(){
$('#button').attr('value', 'Hello Noor');
})



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 