#!/usr/bin/env python3
"""
Make Blu Parrot logo usable on white: edge-connected black -> transparent,
white tagline pixels in lower band -> dark gray (readable on white).
"""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    path = root / "src/assets/images/bluparrot-logo.png"
    backup = root / "src/assets/images/bluparrot-logo-original-backup.png"

    img = Image.open(path).convert("RGBA")
    if not backup.exists():
        img.save(backup, "PNG")

    w, h = img.size
    px = img.load()

    def is_bg(r: int, g: int, b: int) -> bool:
        return r < 60 and g < 60 and b < 60

    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if not (0 <= x < w and 0 <= y < h) or visited[y][x]:
            return
        r, g, b, _ = px[x, y]
        if is_bg(r, g, b):
            visited[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    while q:
        x, y = q.popleft()
        px[x, y] = (0, 0, 0, 0)
        for dx, dy in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                r, g, b, _ = px[nx, ny]
                if is_bg(r, g, b):
                    visited[ny][nx] = True
                    q.append((nx, ny))

    # "VENTURES" is white on former black; on white bg it must be dark.
    tagline_y = int(h * 0.76)
    for y in range(tagline_y, h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if r > 195 and g > 195 and b > 195:
                px[x, y] = (52, 55, 62, 255)

    img.save(path, "PNG")
    print(f"Wrote {path} (backup at {backup if backup.exists() else 'n/a'})")


if __name__ == "__main__":
    main()
