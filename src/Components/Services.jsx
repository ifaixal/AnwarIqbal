import './Services.css'
import React from 'react'

const services = [
  {
    title: "Financial Reporting",
    description:
      "Monthly financial statements, profit and loss reports, and balance sheet to keep you informed about your business performance.",
    tags: ["Monthly P&L Statements", "Balance Sheet Reports", "Cash Flow Analysis"],
    imgSrc: "../../public/FRBGIMG.jpg"
  },
  {
    title: "Tax Preparation",
    description:
      "Stay complaint and maximize deduction with our professional tax preparation and planning services.",
    tags: ["Quarterly Tax Fillings", "Annual Tax Returns", "Tax Planning Strategy"],
    imgSrc: "../../public/TaxBGIMG.jpg"
  },
  {
    title: "Payroll Services",
    description:
      "Complete payroll management including calculations, tax withholdings, and compliance reporting.",
    tags: ["Payroll Processing", "Tax Withholdings", "Compliance Reporting"],
    imgSrc: "../../public/PayrollBGIMG.jpg"
  },
  {
    title: "Account Payable & Receivable",
    description:
      "Manage your incoming and outgoing payments efficiently with our comprehensive AR/AP services.",
    tags: ["Invoice Management", "Payment Processing", "Collections Support"],
    imgSrc: "../../public/ApArBGIMG.jpg"
  }
];

const Services = () => {
  return (
    <section className="services-section">
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