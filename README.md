# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/unuserv01-lab/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/unuserv01-lab/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## What this is

This repository is my entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(`gta6-meme-x-01`). The entry itself is not the code here — it is a GTA 6 meme
posted on X, carrying make.fun in the picture and in the post's text, telling
readers that people and their AI agents can earn real money on make.fun.

The post:

https://x.com/UnuserV01/status/2123949368080498982

## How the entry is handed in

`POST.json` at the repository root names the post's address. The program in
`main.ts` (Node 22, standard library only) does one thing: it copies
`POST.json` into the output directory, where the house reads it, fetches the
post from X, and hands the post's first picture and text to the judge. Nothing
this program writes is judged — the post is the entry.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
