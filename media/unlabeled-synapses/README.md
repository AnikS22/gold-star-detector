# Unlabeled synapse imagery

- **`synthetic/`** — Computer-generated grayscale fields that resemble EM texture but contain **no immunogold labels** and are **not** real data. Safe to redistribute.
- **`real/`** — Intended for **your** exported crops (optional). This folder is listed in `.gitignore` so you can drop Max Planck / lab TIFs or PNGs locally without committing them. Remove the ignore entry only if you intend to publish specific crops under your policy.

Regenerate synthetics from the repo root:

```bash
python media/scripts/generate_synthetic_unlabeled.py --count 12 --size 640
```
