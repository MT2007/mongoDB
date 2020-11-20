db.people.find().forEach(function (x) {
    for (let i = 0; i < x.credit.length; i++) {
        const elem = x.credit[i];
        elem.balance = parseInt(elem.balance);     
    }

    db.people.save(x);
});

printjson(db.people.aggregate([    {$unwind: "$credit"},
{

        $group: {
            "_id": "$credit.currency", avgbalance: { $avg: "$credit.balance" },
}
    }
]).toArray())

