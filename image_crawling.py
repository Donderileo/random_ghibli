from bs4 import BeautifulSoup
import requests
import json

nome = 'Ghibli Images'
url = 'https://www.empireonline.com/movies/features/studio-ghibli-every-movie-ranked/'

html_text = requests.get(url).content
soup = BeautifulSoup(html_text,'html.parser')
data = []

crawled = soup.find_all('img')

links = {}

for link in crawled:
    x = link.get('alt')
    y = link.get('data-src')
    if(x and y):
        links[x.upper()] = 'https://' + y[2:]


with open('images.json', 'w') as file:
    json.dump(links, file)