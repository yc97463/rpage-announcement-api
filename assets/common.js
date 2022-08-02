const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let latest = urlParams.get('load');
console.log(latest);
let now = new Date();
if (latest == null) {
    window.location.href = window.location.href+"?load="+now;
}