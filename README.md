# To build and run

1. `npm install`
2. `docker-compose up`

![Alt text](./bee-game-flow.png 'Proposed Flow')

API

GET `/puzzles/current_puzzle` gets today's `puzzle`

```
params: {}

response: {
  "id": "1cdbe964-99f7-4d9b-9405-e2bd179848d5",
  "letters": "HOCIGEDNT",
  "mainLetter": "G"
}
```

POST `/puzzles` creates a new `puzzle`

```
body: {
  "words": "<array of many words ;)>",
  "date": "25-05-2022",
  "letters": "HOCIGEDNT",
  "mainLetter": "G"
}

response: {
  "id": "9b79c510-ad02-4645-a15a-ad3c9e2f2902",
  "letters": "HOCIGEDNT",
  "mainLetter": "G",
  "words": "<array of many words ;)>",
  "date": "25-05-2022",
  "createdAt": "2022-05-25T21:58:31.543Z"
}
```

POST `/scores` creates a new score for the user for a particular `puzzleId`

```
body: {
  "userId": "dmitry",
  "puzzleId": "0c84d2f3-5d71-4b77-be8a-54c932610d48"
}

response: {
  "id": "88866098-6439-43d7-80e3-196eae608582",
  "points": 0,
  "words": "[]",
  "complete": false,
  "userId": "dmitry",
  "puzzleId": "9b79c510-ad02-4645-a15a-ad3c9e2f2902",
  "createdAt": "2022-05-25T22:28:38.989Z"
}
```

GET `/scores?userId=<userId>&puzzleId=<puzzleId>` gets a user's score

```
response: {
  "id": "88866098-6439-43d7-80e3-196eae608582",
  "points": 0,
  "words": "[]",
  "complete": false,
  "userId": "dmitry",
  "puzzleId": "9b79c510-ad02-4645-a15a-ad3c9e2f2902",
  "createdAt": "2022-05-25T22:28:38.989Z"
}
```

PATCH `/scores/:scoreId` updates score with words and points

```
params: {
  word: "GONG",
  puzzleId: “12345”,
  userId: "12345"
}

response: {
  "id": "88866098-6439-43d7-80e3-196eae608582",
  "points": 4,
  "words": "[\"GONG\"]",
  "complete": false,
  "userId": "dmitry",
  "puzzleId": "9b79c510-ad02-4645-a15a-ad3c9e2f2902",
  "createdAt": "2022-05-25T22:28:38.989Z"
}
```
