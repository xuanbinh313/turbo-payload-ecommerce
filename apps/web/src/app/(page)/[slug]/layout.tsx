import { AdminBar } from '@/app/_components/AdminBar'
import { Header } from '@/app/_components/Header'
import React, { PropsWithChildren } from 'react'
const LayoutSlug: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="hidden flex-col md:flex">
            <AdminBar />
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default LayoutSlug