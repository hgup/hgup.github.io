---
title: New Device Setup (Windows)
created: 2025-05-17
image: /setup/setup.png
---
> This is for a windows installation.
## Fresh Installation
### Debloat windows

Windows 11 is full of bloatware. NOT ACCEPTABLE! Remove all unnecessary stuff that are thrusted into our laptops/PCs by Microsoft.[^1]

So, we will run this script from [Raphire/Win11Debloat](https://github.com/Raphire/Win11Debloat?tab=readme-ov-file).

```powershell
# Should work unless outdated, else use the link above
& ([scriptblock]::Create((irm "https://debloat.raphi.re/")))
```

- If you see a warning related to `winget` in the blue window, then install the [app installer](https://apps.microsoft.com/detail/9nblggh4nns1)
- Go with recommended settings (But do suggest you to clean out the taskbar and start menu.)

## Apps

Here are the apps that I use on my system. One suggestion is to use apps that do most of the things that you require to do.
### Daily

- [Arc Browser](https://arc.net/)
- [Dropbox](https://www.dropbox.com/install)

### Academics

- [Zotero](https://www.zotero.org/)
- [Obsidian](https://obsidian.md)

### Dev

### [VS Code](https://code.visualstudio.com)

I use the vim extension with VS Code. These are my settings and keybindings.

```json title="settings.json"
{
  "vim.easymotion": true,
  "vim.incsearch": true,
  "vim.useSystemClipboard": true,
  "vim.hlsearch": true,
  "vim.insertModeKeyBindings": [
    {
      "before": [
        "j",
        "j"
      ],
      "after": [
        "<Esc>"
      ]
    }
  ],
  "vim.leader": "<space>",
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-shift-e>": false,
    "<C-f>": false,
    "<C-p>": false,
    "<C-w>": false,
    "<C-shift-p>": false,
  },
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": [
        "Ctrl+e"
      ],
      "commands": [
        "workbench.files.action.focusFilesExplorer"
      ]
    },
    // {
    //   "before": [":"],
    //   "commands": ["workbench.action.showCommands"]
    // }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": [ ">" ],
      "commands": [ "editor.action.indentLines" ]
    },
    {
      "before": [ "<" ],
      "commands": [ "editor.action.outdentLines" ]
    },
    // {
    //   "before": [ "p" ],
    //   "after": [ "p", "g", "v", "y" ]
    // }
  ],
  //   "vim.statusBarColorControl": true,
  //   "vim.statusBarColors.normal": ["#1f1f1f", "#ddd"],
  //   "vim.statusBarColors.insert": ["9f9f9f", "#000"],
  //   "vim.statusBarColors.visual": ["#B48EAD", "#000"],
  //   "vim.statusBarColors.visualline": ["#B48EAD", "#000"],
  //   "vim.statusBarColors.visualblock": ["#A3BE8C", "#000"],
  // "vim.statusBarColors.replace": "#D08770",
  // "vim.statusBarColors.commandlineinprogress": "#007ACC",
  // "vim.statusBarColors.searchinprogressmode": "#007ACC",
  // "vim.statusBarColors.easymotionmode": "#007ACC",
  // "vim.statusBarColors.easymotioninputmode": "#007ACC",
  // "vim.statusBarColors.surroundinputmode": "#007ACC",
}
```

```json title="keybindings.json"
[
    {
        "key": "ctrl+e",
        "command": "workbench.action.focusActiveEditorGroup",
        "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "ctrl+n",
      "command": "explorer.newFile",
      "when": "filesExplorerFocus"
    },
    {
      "key": "ctrl+shift+n",
      "command": "explorer.newFolder",
      "when": "filesExplorerFocus"
    },
    {
      "key": "r",
      "command": "renameFile",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "delete",
      "command": "deleteFile",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "ctrl+c",
      "command": "filesExplorer.copy",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "ctrl+v",
      "command": "filesExplorer.paste",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "ctrl+x",
      "command": "filesExplorer.cut",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "space",
      "command": "filesExplorer.openFilePreserveFocus",
      "when": "filesExplorerFocus && !inputFocus"
    },
]
```

### Hobbies

- [Musescore](https://musescore.org/)
- [Da Vinci Resolve](https://www.blackmagicdesign.com/in/products/davinciresolve)

[^1]: The only reason I am still using your OS and not Linux is the ability to use proprietary software