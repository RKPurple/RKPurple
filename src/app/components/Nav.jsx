"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const logoSize = 50;

    const [activeKey, setActiveKey] = React.useState(() => {
        const hash = window.location.hash;
        if (hash === '#projects') return "2";
        if (hash === '#about' || hash === '') return "1";
        if (hash.includes('resume')) return "3";
        return "1"; // Default to About
    });

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        window.history.pushState({}, '', '#about');
        setActiveKey("1");
    }

    // Update active key when hash changes
    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#projects') setActiveKey("2");
            if (hash === '#about' || hash === '') setActiveKey("1");
            if (hash.includes('resume')) setActiveKey("3");
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <Navbar fixed="top" expand="lg" className="bg-white">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="underline" activeKey={activeKey} defaultActiveKey={"1"} className="me-auto flex-column flex-lg-row">
                        <Nav.Item>
                            <Nav.Link eventKey={"1"} href="#about" onClick={scrollToTop}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"2"} href="#projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"3"} href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                        </Nav.Item>
                        
                        {/* Social Icons - will be visible on smaller screens */}
                        <div className="d-lg-none mt-3 d-flex justify-content-start">
                            <Nav.Link href="mailto:rkallur@stevens.edu" className="me-3">
                                <img 
                                    src="./images/Email_Logo.png" 
                                    width={logoSize}
                                    height={logoSize}
                                    alt="Email"
                                    className="email-icon"
                                />
                            </Nav.Link>
                            <Nav.Link href="https://github.com/RKPurple" target="_blank" rel="noopener noreferrer" className="me-3">
                                <img 
                                    src="./images/Github_Logo.png" 
                                    width={logoSize}
                                    height={logoSize}
                                    alt="Github"
                                    className="github-icon"
                                />
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/rohankallur/" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="./images/LinkedIn_Logo.png" 
                                    width={logoSize}
                                    height={logoSize}
                                    alt="LinkedIn"
                                    className="linkedin-icon"
                                />
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>

                {/* Social Icons - will be visible on larger screens */}
                <div className="d-none d-lg-flex align-items-center">
                    <Navbar.Brand href="mailto:rkallur@stevens.edu" className="me-2">
                        <img 
                            src="./images/Email_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="Email"
                            className="email-icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://github.com/RKPurple" target="_blank" rel="noopener noreferrer" className="me-2">
                        <img 
                            src="./images/Github_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="Github"
                            className="github-icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/rohankallur/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="./images/LinkedIn_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="LinkedIn"
                            className="linkedin-icon"
                        />
                    </Navbar.Brand>
                </div>
            </Container>
        </Navbar>
    );
}

function ProjectDetailNavBar() {
    const logoSize = 50;

    return (
        <Navbar fixed="top" expand="lg" className="bg-white">
            <Container>
                <Link to="/#projects" className="navbar-brand" >
                    <div className="d-flex align-items-center">
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to Projects
                    </div>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* Social Icons on the right */}
                <div className="d-flex align-items-center ms-auto">
                    <Navbar.Brand href="mailto:rkallur@stevens.edu" className="me-2">
                        <img 
                            src="../images/Email_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="Email"
                            className="email-icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://github.com/RKPurple" target="_blank" rel="noopener noreferrer" className="me-2">
                        <img 
                            src="../images/Github_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="Github"
                            className="github-icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/rohankallur/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="../images/LinkedIn_Logo.png" 
                            width={logoSize}
                            height={logoSize}
                            alt="LinkedIn"
                            className="linkedin-icon"
                        />
                    </Navbar.Brand>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export { NavigationBar as default, ProjectDetailNavBar};