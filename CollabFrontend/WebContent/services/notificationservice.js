/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
	
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8081/CollabMiddleware/getnotifications");
	}
	
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8081/CollabMiddleware/getnotification/"+id);
	}
	
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8081/CollabMiddleware/updatenotification/"+id);
	}
	
	return notificationService;
})