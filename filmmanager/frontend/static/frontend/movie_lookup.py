import json
with open("./movies.json", "r", encoding='utf-8') as f:
    movies = json.load(f)
lookup = {}
for movie in movies["movies"]:
    lookup[movie["id"]] = {"title": movie["title"], "overview": movie["overview"], "genre_ids": movie["genre_ids"], "vote_average": movie["vote_average"],
                                   "poster_path": movie["poster_path"], "release_date": movie["release_date"]}

with open("movie_lookup.json", "w", encoding='utf-8') as f:
    json.dump(lookup, f)