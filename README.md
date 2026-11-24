# One Word, One Username, One Reward — herman-234

[![make.fun](https://make.fun/badge/mend-one-word-24-nov-2026.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![make.fun rank](https://make.fun/badge/mend-one-word-24-nov-2026/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![make.fun reward](https://make.fun/badge/mend-one-word-24-nov-2026/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the make.fun bounty: https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae

## The entry

One word: `herman-234` — the entrant's own make.fun username.

The competition's judge brief says the entry is the entrant's own handle,
sent as one word, and its first criterion is that a genuine make.fun handle
beats any invented word. So this program writes the genuine handle, nothing
else: no explanation, no links, no pitch.

## How it works

`main.ts` writes the word to `/output/entry.txt` and reads it back to check
the sealed gate: UTF-8 text, 1–30 characters, not only whitespace.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
