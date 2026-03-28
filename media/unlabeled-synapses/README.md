# Real unlabeled TEM imagery

These files are **real electron micrograph pixels** from the same sources as the React deck (`src/assets/tem-synapse.jpg`, `tem-closeup.jpg`): full frames plus spatial crops (no annotation overlays bundled here).

| File pattern | Description |
|--------------|-------------|
| `tem_synapse_full.jpg` | Full 1920×1080 synapse field |
| `tem_synapse_crop_*.jpg` | Five regions cropped from that field |
| `tem_closeup_full.jpg` | Full 1024×1024 close-up |
| `tem_closeup_quadrant_*.jpg` | Four quadrants |
| `tem_closeup_center_800.jpg` | 800×800 center crop |

To regenerate after replacing the source JPEGs in `src/assets/`:

```bash
python media/scripts/export_unlabeled_from_assets.py
```

For full-resolution **training TIFs** from your lab tree, keep those in MidasMap’s data directory (see `config/config.yaml`); they are too large to mirror here unless you add them deliberately.
