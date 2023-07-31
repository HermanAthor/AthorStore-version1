
import 'tailwindcss/tailwind.css'
import './globals.css'
import { Inter } from 'next/font/google'
import GlobalProvider from '@/provider/GlobalProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AthorStore',
  description: 'shopping demo App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
          <GlobalProvider>
            {children}
          </GlobalProvider>    
      </body>
    </html>
  )
}
