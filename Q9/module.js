const arr = [{uname: "user1",pword: "pass@12345"},
            {uname:"user2",pword:"pass#12345"},
            {uname:"user3",pword:"pass$12345"},
            {uname:"user4",pword:"pass1"}]

exports.validateLogin = function(username,password){
    for(const ob of arr){
        if(ob.uname===username && ob.pword===password && ob.pword.trim().length>5){
            return true;
        }
    }
    return null;
}