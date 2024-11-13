import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/login'>Đăng nhập</Link>
        </li>
        <li>
          <Link href='/register'>Đăng ký</Link>
        </li>
      </ul>
      <ModeToggle/>

    </div>
  )
}
