from requests import get
import os

resp = get('https://backend.alhabibtravel.co.uk/api/v1/hotels').json()

for hotel in resp['hotels']:
    hotelName: str = hotel['name']
    folderName = hotelName.lower().replace(' ', '-')
    print(hotelName)
    