$('.menu').tabify();

$(document).ready(function() {

	$.getJSON('../kandidaadid.json',null , function(json_data){
	
	    var table = '';
	    $.each(json_data, function(index, item){
	         table += '<tr id="'+item.id+'"><td>'+item.person.name+'</td><td>'+item.region.name+'</td><td>'+item.party.name+'</td><td>'+item.vote_number+'</td></tr>';
	    })
	    $('#result_table').append(table);
	})
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

$('#loading')
.hide() 
.ajaxStart(function() {
    $(this).show();
})
.ajaxStop(function() {
    $(this).hide();
})
;