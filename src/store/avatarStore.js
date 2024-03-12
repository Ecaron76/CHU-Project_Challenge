import { create } from 'zustand'

const useAvatarStore = create((set) => ({
    selectedAvatar: null,
    setSelectedAvatar: (avatarPath) => set({ selectedAvatar: avatarPath }),
}));

export default useAvatarStore;
