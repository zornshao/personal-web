import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-context'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Academic Portfolio | Research & Consulting',
  description: 'Ph.D. Candidate specializing in technology governance and social science research. Bridging academic rigor with industry insights.',
  keywords: ['academic', 'research', 'PhD', 'technology governance', 'consulting', 'publications'],
  authors: [{ name: 'Academic Portfolio' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      {/* 强力物理清除 v0 浮窗的底层脚本 */}
<Script id="remove-v0-badge" strategy="afterInteractive">
  {`
    const killBadge = () => {
      // 遍历页面上所有的链接，只要跳转到 v0.dev 或 vercel.com/v0 的全部删掉
      document.querySelectorAll('a').forEach(a => {
        if (a.href && (a.href.includes('v0.dev') || a.href.includes('vercel.com/v0'))) {
          // 向上寻找它最外层的固定定位容器并整块删除
          const container = a.closest('div');
          if (container) container.remove();
          a.remove();
        }
      });
      
      // 模糊匹配：寻找任何包含 "Built with" 文本的黑色小浮窗
      document.querySelectorAll('div, button').forEach(el => {
        if (el.textContent && el.textContent.includes('Built with') && el.textContent.includes('v0')) {
          el.remove();
        }
      });
    };

    // 网页加载后立刻执行一次
    killBadge();
    
    // 防止防防御机制滞后生成，每隔 500 毫秒再扫描清除一次，连续执行 5 秒
    let count = 0;
    const interval = setInterval(() => {
      killBadge();
      count++;
      if (count > 10) clearInterval(interval);
    }, 500);
  `}
</Script>
      </body>
    </html>
  )
}
