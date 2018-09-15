/**
 * 
 */

app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8081/CollabMiddleware/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8081/CollabMiddleware/alljobs")
	}
	
	jobService.getJob=function(id){
		return $http.get("http://localhost:8081/CollabMiddleware/getjob/"+id)
	}
	
	return jobService;
})