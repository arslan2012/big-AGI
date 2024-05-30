import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface TextToImageStore {

  activeProviderId: string | null;
  setActiveProviderId: (providerId: string | null) => void;

}

export const useTextToImageStore = create<TextToImageStore>()(
  persist(
    (_set) => ({

      activeProviderId: 'prodia', // prodia is free for first 1000 draw
      setActiveProviderId: (activeProviderId: string | null) => _set({ activeProviderId }),

    }),
    {
      name: 'app-module-t2i',
      version: 1,
    }),
);
