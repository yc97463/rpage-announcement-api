from requests_html import HTML

def parse_mtitle(doc):
    html = HTML(html=doc)
    post_entries = html.find('div.mtitle')
    return post_entries

def parse_article_meta(entry):
    return {
        'title': entry.find('a', first=True).text,
        'push': entry.find('a[href]', first=True).text,
        'date': entry.find('a[title]', first=True).text,
        'author': entry.find('i.mdate', first=True).text,
    }

url = 'https://www.smhs.kh.edu.tw/p/403-1000-24-1.phps'
resp = fetch(url)  # step-1
post_entries = parse_mtitle(resp.text)  # step-2

for entry in post_entries:
    meta = parse_article_meta(entry)
    print(meta)  # result of setp-3
print("end")

    # pretty_print(meta['push'], meta['title'], meta['date'], meta['author'])  # for below results