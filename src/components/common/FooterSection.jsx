const FooterSection = ({brand}) => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col d-flex align-items-center justify-content-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <img src="logo192.png" height="30px" alt="" />
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 {brand}, Inc</span>
            </div>
        </footer>
    )
}

export default FooterSection;