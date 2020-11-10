printjson(db.people.find( {"birth_date" : {$gt : "2001-01-1TZ" } },{"first_name" : 1 , "last_name" : 1 , "location.city" : 1 , "_id" : 0}).toArray())
