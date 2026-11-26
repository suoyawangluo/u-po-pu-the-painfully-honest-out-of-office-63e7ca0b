# The Painfully Honest Out-of-Office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/suoyawangluo/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/suoyawangluo/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

Entry for the [make.fun bounty](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b): one brutally honest but still polite out-of-office auto-reply, in a single sentence of at most 200 characters.

## The entry

> I am out of the office until Monday, and honestly my inbox is 400 emails deep, so I will reply to yours the moment I stop pretending I have already read them — thank you for your patience.

188 characters, one sentence. It admits what an employee would only say privately — the inbox is 400 deep and the "already read it" pose is a bluff — and still thanks the sender, so a manager can let it stand.

## How it works

`main.ts` (Node 22, stdlib only) assembles the reply from named parts, validates it against the gate (1–200 characters, exactly one sentence, non-blank), writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads it back and verifies the sha256. Output is deterministic: six runs produced byte-identical files.

```sh
node main.ts
```

## Referral

https://make.fun/r/xxbm6cca
