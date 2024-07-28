import requests
import time
import json


def fetch_data(api_url):

    response = requests.get(api_url)
    response.raise_for_status()
    x = response.json()  # or response.text for raw text
    # print(x.get("results"))
    for i in x.get("results"):
        y = i.pop("url")
        arr = y.split("/")
        i["id"] = int(arr[-2])
        # print(i)
    return x["results"]


def store_data(data, filename):
    with open(filename, "a") as file:
        json.dump(data, file)
        file.write("\n")
    file.close()


def main():
    api_url = "https://pokeapi.co/api/v2/pokemon"
    filename = "data.json"
    polling_interval = 3  # Polling interval in seconds
    data = []
    for i in range(27):
        result = fetch_data(api_url + "?offset=" + str(50 * i) + "&limit=50")
        data += result
        time.sleep(polling_interval)
    store_data(data, filename)


if __name__ == "__main__":
    main()
