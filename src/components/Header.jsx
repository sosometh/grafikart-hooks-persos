export function Header({page}) {
    return <header className="flex items-center gap-6 bg-orange-300 shadow-inner p-3 mb-8">
        <h2>MonSite</h2>
        <nav className="flex gap-3 text-xl">
            <a href="#" className={`${page === 'home' ? 'underline' : 'no-underline'}`} >Home</a>
            <a href="#contact" className={`${page === 'contact' ? 'underline' : 'no-underline'}`} >Contact</a>
        </nav>
    </header>
}