const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
    const rcg = 24;
    // const rcg = ourl.searchParams.get('rcg');
    try{
        (async()=>{
            const response = await fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },    
                body: new URLSearchParams({
                    "Rcg": rcg,
                    "Op": "getpartlist",
                    "Page": 1
                })
            })
            res.send(JSON.stringify(response));
        })
    }catch(error){
        console.log(error)
    }
});
