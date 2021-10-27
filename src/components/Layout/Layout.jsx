const Layout = ({children, className}) => {
    return (
        <div className="w-screen h-screen bg-lavender">
            <div className={`container mx-auto ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;