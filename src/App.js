import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <ExecutiveSummary />
            <Problems />
            <Solutions />
            <MarketOpportunity />
            <TargetUsers />
            <BusinessModel />
            <CompetitiveAdvantage />
            <Traction />
            <FundingAsk />
            <Vision />
            <Footer />
        </div>
    );
}

// Header Component
function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <img src="logo.png" alt="Alumni Challenge" className="logo-image" />
                    <div className='logo-text'>
                        <h1>Alumni Challenge</h1>
                        <span>Legacy of Impact</span>
                    </div>
                </div>
                <nav className='nav'>
                    <a href='#about'>About</a>
                    <a href='#solutions'>Solutions</a>
                    <a href='opportunity'>Opportunity</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </div>
        </header>
    );
}


// Hero section
function Hero () {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>LEGACY IMPACT</h1>
                <p>A platform to showcase alunmi, mntor and fund future impact.</p>
                <div className='cta-buttons'>
                    <button className='btn-primary'>Joint the Challenge</button>
                    <button className='btn-secondary'>Learn More</button>
                </div>
            </div>
            <div className='hero-visual'>
                <div className='visual-element'></div>
            </div>
        </section>
    );
};


// Executive summary
function ExecutiveSummary (){
    return (
        <section className='section-summary' id='about'>
            <div className='container'>
                <h2>Executive Summary</h2>
                <div className='summary-content'>
                    <div className='summary-text'>
                        <p>The Alumni Challenge is a digital-first, gamified platform designed to transform alumni engagement across tertiary institutions worldwide. By amplifying alumni stories, showcasing legacies, and driving institutional support, it bridges the gap between graduates, their alma mater, and society..</p>
                        <p>We're building a sustainable ecosystem where successful alunmi can give back in meaningful ways while studnts gain access to resource they need to succeed.</p>
                    </div>
                    <div className='summary-stats'>
                        <div className='stat'>
                            <h3>500+</h3>
                            <p>Alumni Network</p>
                        </div>
                        <div className='stat'>
                            <h3>$2M+</h3>
                            <p>Funding Pool</p>
                        </div>
                        <div className='stat'>
                            <h3>50+</h3>
                            <p>Successful Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Problem
function Problems() {
    return (
        <section className="section problems">
            <div className="container">
                <h2>The Problems We're Solving</h2>
                <div className="problem-cards">
                    <p>Traditional alumni networks remain passive, with little visibility into alumni contributions, weak fundraising mechanisms and minimal mentorship opportunities. Institutions lack scalable tools to mobilize alumni, track impact, and create sustainable support systems.</p>
                    <div className="problem-card">
                        <div className="problem-icon">🎯</div>
                        <h3>Limited Alumni Engagement</h3>
                        <p>Alumni want to give back but lack structured opportunities to mentor and invest in students meaningfully.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-icon">💡</div>
                        <h3>Student Resource Gaps</h3>
                        <p>Students with innovative ideas often lack mentorship, funding, and connections to bring them to life.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-icon">🔗</div>
                        <h3>Fragmented Networks</h3>
                        <p>Existing alumni networks are disconnected from student innovation and entrepreneurial ecosystems.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Solutions Section
function Solutions() {
    return (
        <section id="solutions" className="section solutions">
            <div className="container">
                <h>Our Solutions</h>
                <div className="solution-cards">
                    <div className="solution-card">
                        <p>A gamified alumni engagement platform offering.</p>
                    </div>
                    <div className="solution-card">
                        <p>Alumni recognition through challenges and awards.</p>
                    </div>
                    <div className="solution-card">
                        <p>Public voting + expert judging to validate achievements.</p>
                    </div>
                    <div className="solution-card">
                        <p>Micro-donations linked to votes ($0.50–$2).</p>
                    </div>
                    <div className="solution-card">
                        <p>Mentorship portal connecting alumni and students.</p>
                    </div>
                    <div className="solution-card">
                        <p>Lack of Targeted Lead Generation.</p>
                    </div>
                    <div className="solution-card">
                        <p>Institutional dashboards to track engagement and funding.</p>
                    </div>
                    <div className="solution-card">
                        <p>Legacy Wall: a permanent digital archive of alumni impact.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Market Opportunity
function MarketOpportunity() {
    return (
        <section id="opportunity" className="section opportunity">
            <div className="container">
                <h2>Market Opportunity</h2>
                <div className="opportunity-content">
                    <div className="opportunity-text">
                        <p>With a global perspective, our marketing agency has proudly served multinational clients, delivering tailored strategies that transcend borders and cultures, ensuring consistent brand success on a worldwide scale.</p>
                    </div>
                    <div className="opportunity-chart">
                        <div className="chart-bar">
                            <div className="bar-label">Total Available Market (TAM)</div>
                            <p>25,000+ universities worldwide, 200M+ alumni.</p>
                            <div className="bar-fill" style={{width: '85%'}}>
                                <span></span>
                            </div>
                        </div>
                        <div className="chart-bar">
                            <div className="bar-label">Serviceable Available Market (SAM)</div>
                                <p>USA + diaspora universities (10,000 institutions, 50M alumni)</p>
                            <div className="bar-fill" style={{width: '75%'}}>
                                <span></span>
                            </div>
                        </div>
                        <div className="chart-bar">
                            <div className="bar-label">Serviceable Obtainable Market (SOM)</div>
                                <p>Targeting 50 universities in Nigeria, Ghana, Kenya, the UK, and the USA in year one = 500k+ active users</p>
                            <div className="bar-fill" style={{width: '65%'}}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Target Users
function TargetUsers() {
    return (
        <section className="section users">
            <div className="container">
                <h2>Our Target Users</h2>
                <div className="user-cards">
                    <div className="user-card">
                        <div className="user-avatar institution"></div>
                        {/* <h3>Alumni</h3> */}
                        <p>Alumni (visibility + recognition)..</p>
                    </div>
            
                    <div className="user-card">
                        <div className="user-avatar institution"></div>
                        {/* <h3>Students</h3> */}
                        <p>Institutions (fundraising + data)</p>
                    </div>
                    
                    <div className="user-card">
                        <div className="user-avatar institution"></div>
                        <p>Students (mentorship + inspiration).</p>
                    </div>

                    <div className="user-card">
                        <div className="user-avatar institution"></div>
                        <p>Sponsors (access to top talent + brand visibility).</p>
                    </div>

                    <div className="user-card">
                        <div className="user-avatar institution"></div>
                        <p>Development partners (community projects).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Business Model
function BusinessModel() {
    return (
        <section className="section business-model">
            <div className="container">
                <h2>Business Model</h2>
                <div className="revenue-streams">
                    <div className="revenue-card">
                        <p>Micro-donations via voting.</p>
                    </div>

                    <div className="revenue-card">
                        <p>Subscription fees from institutions.</p>
                    </div>

                    <div className="revenue-card">
                        <p>Sponsorships & partnerships</p>
                    </div>

                    <div className="revenue-card">
                        <p>Branded spotlight webinars.</p>
                    </div>

                    <div className="revenue-card">
                        <p>AI storytelling tools (premium).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Competitive Advantage
function CompetitiveAdvantage() {
    return (
        <section className="section advantage">
            <div className="container">
                <h2>Competitive Advantage</h2>
                <div className="advantage-content">
                    <div className="advantage-points">
                        <div className="advantage-point">
                            <p>First gamified alumni ecosystem with micro-donation triggers</p>
                        </div>
                        
                        <div className="advantage-point">
                            <p>Combines storytelling, funding, and mentorship in one platform.</p>
                        </div>
                        
                        <div className="advantage-point">
                            <p>Protected by IP and copyright frameworks integrated into our business model and valuation, ensuring defensibility and scalability</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

// Traction
function Traction() {
    return (
        <section className="section traction">
            <div className="container">
                <h2>Traction & Milestones</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h4>Validation from 20+ global alumni bodies.</h4>
                        </div>
                    </div>
                    <div className="timeline-item">
                        {/* <div className="timeline-date">2022 Q4</div> */}
                        <div className="timeline-content">
                            <h4>UI/UX tested across Nigeria, UK, Kenya.</h4>
                        </div>
                    </div>
                    <div className="timeline-item">
                        {/* <div className="timeline-date">2023 Q2</div> */}
                        <div className="timeline-content">
                            <h4>Partnerships secured with media outlets (BBC, NTA, TVC, etc.).</h4>
                        </div>
                    </div>
                    <div className="timeline-item">
                        {/* <div className="timeline-date">2024 Q1</div> */}
                        <div className="timeline-content">
                            <h4>Pilot launch set for Q3 2025 across 5 countries</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Funding Ask
function FundingAsk() {
    return (
        <section className="section funding">
            <div className="container">
                <h2>Funding Ask</h2>
                <div className="funding-content">
                    <div className="funding-amount">
                        <h3>Requesting Investment of £300,000</h3>
                        <p>For 10-15% equity.</p>
                    </div>
                    <div className="funding-use">
                        <h4>Use of Funds</h4>
                        <ul>
                            <li>40% Platform development & security.</li>
                            <li>25% Marketing & community engagement</li>
                            <li>20% Operations & staff</li>
                            <li>15% Partnerships & global expansion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Vision
function Vision() {
    return (
        <section className="section vision">
            <div className="container">
                <h2>Our Vision</h2>
                <div className="vision-content">
                    <p>To become the world’s most impactful alumni ecosystem, fostering recognition, mentorship, and funding that leaves generational legacies</p>                
                </div>
            </div>
        </section>
    );
}

// Footer
function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Alumni Challenge</h3>
                        <p>Building bridges between alumni and students to create lasting impact.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>motrac@motracglobal.com</p>
                        {/* <p>+1 (555) 123-4567</p> */}
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 Alumni Challenge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default App;