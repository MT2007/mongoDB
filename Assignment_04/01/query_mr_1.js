const mapFunction1 = function() {
    emit("height-"+this.sex, +this.height);
    emit("weight-"+this.sex, +this.weight);
};
 
const reduceFunction1 = function (keyId, values) {
    
    return Array.avg(values);
};
 
db.people.mapReduce(
    mapFunction1,
    reduceFunction1,
    { out: "mapreducer_1" }
 ) 
printjson(db.mapreducer_1.find().toArray())

  
