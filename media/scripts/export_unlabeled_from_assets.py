#!/usr/bin/env python3
"""
Export real TEM crops from the deck JPEGs in src/assets/ (actual micrograph pixels).

Run from repo root:
  python media/scripts/export_unlabeled_from_assets.py

Requires: pillow  (pip install pillow)
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parents[2]
ASSETS = REPO / "src" / "assets"
OUT = REPO / "media" / "unlabeled-synapses"


def save_crop(img: Image.Image, box: tuple[int, int, int, int], name: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / name
    crop = img.crop(box)
    crop.save(path, quality=92, optimize=True)
    print(path)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    syn = Image.open(ASSETS / "tem-synapse.jpg").convert("RGB")
    close = Image.open(ASSETS / "tem-closeup.jpg").convert("RGB")

    w, h = syn.size
    # Full frame (real unlabeled field)
    syn.save(OUT / "tem_synapse_full.jpg", quality=92, optimize=True)
    print(OUT / "tem_synapse_full.jpg")

    # Non-overlapping ~640-wide bands that fit 1920x1080
    cw, ch = 640, 600
    positions = [
        (0, 0),
        (cw, 0),
        (2 * cw, 0),
        (0, h - ch),
        ((w - cw) // 2, (h - ch) // 2),
    ]
    for i, (x, y) in enumerate(positions):
        x2, y2 = min(x + cw, w), min(y + ch, h)
        x1, y1 = max(0, x2 - cw), max(0, y2 - ch)
        save_crop(syn, (x1, y1, x2, y2), f"tem_synapse_crop_{i + 1:02d}.jpg")

    close.save(OUT / "tem_closeup_full.jpg", quality=92, optimize=True)
    print(OUT / "tem_closeup_full.jpg")

    cw, ch = close.size
    half = cw // 2
    quads = [
        (0, 0, half, half),
        (half, 0, cw, half),
        (0, half, half, ch),
        (half, half, cw, ch),
    ]
    for i, box in enumerate(quads):
        save_crop(close, box, f"tem_closeup_quadrant_{i + 1:02d}.jpg")

    cx, cy = cw // 2, ch // 2
    r = 400
    save_crop(close, (cx - r, cy - r, cx + r, cy + r), "tem_closeup_center_800.jpg")


if __name__ == "__main__":
    main()
