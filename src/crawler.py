import requests

def fetch(url):
    response = requests.get(url)
    response = requests.get(url, cookies={'over18': '1'})  # 一直向 server 回答滿 18 歲了 !
    return response

url = 'https://www.smhs.kh.edu.tw/p/403-1000-24-1.php'
resp = fetch(url)  # step-1

print(resp.text) # result of setp-1