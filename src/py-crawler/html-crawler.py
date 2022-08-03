from requests_html import HTMLSession
session = HTMLSession()
r = session.get('https://www.smhs.kh.edu.tw/p/403-1000-24-1.php')

ele = r.html.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div/div/div[2]/div/div/section/div[1]')
print(ele[0].search_all('111{}'))
for day in ele[0].search_all(['111{}']):
    print(day.fixed)