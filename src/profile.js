import React from 'react';
import Navbar from './components/navbar';

const founders = [
  {
    name: 'DR. IR. H. ADY SETIAWAN, S.H., M.H., M.M., M.T.',
    image: '/images/ady-setiawan.svg'
  },
  {
    name: 'SUKARNO, SE.',
    image: '/images/sukarno.svg'
  }
];

const management = [
  { name: 'SUKARNO, SE.', title: 'Chairman', image: '/images/sukarno.svg' },
  { name: 'DR. IR. H. ADY SETIAWAN, S.H., M.H., M.M., M.T.', title: 'General Chairman', image: '/images/ady-setiawan.svg' },
  { name: 'NUR KAMID', title: 'Chairman', image: '/images/nur-kamid.svg' },
  { name: 'EDY MULYADI', title: 'Secretary', image: '/images/edy-mulyadi.svg' },
  { name: 'EKO SUPRIYADI GL', title: 'Treasurer', image: '/images/eko-supriyadi.svg' }
];

const coreValues = [
  { term: 'Ṣalawāt', desc: 'We serve with unwavering dedication, honesty, loyalty, and a commitment to just and fair practices.' },
  { term: 'Ṣiddīq', desc: 'We constantly strive to produce new and impactful innovations and inventions.' },
  { term: 'Originality', desc: 'We prioritize rigorous evaluation, monitoring, and balanced processes in all our work.' },
  { term: 'Reporting', desc: 'We operate with precision, using dimensions that are both appropriate and measurable to ensure effectiveness.' }
];

const cardStyle = {
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  padding: '1rem',
  textAlign: 'center'
};

export default function Profile() {
  return (
    <div>
      <Navbar active="profile" />
      <section className="py-5">
        <div className="container">
          <h2 className="text-center" style={{ color: '#006C2C', fontWeight: '700' }}>KPM HADIST</h2>
          <h1 className="text-center mb-4" style={{ color: '#006C2C', fontWeight: '800' }}>Profile</h1>

          {/* Founder */}
          <h4 className="text-center mb-3" style={{ fontWeight: '600' }}>Founder</h4>
          <div className="row justify-content-center mb-5">
            {founders.map((f, i) => (
              <div className="col-10 col-md-4 mb-3" key={i}>
                <div style={cardStyle}>
                  <img src={f.image} alt={f.name} className="img-fluid mb-2" />
                  <p style={{ fontWeight: '600', marginBottom: 0 }}>{f.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Management */}
          <h4 className="text-center mb-3" style={{ fontWeight: '600' }}>Management</h4>
          <div className="row justify-content-center mb-5">
            {management.map((m, i) => (
              <div className="col-10 col-md-4 col-lg-3 mb-4" key={i}>
                <div style={cardStyle}>
                  <img src={m.image} alt={m.name} className="img-fluid mb-2" />
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{m.name}</p>
                  <small className="text-muted">{m.title}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <h4 className="text-center mb-3" style={{ color: '#006C2C', fontWeight: '700' }}>Core Values</h4>
          <div className="row mb-5">
            <div className="col-md-4">
              {coreValues.map((cv, idx) => (
                <div key={idx} className="d-flex align-items-start mb-3">
                  <div style={{ width: '4px', backgroundColor: '#FFD55A', marginRight: '0.75rem', height: '1.5rem' }} />
                  <p style={{ fontWeight: '600', margin: 0 }}>{cv.term}</p>
                </div>
              ))}
            </div>
            <div className="col-md-8">
              {coreValues.map((cv, idx) => (
                <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{cv.desc}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact-section py-5">
        <div className="container-fluid">
          <div className="row align-items-start">
            {/* Left: Title */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h4 className="contact-title">Contact <br /> Us!</h4>
            </div>
            {/* Right: Details */}
            <div className="col-12 col-md-8">
              <ul className="contact-list list-unstyled">
                <li>
                  <img src="/images/location.svg" alt="Address" /> 
                  Jl. Laksamana 1 Blok H-16, Perum. Ayodya, Putat, Kec. Purwodadi, Kab. Grobogan, Indonesia.
                </li>
                <li>
                  <img src="/images/email.svg" alt="Email" /> 
                  kpmhadist@gmail.com
                </li>
                <li>
                  <img src="/images/phone.svg" alt="Phone" /> 
                  (+62) 8112759300
                </li>
                <li>
                  <img src="/images/instagram.svg" alt="Instagram" /> 
                  @kpmhadist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
