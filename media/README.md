# Media bundle (slides, posters, demos)

Static assets you can pull from this repo without touching the Vite app.

| Folder | Contents |
|--------|----------|
| **`presentation-figures/`** | PNG panels from MidasMap `presentation_figures/` (pipeline schematics, LOOCV chart, before/after, metrics card, etc.). Regenerate from the [MidasMap](https://github.com/AnikS22/MidasMap) repo with `scripts/generate_presentation_figures.py`, then copy fresh PNGs here if needed. |
| **`deck-photos/`** | JPEGs used in the React deck hero slides (`tem-synapse`, `tem-closeup`, `receptor-diagram`). Same files as `src/assets/`. |
| **`unlabeled-synapses/synthetic/`** | Grayscale **synthetic** EM-like patches with **no labels** — useful for mockups, placeholders, or backgrounds. Not real microscopy. |
| **`scripts/`** | `generate_synthetic_unlabeled.py` — recreate or extend the synthetic unlabeled set (`pip install numpy pillow`). |

## Real unlabeled synapses (your data)

The MidasMap training TIFs live under your local **Gold Particle Labelling** tree (see `config/config.yaml` in MidasMap). This repo does **not** ship those files (size + sharing). To add your own exports for talks or labeling:

1. Create `media/unlabeled-synapses/real/` (gitignored by default — see below).
2. Drop cropped PNG/TIF exports there, or point teammates to a separate private bucket.

To track real samples in git, remove the ignore rule and commit only what your data agreement allows.
