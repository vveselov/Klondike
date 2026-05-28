# Klondike Solitaire

A polished browser-based Klondike Solitaire game in a single HTML file. The interface is in English and the game runs without a build step or external assets.

## Features

- Classic Klondike tableau, stock, waste, and four foundations
- Draw 1 and Draw 3 modes
- Drag-and-drop and click-to-move card movement with legal move validation
- Smooth card movement, flip animations, and auto-finish animations
- Space-themed table and card backs
- Sound effects with a Sound On/Off toggle
- Hints, undo, score, move counter, and timer
- Auto Finish when all remaining cards can safely move to foundations
- Victory celebration animation
- Top 10 win history saved in local storage

## Play Locally

Open `index.html` directly in a browser, or run a small static server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Controls

- `New Game` starts a shuffled deal
- Click a movable card to select it, then click a tableau pile or foundation to move it
- Drag cards or valid card stacks to move them directly
- Double-click a card to move it to a foundation, or the first available tableau pile
- `Undo` reverts the previous move
- `Hint` shows an available move
- `Auto Finish` completes the game when it is safe
- `History` shows the best 10 completed games
- `Sound On/Off` toggles sound effects
- `Draw 1 / Draw 3` changes stock draw mode

## Persistence

The game stores sound preference and Top 10 wins in browser `localStorage`.

## License

MIT
