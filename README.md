![Alt text](./bee-game-flow.png 'Proposed Flow')

API

GET `/puzzles/current_puzzle` gets today's `puzzleId`

```
params: {}

response: {
  puzzleId: “12345”
}
```

POST `/scores` creates a new score

```
params: {
  word: "incognito",
  puzzleId: “12345”,
  userId: "12345"
}

response: {
  foundWords: '["word1", "word2"]',
  score: 45,
  scoreId: “12345”
}
```

If `puzzleId` doesn’t match `currentPuzzleId`, throw error with some message

PATCH `/scores/:scoreId` updates score with more words

```
params:
{
  word: "incognito",
  puzzleId: “12345”,
  userId: "12345"
}

response:
{
  foundWords: [“word1”, “word2”],
  score: 45,
  scoreId: “12345”
}
```

POST `/scores/:scoreId/complete` submits score

```
params: {}

response:
{
  scoreId: “12345”,
  completed: true
}
```
