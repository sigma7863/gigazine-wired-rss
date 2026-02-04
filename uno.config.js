import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b'
    }
  },
  shortcuts: {
    'feed-container': 'h-screen overflow-y-auto border-r border-gray-200 last:border-r-0',
    'feed-item': 'p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors',
    'feed-title': 'font-semibold text-gray-900 mb-1 line-clamp-2',
    'feed-meta': 'text-sm text-gray-500 mb-2',
    'feed-content': 'text-sm text-gray-600 line-clamp-3'
  }
});
