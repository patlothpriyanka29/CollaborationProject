/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/CollabMiddleware/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8081/CollabMiddleware/login",user)
	}
	
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/CollabMiddleware/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8081/CollabMiddleware/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8081/CollabMiddleware/updateuser",user)
	}
	
	
	return userService
})