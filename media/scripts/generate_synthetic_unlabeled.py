#!/usr/bin/env python3
"""
Generate grayscale, synapse-like patches with no annotations (demo / layout only).

Requires: numpy, pillow  (pip install numpy pillow)
Run from repo root:  python media/scripts/generate_synthetic_unlabeled.py
"""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np

try:
    from PIL import Image
except ImportError as e:
    raise SystemExit("Install pillow: pip install pillow") from e


def synthetic_unlabeled_em(rng: np.random.Generator, size: int = 512) -> np.ndarray:
    """Blobby EM-like field without immunogold spots (no CSV / labels)."""
    base = rng.normal(128.0, 18.0, (size, size))
    yy, xx = np.mgrid[0:size, 0:size].astype(np.float32)
    for _ in range(22):
        cx, cy = rng.integers(40, size - 40, size=2)
        r = float(rng.integers(28, 95))
        sigma = r * 0.45
        d2 = (xx - cx) ** 2 + (yy - cy) ** 2
        g = np.exp(-d2 / (2 * sigma**2))
        base = base - g * rng.uniform(8, 35)
        base = base + g * rng.uniform(-6, 10) * 0.3
    for _ in range(8):
        y0 = int(rng.integers(30, size - 30))
        thickness = int(rng.integers(1, 4))
        for t in range(-thickness, thickness + 1):
            if 0 <= y0 + t < size:
                base[y0 + t, :] += rng.uniform(-12, 12)
    return np.clip(base, 28, 248).astype(np.uint8)


def main() -> None:
    p = argparse.ArgumentParser(description="Synthetic unlabeled EM-style patches for media/.")
    p.add_argument("--count", type=int, default=10, help="Number of PNGs to write")
    p.add_argument("--size", type=int, default=640, help="Square side length in pixels")
    p.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "unlabeled-synapses" / "synthetic",
        help="Output directory",
    )
    args = p.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    for i in range(args.count):
        rng = np.random.default_rng(9100 + i)
        img = synthetic_unlabeled_em(rng, args.size)
        path = args.out / f"synthetic_unlabeled_{i + 1:02d}.png"
        Image.fromarray(img, mode="L").save(path, optimize=True)
        print(path)
    print(f"Wrote {args.count} file(s) to {args.out}")


if __name__ == "__main__":
    main()
