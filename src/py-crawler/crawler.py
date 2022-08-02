import requests
from bs4 import BeautifulSoup

url = 'https://www.smhs.kh.edu.tw/p/403-1000-24-1.php'
resp = requests.get(url)
soup = BeautifulSoup(resp.text, 'html5lib')

links = soup.find_all('div', class_='mtitle')
print(links)

# for link in links:
#     if 'href' in link.attrs:
#         print(link['href'])
# print("done", soup, links, sep='\n')