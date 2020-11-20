const mapFunction1 = function () {
    emit(this.job, 1);
};
const reduceFunction1 = function (keyId, values) {  
    return 1;
};
 
db.people.mapReduce(
    mapFunction1,
    reduceFunction1,
    { out: "mapreducer_3" }
 ) 

 printjson(db.mapreducer_3.find().toArray())
