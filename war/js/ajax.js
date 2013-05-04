$(document).ready(function() {

	$.getJSON('/kandidaadid',null , function(json_data){
	
	    var table = '';
	    $.each(json_data, function(index, item){
	         table += '<tr id="'+item.id+'"><td>'+item.person.name+'</td><td>'+item.region.name+'</td><td>'+item.party.name+'</td><td>'+item.votes+'</td></tr>';
	    })
	    $('#result_table').append(table);
	});
	
	//Stops the submit request 
	$("#searchPiirkond").submit(function(e){       
		e.preventDefault();    
	}); 
	
	//checks for the button click event 
    $("#sButtonPiirkond").click(function(e){ 
    	    	
    	//get the form data            
    	var region = $("select").val();              
    	dataString = "searchReg=" + region; 
	
    	 $.ajax({
    		 type: "GET",              
			 url: "/piirkond",              
			 data: dataString,                
			 dataType: "json", 
			 
			 //if received a response from the server                 
			 success: function(data) {
				 console.debug(data);				 
				 if(data == '[]'){ 
					 $("#piirkond_table").append("<tr><td><b>Ei</b></td><td><b>leidnud</b></td><td><b>ühtegi</b></td><td><b>kandidaati</b></td></tr>"); 
				 }
				 else {    
					 var table = '';
					 $.each(data, function(index, item){
				         table += '<tr id="'+item.id+'"><td>'+item.person.name+'</td><td>'+item.region.name+'</td><td>'+item.party.name+'</td><td>'+item.votes+'</td></tr>';
				     })
				     $('#piirkond_table').append(table);      
				 } 
			 },
		 
			 //If there was no resonse from the server                 
			 error: function(jqXHR, textStatus, errorThrown){                      
				 console.log("Tekkis viga " + textStatus + ": " + errorThrown);                       
				 $("#piirkond_table").html(jqXHR.responseText);                 
			 },                                  
				 
			 //capture the request before it was sent to server                 
			 beforeSend: function(jqXHR, settings){				 
				 //adding some Dummy data to the request                     
				 settings.data += "&dummyData=whatever";                     
				 //disable the button until we get the response                     
				 $('#sButtonPiirkond').attr("disabled", true);                 
			 },                                  
					 
			 //this is called after the response or error functions are finsihed                 
			 //so that we can take some action                 
			 complete: function(jqXHR, textStatus){                     
				//enable the button
				$('#sButtonPiirkond').attr("disabled", false);                 
			 } 
		});
    });
	
	$('#result_search').keyup(function(){
		searchTable_result($(this).val());
	});
	$('#riik_search').keyup(function(){
		searchTable_riik($(this).val());
	});
	$('#piirkond_search').keyup(function(){
		searchTable_piirkond($(this).val());
	});
	$('#partei_search').keyup(function(){
		searchTable_partei($(this).val());
	});
	$('#kandidaadid_search').keyup(function(){
		searchTable_kandidaadid($(this).val());
	});
	$('#haaleta_search').keyup(function(){
		searchTable_haaleta($(this).val());
	});	
	$('#kandidaadid_info_search').keyup(function(){
		searchTable_kandidaadid_info($(this).val());
	});
})

function searchTable_result(inputVal)
{
	var table = $('#result_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_riik(inputVal)
{
	var table = $('#riik_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_piirkond(inputVal)
{
	var table = $('#piirkond_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_partei(inputVal)
{
	var table = $('#partei_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_kandidaadid(inputVal)
{
	var table = $('#kandidaadid_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_haaleta(inputVal)
{
	var table = $('#haaleta_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

function searchTable_kandidaadid_info(inputVal)
{
	var table = $('#kandidaadid_info_table');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}

$('#loading')
.hide() 
.ajaxStart(function() {
    $(this).show();
})
.ajaxStop(function() {
    $(this).hide();
})
;

$('#reg_me').on('click', function () {
    $('#container_registreeri, #overlay-back').fadeIn(500);
});

$('#reg_canc').on('click', function () {
    $('#container_registreeri, #overlay-back').fadeOut(500);
});


var myVal = "0";
$("input:radio[name=valik]").click(function() {
	myVal = $(this).val();
});

$('#confirm').on('click', function() { DisableFields(myVal)});
$('#cancel_v').on('click', function() { AbleFields()});

function DisableFields(value){
	if (value!="0") {
		$('.radioSel').attr('disabled','true');
		document.getElementById("confirm").style.visibility = "hidden";
		document.getElementById("cancel_v").style.visibility = "visible";
	}
};

function AbleFields(){
	myVal="0";
	$('.radioSel').removeAttr('disabled');
	document.getElementById("confirm").style.visibility = "visible";
	document.getElementById("cancel_v").style.visibility = "hidden";
};


//function maasikas(){
//	document.getElementById("kandideerin_vorm").style.visibility = "hidden";
//	document.getElementById("kandideerin_info").style.visibility = "visible";
//};
//
//$('#canc_kandidatuur').on('click', function(){
//	document.getElementById("kandideerin_vorm").style.visibility = "visible";
//	document.getElementById("kandideerin_info").style.visibility = "hidden";
//});
