( function (global){
var ajaxUtils = {};

// Returns an HTTP request object
function getRequestObject() {
	if (global.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (global.ActiveXObject) {
		//for very old IE browsers
		return (new ActiveXObject9("Microsoft.XMLHTTP"));
	}
	else {
		global.alert("Ajax is not supported!");
		return (null);
	}
}

ajaxUtils.sendGetRequest = 
	function(requestUrl, responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = 
			function() {
				handleResponse(request, responseHandler)
		};
		request.open("GET", requestUrl, true);
		request.send(null); // for POST only
	}

/* Only calls user provided 'responseHandler'
*  function if response is ready
*  and not an error
*/
function handleResponse(request, responseHandler) {
	if ( (request.readyState==4 ) &&
		(request.status == 200 )) {
		responseHandler(request);
	}
}
global.$ajaxUtils = ajaxUtils;

})(window); // BUG ERROR FOUND!
// no such object global because I for
//forgot to use window in the last line