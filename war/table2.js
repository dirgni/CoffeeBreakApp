//$.getJSON("kandidaadid.json" , function(data) {
//    var tbl_body = "";
//    $.each(data, function() {
//        var tbl_row = "";
//        $.each(this, function(k , v) {
//            tbl_row += "<td>"+v+"</td>";
//        })
//        tbl_body += "<tr>"+tbl_row+"</tr>";                 
//    })
//    $("#mytable tbody").html(tbl_body);
//});
//var json = [{"member_id":"2","comment":"kkk"},{"member_id":"1","comment":"this is admin 2"},{"member_id":"2","comment":"kkk"},{"member_id":"1","comment":"this is admin"}];
//$.each(json, function(i, data){
//$("table.table").append("<tr><td>" + data.member_id + "</td><td>" + data.comment + "</td></tr>");
//})    
//$.ajax({
//    url: 'kandidaadid.json',
//    dataType: 'json',
//    success: function(data) {
//        var $tr =$('<tr>').addClass('header');
//        $.each(data.headers, function(i,header){
//            $tr.append($('<th>').append($('a').addClass('sort').attr('href','#').append($('span').text(header))));
//        });
//        $tr.appendTo('table.data');
//        $.each(data.rows,function(i){
//            $('<tr>').attr('id',i).
//                append($('<td>').text(person.name)).
//                append($('<td>').text(row.company)).
//                append($('<td>').text(row.location)).appendTo('table.data');
//        });
//    }
//});
$(document).ready(function() {

	$.getJSON('kandidaadid.json',null , function(json_data){
	
	    var table = '<table class="sortable">';
	    table += '<tr><th>Nimi</th><th>Piirkond</th><th>Erakond</th><th>H‰‰lte arv</th></tr>';
	    $.each(json_data, function(index, item){
	         table += '<tr id="'+item.id+'"><td>'+item.person.name+'</td><td>'+item.region.name+'</td><td>'+item.party.name+'</td><td>'+item.vote_number+'</td></tr>';
	    })
	    table +='</table>';
	    $('#result_table').append(table);
	})
	$('#result_search').keyup(function(){
				searchTable($(this).val());
	});
})

function searchTable(inputVal)
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