# Media bundle (slides, posters, demos)

Static assets you can pull from this repo without touching the Vite app.

| Folder | Contents |
|--------|----------|
| **`presentation-figures/`** | PNG panels from MidasMap `presentation_figures/` (pipeline schematics, LOOCV chart, before/after, metrics card, etc.). Regenerate from the [MidasMap](https://github.com/AnikS22/MidasMap) repo with `scripts/generate_presentation_figures.py`, then copy fresh PNGs here if needed. |
| **`deck-photos/`** | JPEGs used in the React deck hero slides (`tem-synapse`, `tem-closeup`, `receptor-diagram`). Same files as `src/assets/`. |
| **`unlabeled-synapses/`** | **Real** TEM JPEGs: full frames and crops from the deck micrographs (see `unlabeled-synapses/README.md`). |
| **`scripts/`** | `export_unlabeled_from_assets.py` — rebuild `unlabeled-synapses/` from `src/assets/` after you swap in new photos (`pip install pillow`). |
