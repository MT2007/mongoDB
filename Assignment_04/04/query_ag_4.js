printjson(
db.people.aggregate([{ 
	$group: {_id: "$nationality",
		bmimin:{ $min: {$multiply: [ "$weight",{ "$divide": [1,"$height"] }, { "$divide": [1,"$height"] } , 100, 100]}},
		bmiavg:{ $avg: {$multiply: [ "$weight",{ "$divide": [1,"$height"] }, { "$divide": [1,"$height"] } , 100, 100]}},
		bmimax:{ $max: {$multiply: [ "$weight",{ "$divide": [1,"$height"] }, { "$divide": [1,"$height"] } , 100, 100]}},
		}},
]).toArray()
);
