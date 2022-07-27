from requests_html import HTML

def parse_article_entries(doc):
    html = HTML(html=doc)
    post_entries = html.find('div.r-ent')
    return post_entries

url = 'https://www.ptt.cc/bbs/movie/index.html'
resp = fetch(url)  # step-1
post_entries = parse_article_entries(resp.text)  # step-2

print(post_entries)  # result of setp-2