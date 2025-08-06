import React from 'react';
import Navbar from './components/navbar';

export default function MBG() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="mbg-hero"
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: '80vh',
          backgroundImage: `url('/images/mbg.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}
        />
        <div className="position-relative text-white px-4">
          <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>
            Makan Bergizi Gratis (MBG)
          </h1>
          <p className="lead fst-italic">
            Indonesia's Free Nutritious Meal (MBG) program
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section id="mbg-content" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6">
              <h2 style={{ color: '#006C2C', fontWeight: 700 }}>
                The Foundation for a Golden Generation
              </h2>
              <p style={{ lineHeight: 1.6 }}>
                Indonesia’s vision for its Golden Generation in 2045 (Generasi
                Emas 2045) is ambitious and vital for our nation’s future. At
                KPM HADIST, we believe this vision is built on a simple,
                non-negotiable foundation: proper nutrition. A well-nourished
                generation is a generation poised to learn, innovate, and lead.
              </p>
              <p style={{ lineHeight: 1.6 }}>
                The Free Nutritious Meal (Makan Bergizi Gratis - MBG) program is
                the government’s cornerstone initiative to realize this vision.
                KPM HADIST is proud to serve as a key operational partner,
                entrusted with the critical mission of ensuring this program
                reaches its full potential and delivers a lasting, positive
                impact on our nation’s children and mothers.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center">
              {/* Placeholder for grouped image */}
              <img
                src="/images/mbg-group.svg"
                alt="MBG Group of meals"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
        {/* Approach Section */}
      <section id="mbg-approach" className="py-5 bg-white">
        <div className="container">
          <h2 style={{ color: '#006C2C', fontWeight: 700 }}>
            Our Approach: More Than a Meal, A New Standard of Execution
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            KPM HADIST was founded by a team of scientists and technocrats in
            response to a critical challenge in public program execution.
            Historically, many initiatives have suffered from a “follow the
            money” approach, where the focus on process and budget overshadows
            the ultimate goal.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            We operate differently. Our philosophy is <strong>"follow the program."</strong>
          </p>
          <p style={{ lineHeight: 1.6 }}>
            This means we are committed to executing the MBG program with the
            highest standards of integrity, ensuring it is delivered:
          </p>
          <ul style={{ marginLeft: '1.5rem', lineHeight: 1.6 }}>
            <li>Correctly by Law: Adhering to all regulations and standards of transparency.</li>
            <li>Correctly by Method: Utilizing a robust body of knowledge, technology, and logistics to ensure quality and efficiency.</li>
            <li>Correctly by Purpose: Never losing sight of the core mission—to provide nutritious, high-quality meals to those who need them most.</li>
          </ul>
        </div>
      </section>

      {/* Scope Section */}
      <section id="mbg-scope" className="py-5 bg-white">
        <div className="container">
          <h2 style={{ color: '#006C2C', fontWeight: 700 }}>
            Scope and Scale: A Nationwide Commitment
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            The MBG program is a monumental undertaking, and KPM HADIST has built
            the operational capacity to match its scale. Our execution of the
            program is designed for maximum impact, reaching the most critical
            demographics for national development.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-3">
                <div style={{ width: '4px', backgroundColor: '#FFCD39', marginRight: '0.75rem', height: '1.5rem' }} />
                <h5 style={{ fontWeight: 600, margin: 0 }}>Our Target Beneficiaries Include:</h5>
              </div>
              <ul style={{ marginLeft: '1.5rem', lineHeight: 1.6 }}>
                <li>Preschool (PAUD) and Kindergarten (TK) Students</li>
                <li>Elementary (SD), Middle (SMP), and High School (SMA) Students</li>
                <li>Pregnant Women and Nursing Mothers</li>
                <li>Toddlers (Balita)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-3">
                <div style={{ width: '4px', backgroundColor: '#FFCD39', marginRight: '0.75rem', height: '1.5rem' }} />
                <h5 style={{ fontWeight: 600, margin: 0 }}>Our Operational Footprint:</h5>
              </div>
              <ul style={{ marginLeft: '1.5rem', lineHeight: 1.6 }}>
                <li>Serving 8 Million Recipients: A testament to the scale and efficiency of our operations.</li>
                <li>Powered by 2,000 Kitchens (Dapur MBG): A network of dedicated, professionally managed kitchens forming the backbone of our meal distribution.</li>
                <li>Supported by an Integrated Supply Chain: We manage a comprehensive food security supply chain—encompassing agriculture, livestock, and fisheries—to guarantee a consistent flow of fresh, high-quality ingredients to every kitchen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="mbg-promise" className="py-5 bg-white mb-5">
        <div className="container">
          <h2 style={{ color: '#006C2C', fontWeight: 700 }}>
            Our Promise: Accountability and Sustainable Impact
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            As the operational arm for the MBG program, KPM HADIST is committed to
            more than just logistics. We are stewards of a vital national mission.
            Through our legal entity, Yayasan Berkah Tirta Pangan Sejahtera
            (BERTAPA), we provide a fully transparent, accountable, and professional
            framework for program execution.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            We invite government bodies, NGOs, and strategic partners to join us in
            this critical endeavor. Together, we can ensure that every meal served
            is a step toward a stronger, healthier, and more prosperous Indonesia.
          </p>
        </div>
      </section>

                   {/* Footer Section */}
              <footer className="footer bg-dark-green text-white py-5">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                  {/* Kolom Kiri */}
                  <div className="footer-col mb-4 mb-md-0">
                    <h5 className="footer-title">KPM Hadist</h5>
                    <ul className="list-unstyled">
                      <li><a href="/" className="footer-link">Home</a></li>
                      <li><a href="/profile" className="footer-link">Profile</a></li>
                      <li><a href="/mbg" className="footer-link">MBG</a></li>
                      <li><a href="#articles" className="footer-link">Articles</a></li>
                    </ul>
                  </div>

                  {/* Kolom Kanan */}
                  <div className="footer-col">
                    <h5 className="footer-title">KPM Hadist</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-building-fill footer-icon"></i>
                        Jl. Laksamana 1 Blok H-16, Perum. Ayodya, Putat, Kec. Purwodadi, Kab. Grobogan, Indonesia.
                      </li>
                      <li>
                        <i className="bi bi-telephone-fill footer-icon"></i>
                        (+62) 8112759300
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill footer-icon"></i>
                        kpмhadist@gmail.com
                      </li>
                      <li>
                        <i className="bi bi-instagram footer-icon"></i>
                        kpmhadist
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
    </div>
  );
}
