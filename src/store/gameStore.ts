import { create } from "zustand";
import { Vector3 } from "three";

interface DialogOption {
  text: string;
  action: () => void;
}

interface CharacterDialog {
  text: string;
  options: DialogOption[];
}

interface GameState {
  showPortfolio: boolean;
  showCharacterDialog: boolean;
  characterDialog: CharacterDialog;
  isPlayingMusic: boolean;

  // Actions
  togglePortfolio: () => void;
  openCharacterDialog: (dialog: CharacterDialog) => void;
  closeCharacterDialog: () => void;
  toggleMusic: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  showPortfolio: false,
  showCharacterDialog: false,
  characterDialog: {
    text: "",
    options: [],
  },
  isPlayingMusic: false,
  currentSeat: null,
  playerPosition: new Vector3(0, 0.5, 8),

  togglePortfolio: () =>
    set((state) => ({ showPortfolio: !state.showPortfolio })),

  openCharacterDialog: (dialog) =>
    set({
      showCharacterDialog: true,
      characterDialog: dialog,
    }),

  closeCharacterDialog: () => set({ showCharacterDialog: false }),

  toggleMusic: () =>
    set((state) => ({ isPlayingMusic: !state.isPlayingMusic })),
}));
