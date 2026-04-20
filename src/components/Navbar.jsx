import Link from 'next/link';
import React from 'react';
import { ThemeSwitch } from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="p-4">
                <div className='flex justify-between items-center'>
                    <div className="">
                        <p className="font-bold">ACME</p>
                    </div>
                    <div className='flex gap-10'>
                        <ul className="flex items-center gap-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/tasks">Task</Link></li>
                        </ul>
                        <div>
                            <ThemeSwitch></ThemeSwitch>
                        </div>
                    </div>
                </div>
            </header>

        </nav>
    );
};

export default Navbar;