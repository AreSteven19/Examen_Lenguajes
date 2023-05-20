import './globals.css'
import { Inter } from 'next/font/google'
import './hoja.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Are_Steven',
  description: 'esta es mi paginá',
}

type Time ={

  datetime : string
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Costa_Rica',
    {
      //cache:'no-store',   para k cambie pero cuando recarga
      
    }
    );
const data: Time = await res.json(); 
console.log(data)   


  return (
    <html lang="en">
      <body className={inter.className}>{children}

     

     
     
      </body>
    </html>
  )
}
