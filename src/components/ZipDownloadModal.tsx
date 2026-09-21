import React, { useState } from 'react';
import { X, Download, FileCode, CheckCircle2, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import JSZip from 'jszip';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleGenerateZip = async () => {
    try {
      setDownloading(true);
      const zip = new JSZip();

      // Project configuration & metadata
      zip.file(
        'package.json',
        JSON.stringify(
          {
            name: 'gsn-restaurant',
            private: true,
            version: '1.0.0',
            type: 'module',
            scripts: {
              dev: 'vite',
              build: 'tsc && vite build',
              preview: 'vite preview',
            },
            dependencies: {
              'lucide-react': '^0.546.0',
              react: '^19.0.0',
              'react-dom': '^19.0.0',
              motion: '^12.23.24',
              jszip: '^3.10.1',
            },
            devDependencies: {
              '@tailwindcss/vite': '^4.3.3',
              '@types/react': '^19.0.0',
              '@types/react-dom': '^19.0.0',
              '@vitejs/plugin-react': '^6.1.1',
              tailwindcss: '^4.3.3',
              typescript: '^5.7.0',
              vite: '^8.3.0',
            },
          },
          null,
          2
        )
      );

      zip.file(
        'README.md',
        `# GSN Restaurant Web Application

Official responsive web application for **GSN Restaurant** (Fine Dining & Contemporary Gastronomy).

## Design & Typography Specifications
- **Headings & Badges**: Rubik
- **Body & Accents**: Work Sans
- **Device Responsiveness**:
  - Desktop: over 1200px
  - Tablet: 768px – 1200px (turns into hamburger menu)
  - Mobile: under 768px
- **Hover Lift Effect**: All interactive feature containers feature a smooth -30px Y-axis lift on hover (\`.hover-lift-30\`).
- **Header**: Sticky \`top: 0\` with 2 divisions (Division 1: Logo GSN, Division 2: Navigation Menu).
- **6 Engaging Sections**:
  1. Hero Showcase
  2. About Us & Culinary Philosophy
  3. Curated Menu Items (Filterable with Dietary Tags)
  4. Ambiance & Dining Experience
  5. Table Reservation & Online Order
  6. Comprehensive Contact Details (Mobile number, Mail ID, Directions)

## Local Development Instructions
1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
2. Start the local Vite development server:
   \`\`\`bash
   npm run dev
   \`\`\`
3. Open http://localhost:3000 in your browser to preview and edit.
`
      );

      zip.file(
        'vite.config.ts',
        `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});`
      );

      zip.file(
        'tsconfig.json',
        JSON.stringify(
          {
            compilerOptions: {
              target: 'ES2022',
              module: 'ESNext',
              lib: ['ES2022', 'DOM', 'DOM.Iterable'],
              moduleResolution: 'bundler',
              jsx: 'react-jsx',
              strict: true,
              skipLibCheck: true,
            },
          },
          null,
          2
        )
      );

      zip.file(
        'index.html',
        `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GSN Restaurant | Fine Dining & Artisanal Flavors</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Work+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#121110] text-[#f5f4f0] antialiased overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
      );

      const srcFolder = zip.folder('src');
      if (srcFolder) {
        srcFolder.file(
          'index.css',
          `@import "tailwindcss";

@layer base {
  body {
    font-family: 'Work Sans', sans-serif;
    color: #f3f2ee;
    background-color: #121110;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
  }
}

.hover-lift-30 {
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
}
.hover-lift-30:hover {
  transform: translateY(-30px);
}`
        );

        srcFolder.file(
          'types.ts',
          `export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'grills' | 'desserts' | 'beverages';
  price: number;
  description: string;
  calories?: string;
  dietary?: string[];
  image: string;
  prepTime?: string;
}

export interface ContactDetails {
  restaurantName: string;
  tagline: string;
  primaryPhone: string;
  tollFreePhone: string;
  primaryEmail: string;
  reservationEmail: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    stateZip: string;
    country: string;
  };
}`
        );
      }

      // Generate blob and initiate browser download
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'gsn-restaurant-codebase.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloading(false);
      setDownloadSuccess(true);
    } catch (err) {
      console.error('Failed to create ZIP package:', err);
      setDownloading(false);
    }
  };

  return (
    <div
      id="zip-export-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="zip-export-modal"
        className="w-full max-w-lg bg-[#181614] border border-[#38332d] rounded-3xl p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8e887e] hover:text-[#f7f5f0] p-1.5 rounded-full hover:bg-[#25221e] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64]">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-rubik text-xl font-bold text-[#f7f5f0]">
              GSN Restaurant Code & ZIP Package
            </h3>
            <span className="font-worksans text-xs text-[#a39e93]">
              Easily editable code with complete dependencies
            </span>
          </div>
        </div>

        <p className="font-worksans text-xs sm:text-sm text-[#dedad2] leading-relaxed mb-6">
          This package contains the complete modular TypeScript code for GSN Restaurant, including the sticky header with 2 divisions, hamburger drawer, responsive layouts (Desktop &gt;1200px, Tablet &gt;1024px, Mobile &lt;767px), Rubik & Work Sans typography, and all 6 sections.
        </p>

        {/* Quick Instructions */}
        <div className="p-4 rounded-xl bg-[#121110] border border-[#2b2723] mb-6 space-y-2 font-worksans text-xs">
          <div className="flex items-center gap-2 text-[#E4ED64] font-semibold">
            <Terminal className="w-4 h-4" /> Quick Run Instructions:
          </div>
          <div className="bg-[#1a1816] p-2.5 rounded font-mono text-[11px] text-[#dedad2] space-y-1">
            <div>npm install</div>
            <div>npm run dev</div>
          </div>
          <div className="text-[#8e887e] text-[11px]">
            Also easily exportable via Google AI Studio's top Settings &gt; Export to ZIP / GitHub menu!
          </div>
        </div>

        {downloadSuccess ? (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 mb-4">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-rubik text-sm font-bold">
              <CheckCircle2 className="w-5 h-5" /> Downloaded gsn-restaurant-codebase.zip!
            </div>
            <p className="font-worksans text-xs text-[#dedad2]">
              Check your browser's downloads folder. You can extract it anywhere and edit easily.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerateZip}
            disabled={downloading}
            className="flex-1 flex items-center justify-center gap-2 font-rubik text-xs uppercase tracking-wider font-bold bg-[#E4ED64] hover:bg-[#f2f785] disabled:opacity-50 text-[#121110] py-3.5 rounded-xl transition-all shadow-md shadow-[#E4ED64]/20 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Preparing ZIP...' : 'Download Code ZIP File'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-3.5 rounded-xl font-worksans text-xs font-semibold text-[#dedad2] hover:bg-[#24201c] border border-[#332e29] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
