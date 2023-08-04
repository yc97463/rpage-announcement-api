// const { pathname } = window.location.pathname;
// if(pathname=="/positive-motto"){
//     const url = "https://script.google.com/macros/s/AKfycbxiw7l54uqBEkMf2QTI2xMglTYdnCRklKqNelqkpS5tOaEUmFYtyUiGixQJz7RJnKsG/exec";
// }else if(pathname=="/school-ann"){
//     const url = "https://www.smhs.kh.edu.tw/app/index.php?Action=mobilercglist";
// }else{
//     const url = "https://script.google.com/macros/s/AKfycbxiw7l54uqBEkMf2QTI2xMglTYdnCRklKqNelqkpS5tOaEUmFYtyUiGixQJz7RJnKsG/exec";
// }

// const url = "https://script.google.com/macros/s/AKfycbxiw7l54uqBEkMf2QTI2xMglTYdnCRklKqNelqkpS5tOaEUmFYtyUiGixQJz7RJnKsG/exec";
addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  
  
async function handleRequest(request) {
    const ourl = new URL(request.url);
    pathname = ourl.pathname;
    pathStructure = pathname.split('/');
    if(pathname.startsWith('/api')){
        const init = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        }
        switch(pathStructure[2]){
            case 'positive-motto':
                url = "https://script.google.com/macros/s/AKfycbxiw7l54uqBEkMf2QTI2xMglTYdnCRklKqNelqkpS5tOaEUmFYtyUiGixQJz7RJnKsG/exec";
                res = await fetch(url, { method: 'GET' });
                break;
            case 'sch-ann':
                url = "https://rpage-cors-uhnhfw2fva-de.a.run.app";
                rcg = ourl.searchParams.get('rcg');
                host = ourl.searchParams.get('host');
                res = await fetch(url+'/?rcg='+rcg+'&host='+host, { method: 'GET'})
                // url = "https://www.smhs.kh.edu.tw/app/index.php?Action=mobilercglist";
                // const rcg = ourl.searchParams.get('rcg');
                // try{
                //     res = await fetch(url, { 
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/x-www-form-urlencoded'
                //         },    
                //         body: new URLSearchParams({
                //             "Rcg": rcg,
                //             "Op": "getpartlist",
                //             "Page": 1
                //         })
                //     })
                // }catch(error){
                //     console.log(error)
                // }
                break;
            case 'shorten':
                url = "<shorten-api>";
                const url_ori = ourl.searchParams.get('url');
                res = await fetch(url+url_ori, { method: 'GET' });
                break;
        }
        return new Response(JSON.stringify(await res.json()), init);
    }else{
        const init = {
            headers: {
              "Content-Type": "text/html",
            }
        }
        if(pathname=="/"){
            host = 'https://ghp.smhs.dstw.dev'+pathname;
        }else{
            host = 'https://ghp.smhs.dstw.dev/pages'+pathname;
        }
        return fetch(host, init);
    }
    
      
      //response = new Response(await res.json, init)
      //console.log(response.body)
      //return response
}