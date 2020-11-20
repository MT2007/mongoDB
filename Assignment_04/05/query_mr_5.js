const mapFunction1 = function () {
    if (this.nationality === "Poland" && this.sex === "Female") {
        for (let i = 0; i < this.credit.length;i++){
            emit(this.credit[i].currency, +this.credit[i].balance);    
        }        
    }  
};
  
const reduceFunction1 = function (keyId, values) {     
    return {avg : Array.avg(values)  , 
    	    sum : Array.sum(values) }
  };
  
db.people.mapReduce(
    	mapFunction1,
    	reduceFunction1,
    { 
    out: "mapreducer_5" 
})  
printjson(db.mapreducer_5.find().toArray())
  
  
