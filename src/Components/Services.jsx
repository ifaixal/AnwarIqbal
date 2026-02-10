import './Services.css'
import React from 'react'

const services = [
  {
    title: "Financial Reporting",
    description:
      "Monthly financial statements, profit & loss reports, & balance sheet informing about your business performance.",
    tags: ["Monthly P&L Statements", "Balance Sheet Reports", "Cash Flow Analysis"],
    imgSrc: "/FRBGIMG.jpg"
  },
  {
    title: "Tax Preparation",
    description:
      "Stay complaint and maximize deduction with our professional tax preparation and planning services.",
    tags: ["Quarterly Tax Fillings", "Annual Tax Returns", "Tax Planning Strategy"],
    imgSrc: "/TaxBGIMG.jpg"
  },
  {
    title: "Payroll Services",
    description:
      "Complete payroll management including calculations, tax withholdings, and compliance reporting.",
    tags: ["Payroll Processing", "Tax Withholdings", "Compliance Reporting"],
    imgSrc: "/PayrollBGIMG.jpg"
  },
  {
    title: "Account Payable & Receivable",
    description:
      "Manage your incoming and outgoing payments efficiently with our comprehensive AR/AP services.",
    tags: ["Invoice Management", "Payment Processing", "Collections Support"],
    imgSrc: "/ApArBGIMG.jpg"
  }
];

const Services = () => {
  return (
    <section className="services-section" id='Services'>
      <div className="services-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C120,80 240,0 360,20 480,40 600,80 720,70 840,60 960,20 1080,20 1200,20 1320,40 1440,30 L1440,0 L0,0 Z" fill="rgb(245, 245, 245)"/>
        </svg>
      </div>
      <div className="services-container">
        <h2 className="services-heading">Services Offered</h2>
        <p className="services-subheading">
          Comprehensive bookkeeping solutions tailored to your business needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.imgSrc} alt="" className='serviceImage'/>
              <div className="service-card-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul>
                  {service.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services