const mapFunction1 = function () {
    for (let i = 0; i < this.credit.length;i++){
        emit(this.credit[i].currency, +this.credit[i].balance);
    }
};
 
const reduceFunction1 = function (keyId, values) {   
    return Array.sum(values);
};
 
db.people.mapReduce(
    mapFunction1,
    reduceFunction1,
    { out: "mapreducer_2" }
 ) 

 printjson(db.mapreducer_2.find().toArray())

  
