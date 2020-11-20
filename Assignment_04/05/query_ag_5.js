printjson(db.people.aggregate([ { $match: { nationality: "Poland" ,sex :"Female"} }, 
				{$unwind: "$credit"},    
    {    
      $group: {
            "_id": "$credit.currency", avgbalance: { $avg: "$credit.balance" },
            sum :{ $sum: "$credit.balance" }
}}]).toArray())
