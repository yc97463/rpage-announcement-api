const apiHost = 'https://api.smhs.dstw.dev/api';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let latest = urlParams.get('load');
const moduleId = urlParams.get('rcg').split('-');
const rcg = moduleId[2];
const host = urlParams.get('host') || "https://www.smhs.kh.edu.tw";
console.log(latest);
let now = new Date().getTime();
if (latest == null) {
    if(rcg!=null){
        window.location.href = window.location.href+"&load="+now;
    }else{
        window.location.href = window.location.href+"?load="+now;
    }
}