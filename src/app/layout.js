import "./globals.css";
import logo from '../assets/images/logo.png'

export const metadata = {
  title: 'Purple Transit',
  description: 'Non-Emergency Medical Transportation Carrier Service for Virginia',
  image: logo.src
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
