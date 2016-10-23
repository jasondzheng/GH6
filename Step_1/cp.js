document.addEventListener("DOMContentLoaded", homeload);

var usrname;
var usrId="";
var token;
var markers = [];
var content = [];
var centerLat = 38.6270;
var centerLng = -90.1994;
var map;
// var infowindow;
// var infowindows = [];
var infoBubbles = [];

//This functoon loads the map when the website is first loaded
function homeload(){
	//Centers at location
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(centerLat, centerLng),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var pdata;
	$.ajax({type:'POST', url: 'fetchInfo.php', data: pdata, dataType: 'json', success: function(response) {

		var marker, i;

		for (i = 0; i < response.length; i++) {  
			//Creates each of the contents for each marker
			content[i] = '<div><div class=shelter_name style="text-align: center; font-family: Calibri; font-color: "white"">' + response[i].shelter_name + '</div>';
			content[i] += '<div class="beds">Beds: '+response[i].bed[0].bed_avail+'</div>';
			content[i] +='<div class="food">Food: '+ response[i].food[0].food_avail+'</div>';
			content[i] += '</div>';

			marker = new google.maps.Marker({
				position: new google.maps.LatLng(response[i].lat, response[i].lng),
				map: map,
				icon: 'home.png'
			});
			// infowindows[i] = new google.maps.InfoWindow();
			// markers[i] = marker;
			// infowindows[i].setContent(content[i]);
			// infowindows[i].open(map, marker);

			infoBubbles[i] = new InfoBubble({
	      map: map,
	      content: content[i],
	      shadowStyle: 0,
	      padding: 5,
	      backgroundColor: 'rgb(66, 134, 244)',
	      borderColor: 'rgb(66, 134, 244)',
	      borderRadius: 50,
	      arrowSize: 0,
	      minWidth: 50,
	      minHeight: 50,
	      maxWidth: 50,
	      maxHeight: 50,
	      borderWidth: 1,
	      disableAutoPan: true,
	      hideCloseButton: true,
	      arrowSize: 0,
	      backgroundClassName: 'transparent'
			});
			markers[i] = marker;
			infoBubbles[i].open(map, marker);

		}
	}});
	if (usrId != ""){

	}
}

//Helper function used for dealing with the logins
function toggleState(item){
	if($(item).attr("data-tog") == "0") {
		$(item).attr("data-tog","1");
	} 
	else {
		$(item).attr("data-tog", "0");
	}
}

$("#update").click( function(){
	var beds_update = $("#beds_update").val();
	var food_update = $("#food_update").val();
	var pdata = {
		beds_avail : beds_update,
		food_avail : food_update
	};
	if (beds_update === "" || food_update === ""){
		$("#updateMsg").empty();
		$("#updateMsg").append('<div class="failText">Failed</div>');
		return;
	}
	$.ajax({type:'POST', url: 'update_avail.php', data: pdata, dataType: 'json', success: function(response) {
		if(response.success){ 
			token=response.token;
			
			$("#updateMsg").empty();
			$("#updateMsg").append('<div class="failText">Failed</div>');
			load();
		}
		else{
			$("#loginUserMsg").empty();
			$("#loginUserMsg").append('<div class="failText">'+response.message+'</div>');
		}
	}
});
});
