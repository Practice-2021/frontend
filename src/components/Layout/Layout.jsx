const Layout = ({children, className}) => {
    return (
        <div className="w-screen h-screen bg-lavender overflow-y-scroll">
            <div className={`container mx-auto ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;