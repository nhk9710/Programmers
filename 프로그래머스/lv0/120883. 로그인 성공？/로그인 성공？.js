function solution(id_pw, db) {
    let user = id_pw;
    let lg = false;
    let pw = false;

    db.map(ele => {
        if(user[0]===ele[0] && user[1]===ele[1]){
            lg = true;
            pw = true;
            return;
        }

        if(user[0]===ele[0]){
            lg = true;
        if(user[1]===ele[1]){
            pw = true;
        }}
    })
    return lg&&pw ? 'login' : lg&&pw===false ? 'wrong pw' : 'fail'
}