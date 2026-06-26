import { create } from 'zustand';

export const useStore = create((set) => ({
  // Theme State
  theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 'light',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    set({ theme });
  },
  themeWave: { x: 0, y: 0, active: false, targetTheme: 'dark' },
  setThemeWave: (themeWave) => set({ themeWave }),

  // UI State
  activeProject: null,
  setActiveProject: (activeProject) => set({ activeProject }),
  mobileMenuOpen: false,
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  activeSection: 'hero',
  setActiveSection: (activeSection) => set({ activeSection }),
  
  // Filtering
  primaryFilter: 'all',
  setPrimaryFilter: (primaryFilter) => set({ primaryFilter }),
  projectFilter: 'All',
  setProjectFilter: (projectFilter) => set({ projectFilter }),
  showAllProjects: false,
  setShowAllProjects: (showAllProjects) => set({ showAllProjects }),

  // PDFs
  activePdfUrl: null,
  setActivePdfUrl: (activePdfUrl) => set({ activePdfUrl }),
  activePdfTitle: '',
  setActivePdfTitle: (activePdfTitle) => set({ activePdfTitle }),

  // Git Stats
  gitStats: {},
  setGitStats: (gitStats) => set({ gitStats }),

  // Easter Eggs
  isPongActive: false,
  setIsPongActive: (isPongActive) => set({ isPongActive }),
  isMemoryActive: false,
  setIsMemoryActive: (isMemoryActive) => set({ isMemoryActive }),
  showOliVideo: false,
  setShowOliVideo: (showOliVideo) => set({ showOliVideo }),
  isMatrixActive: false,
  setIsMatrixActive: (val) => set((state) => ({ isMatrixActive: typeof val === 'function' ? val(state.isMatrixActive) : val })),
  isFollowActive: false,
  setIsFollowActive: (val) => set((state) => ({ isFollowActive: typeof val === 'function' ? val(state.isFollowActive) : val })),
  isShakeActive: false,
  setIsShakeActive: (isShakeActive) => set({ isShakeActive }),
  isDestructionActive: false,
  setIsDestructionActive: (isDestructionActive) => set({ isDestructionActive }),
  destructionProgress: 0,
  setDestructionProgress: (val) => set((state) => ({ destructionProgress: typeof val === 'function' ? val(state.destructionProgress) : val })),
  destructionLogs: [],
  setDestructionLogs: (val) => set((state) => ({ destructionLogs: typeof val === 'function' ? val(state.destructionLogs) : val })),
}));
