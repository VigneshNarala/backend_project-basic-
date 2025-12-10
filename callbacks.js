function getUserDetails(id,getUserSubjects){
    console.log("getting user details by userId",id); // API CALL
    
    
    getUserSubjects({userRoll:"678"})
};

function getUserSubjects(userRoll,getUserMarks){
    console.log("getting user subjects by user numbers",userRoll);
    getUserMarks({subId:"en-1"})
};

function getUserMarks(userSubId){
    console.log("getting user marks with subid", userSubId);
    console.log("testing");
}

getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        // getUserMarks(userSubId)
    });
});