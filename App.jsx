import { useState } from "react";
import "./App.css";

import electricalImage from "./assets/electrical.jpg";
import plumbingImage from "./assets/plumbing.jpg";
import installationImage from "./assets/installation.jpg";

function App() {
  const [language, setLanguage] = useState("en");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const text = {
    en: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",

      smallTitle: "VJ ELECTRICAL & PLUMBING WORKS",

      heroTitle1: "Reliable Solutions",
      heroTitle2: "For Your",
      heroTitle3: "Home & Office",

      heroText:
        "Professional electrical, plumbing, installation and repair services at your doorstep.",

      bookService: "Book a Service",
      callNow: "Call Now",

      electrical: "Electrical Works",
      plumbing: "Plumbing Works",
      installation: "Installation & Repair",

      electricalDesc:
        "Wiring, fan, light, switch, MCB and electrical fault repair.",

      plumbingDesc:
        "Water leakage, pipe repair, tap, sink and bathroom plumbing.",

      installationDesc:
        "Professional installation, maintenance and repair services.",

      ourServices: "OUR SERVICES",
      whatHelp: "What We Can",
      helpWith: "Help With",

      whyChoose: "WHY CHOOSE US",
      safety: "Your Safety,",
      priority: "Our Priority",

      whyText:
        "We provide reliable and professional electrical and plumbing services for homes, offices and commercial spaces.",

      quality: "Quality Service",
      qualityDesc: "Professional work",

      onTime: "On Time Work",
      onTimeDesc: "Quick response",

      affordable: "Affordable Prices",
      affordableDesc: "Fair pricing",

      onlineService: "ONLINE SERVICE",
      bookingTitle: "Book a",
      bookingTitle2: "Service",

      bookingText:
        "Please enter your details and service requirement below.",

      customerName: "Customer Name",
      customerPlaceholder: "Enter your full name",

      mobile: "Mobile Number",
      mobilePlaceholder: "Enter your mobile number",

      address: "Service Address",
      addressPlaceholder: "Enter your complete address",

      selectService: "Select Service",
      selectServicePlaceholder: "Select your service",

      problem: "Problem / Fault Details",
      problemPlaceholder:
        "Explain your electrical or plumbing problem",

      uploadPhoto: "Upload Fault Photo",

      uploadText:
        "You can upload a photo of the electrical or plumbing problem.",

      appointmentDate: "Preferred Appointment Date",
      appointmentTime: "Preferred Appointment Time",

      payment: "Payment Method",
      paymentPlaceholder: "Select payment method",

      cash: "Cash",
      gpay: "GPay",

      bookAppointment: "Book Appointment",

      needService: "Need a Service?",
      contactText: "Contact VJ Electrical & Plumbing Works",

      location:
        "Madurai, Arapalayam, Tamil Nadu - 625016",

      footer:
        "© 2026 VJ Electrical & Plumbing Works. All Rights Reserved.",

      successTitle: "Appointment Successful!",
      successText:
        "Your appointment has been booked successfully.",
      successWhatsApp:
        "Your booking details have been sent to VJ Electrical & Plumbing Works WhatsApp.",
      successContact:
        "We will contact you shortly to confirm your appointment.",
      bookAnother: "Book Another Appointment",
      backHome: "Back to Home",

      fillAll:
        "Please fill all the required details before booking.",
    },

    ta: {
      home: "முகப்பு",
      services: "சேவைகள்",
      about: "எங்களைப் பற்றி",
      contact: "தொடர்பு",
      bookNow: "இப்போது முன்பதிவு",

      smallTitle: "VJ மின்சார மற்றும் பிளம்பிங் பணிகள்",

      heroTitle1: "நம்பகமான சேவைகள்",
      heroTitle2: "உங்கள்",
      heroTitle3: "வீடு மற்றும் அலுவலகத்திற்கு",

      heroText:
        "உங்கள் வீடு மற்றும் அலுவலகத்திற்கு தொழில்முறை மின்சார, பிளம்பிங், பொருத்துதல் மற்றும் பழுதுபார்ப்பு சேவைகள்.",

      bookService: "சேவையை முன்பதிவு செய்யுங்கள்",
      callNow: "இப்போது அழைக்கவும்",

      electrical: "மின்சார பணிகள்",
      plumbing: "பிளம்பிங் பணிகள்",
      installation: "பொருத்துதல் மற்றும் பழுதுபார்ப்பு",

      electricalDesc:
        "வயரிங், மின்விசிறி, விளக்கு, சுவிட்ச், MCB மற்றும் மின்சார கோளாறு பழுதுபார்ப்பு.",

      plumbingDesc:
        "தண்ணீர் கசிவு, குழாய் பழுது, டேப், சிங்க் மற்றும் குளியலறை பிளம்பிங் பணிகள்.",

      installationDesc:
        "தொழில்முறை பொருத்துதல், பராமரிப்பு மற்றும் பழுதுபார்ப்பு சேவைகள்.",

      ourServices: "எங்கள் சேவைகள்",
      whatHelp: "நாங்கள் எதில்",
      helpWith: "உதவ முடியும்",

      whyChoose: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?",
      safety: "உங்கள் பாதுகாப்பு,",
      priority: "எங்கள் முன்னுரிமை",

      whyText:
        "வீடுகள், அலுவலகங்கள் மற்றும் வணிக இடங்களுக்கு நம்பகமான மற்றும் தொழில்முறை மின்சார மற்றும் பிளம்பிங் சேவைகளை வழங்குகிறோம்.",

      quality: "தரமான சேவை",
      qualityDesc: "தொழில்முறை பணி",

      onTime: "சரியான நேரத்தில் பணி",
      onTimeDesc: "விரைவான சேவை",

      affordable: "மலிவான விலை",
      affordableDesc: "நியாயமான கட்டணம்",

      onlineService: "ஆன்லைன் சேவை",
      bookingTitle: "ஒரு",
      bookingTitle2: "சேவையை முன்பதிவு செய்யுங்கள்",

      bookingText:
        "உங்கள் விவரங்கள் மற்றும் தேவையான சேவை பற்றிய தகவல்களை கீழே உள்ளிடவும்.",

      customerName: "வாடிக்கையாளர் பெயர்",
      customerPlaceholder: "உங்கள் முழு பெயரை உள்ளிடவும்",

      mobile: "மொபைல் எண்",
      mobilePlaceholder: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்",

      address: "சேவை முகவரி",
      addressPlaceholder: "உங்கள் முழுமையான முகவரியை உள்ளிடவும்",

      selectService: "சேவையை தேர்வு செய்யவும்",
      selectServicePlaceholder: "உங்கள் சேவையை தேர்வு செய்யவும்",

      problem: "பிரச்சனை / கோளாறு விவரம்",
      problemPlaceholder:
        "உங்கள் மின்சார அல்லது பிளம்பிங் பிரச்சனையை விளக்கவும்",

      uploadPhoto: "பிரச்சனை புகைப்படத்தை பதிவேற்றவும்",

      uploadText:
        "மின்சார அல்லது பிளம்பிங் பிரச்சனையின் புகைப்படத்தை பதிவேற்றலாம்.",

      appointmentDate: "விரும்பும் சந்திப்பு தேதி",
      appointmentTime: "விரும்பும் சந்திப்பு நேரம்",

      payment: "கட்டண முறை",
      paymentPlaceholder: "கட்டண முறையை தேர்வு செய்யவும்",

      cash: "Cash",
      gpay: "GPay",

      bookAppointment: "சந்திப்பை முன்பதிவு செய்யவும்",

      needService: "சேவை தேவையா?",
      contactText:
        "VJ மின்சார மற்றும் பிளம்பிங் பணிகளை தொடர்பு கொள்ளுங்கள்",

      location:
        "மதுரை, ஆரப்பாளையம், தமிழ்நாடு - 625016",

      footer:
        "© 2026 VJ மின்சார மற்றும் பிளம்பிங் பணிகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

      successTitle: "முன்பதிவு வெற்றிகரமாக முடிந்தது!",
      successText:
        "உங்கள் சந்திப்பு வெற்றிகரமாக முன்பதிவு செய்யப்பட்டுள்ளது.",
      successWhatsApp:
        "உங்கள் முன்பதிவு விவரங்கள் VJ Electrical & Plumbing Works WhatsApp-க்கு அனுப்பப்பட்டுள்ளன.",
      successContact:
        "உங்கள் சந்திப்பை உறுதி செய்ய நாங்கள் விரைவில் தொடர்பு கொள்வோம்.",
      bookAnother: "மற்றொரு சேவையை முன்பதிவு செய்யவும்",
      backHome: "முகப்புக்கு செல்லவும்",

      fillAll:
        "முன்பதிவு செய்வதற்கு முன் தேவையான அனைத்து விவரங்களையும் நிரப்பவும்.",
    },
  };

  const t = text[language];

  // =====================================================
  // BOOKING FUNCTION
  // =====================================================

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.customerName.value.trim();
    const mobile = form.mobile.value.trim();
    const address = form.address.value.trim();
    const service = form.service.value;
    const problem = form.problem.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    const payment = form.payment.value;

    // Check all details
    if (
      !name ||
      !mobile ||
      !address ||
      !service ||
      !problem ||
      !date ||
      !time ||
      !payment
    ) {
      alert(t.fillAll);
      return;
    }

    // WhatsApp booking message
    const message =
      `🔧 VJ ELECTRICAL & PLUMBING WORKS\n\n` +
      `📋 NEW SERVICE BOOKING\n\n` +
      `👤 Name: ${name}\n` +
      `📱 Mobile: ${mobile}\n` +
      `📍 Address: ${address}\n` +
      `🛠️ Service: ${service}\n` +
      `⚠️ Problem: ${problem}\n` +
      `📅 Date: ${date}\n` +
      `⏰ Time: ${time}\n` +
      `💰 Payment: ${payment}`;

    // NEW PHONE NUMBER
    const whatsappURL =
      "https://wa.me/918667464561?text=" +
      encodeURIComponent(message);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Only NOW show success page
    setBookingSuccess(true);

    // Clear form
    form.reset();

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // SUCCESS PAGE
  // =====================================================

  if (bookingSuccess) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#020b16",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#071b2b",
            border: "1px solid #00aaff",
            borderRadius: "20px",
            padding: "45px 30px",
            textAlign: "center",
            boxSizing: "border-box",
            boxShadow: "0 0 35px rgba(0,170,255,0.20)",
          }}
        >

          {/* SUCCESS ICON */}

          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 25px",
              borderRadius: "50%",
              background: "#16a34a",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "45px",
              fontWeight: "bold",
            }}
          >
            ✓
          </div>

          {/* SUCCESS TITLE */}

          <h1
            style={{
              color: "#00b7ff",
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            {t.successTitle}
          </h1>

          {/* SUCCESS TEXT */}

          <p
            style={{
              color: "#ffffff",
              fontSize: "16px",
              lineHeight: "1.7",
              margin: "12px 0",
            }}
          >
            {t.successText}
          </p>

          <p
            style={{
              color: "#ffffff",
              fontSize: "15px",
              lineHeight: "1.7",
              margin: "12px 0",
            }}
          >
            📲 {t.successWhatsApp}
          </p>

          <p
            style={{
              color: "#ffffff",
              fontSize: "15px",
              lineHeight: "1.7",
              margin: "12px 0 25px",
            }}
          >
            {t.successContact}
          </p>

          {/* BOOK AGAIN */}

          <button
            type="button"
            onClick={() => {
              setBookingSuccess(false);

              setTimeout(() => {
                const bookingSection =
                  document.getElementById("booking");

                if (bookingSection) {
                  bookingSection.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }, 100);
            }}
            style={{
              background: "#00aaff",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "13px 25px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {t.bookAnother}
          </button>

          <br />

          {/* HOME */}

          <a
            href="#home"
            onClick={() => setBookingSuccess(false)}
            style={{
              display: "inline-block",
              marginTop: "20px",
              color: "#00b7ff",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            {t.backHome}
          </a>

        </div>
      </div>
    );
  }

  // =====================================================
  // MAIN WEBSITE
  // =====================================================

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span>VJ</span>
        </div>

        <div className="nav-links">

          <a href="#home">
            {t.home}
          </a>

          <a href="#services">
            {t.services}
          </a>

          <a href="#about">
            {t.about}
          </a>

          <a href="#contact">
            {t.contact}
          </a>

        </div>

        {/* LANGUAGE */}

        <div className="language-switch">

          <button
            type="button"
            className={
              language === "en"
                ? "language-active"
                : ""
            }
            onClick={() => setLanguage("en")}
          >
            🇬🇧 English
          </button>

          <button
            type="button"
            className={
              language === "ta"
                ? "language-active"
                : ""
            }
            onClick={() => setLanguage("ta")}
          >
            🇮🇳 தமிழ்
          </button>

        </div>

        <a
          href="#booking"
          className="nav-button"
        >
          {t.bookNow}
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <p className="small-title">
            {t.smallTitle}
          </p>

          <h1>

            {t.heroTitle1}

            <br />

            {t.heroTitle2}{" "}

            <span>
              {t.heroTitle3}
            </span>

          </h1>

          <p className="hero-text">
            {t.heroText}
          </p>

          <div className="hero-buttons">

            <a
              href="#booking"
              className="primary-button"
            >
              {t.bookService}
            </a>

            <a
              href="tel:+918667464561"
              className="secondary-button"
            >
              📞 {t.callNow}
            </a>

          </div>

        </div>


        {/* HERO CARD */}

        <div className="hero-card">

          <div className="electric-icon">
            ⚡
          </div>

          <h2>
            VJ
          </h2>

          <p>

            {t.electrical}

            <br />

            &

            <br />

            {t.plumbing}

          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="services"
      >

        <div className="section-title">

          <p>
            {t.ourServices}
          </p>

          <h2>

            {t.whatHelp}{" "}

            <span>
              {t.helpWith}
            </span>

          </h2>

        </div>


        {/* SERVICE CARDS */}

        <div className="service-container">


          {/* ELECTRICAL */}

          <div className="service-card">

            <img
              src={electricalImage}
              alt="Electrical Works"
              className="service-image"
            />

            <div className="service-card-content">

              <div className="service-icon">
                ⚡
              </div>

              <h3>
                {t.electrical}
              </h3>

              <p>
                {t.electricalDesc}
              </p>

              <a
                href="#booking"
                className="service-button"
              >
                {language === "en"
                  ? "Book Service"
                  : "சேவையை முன்பதிவு"}
              </a>

            </div>

          </div>


          {/* PLUMBING */}

          <div className="service-card">

            <img
              src={plumbingImage}
              alt="Plumbing Works"
              className="service-image"
            />

            <div className="service-card-content">

              <div className="service-icon">
                💧
              </div>

              <h3>
                {t.plumbing}
              </h3>

              <p>
                {t.plumbingDesc}
              </p>

              <a
                href="#booking"
                className="service-button"
              >
                {language === "en"
                  ? "Book Service"
                  : "சேவையை முன்பதிவு"}
              </a>

            </div>

          </div>


          {/* INSTALLATION */}

          <div className="service-card">

            <img
              src={installationImage}
              alt="Installation & Repair"
              className="service-image"
            />

            <div className="service-card-content">

              <div className="service-icon">
                🔧
              </div>

              <h3>
                {t.installation}
              </h3>

              <p>
                {t.installationDesc}
              </p>

              <a
                href="#booking"
                className="service-button"
              >
                {language === "en"
                  ? "Book Service"
                  : "சேவையை முன்பதிவு"}
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section
        id="about"
        className="why-us"
      >

        <div className="why-content">

          <p className="small-title">
            {t.whyChoose}
          </p>

          <h2>

            {t.safety}

            <br />

            <span>
              {t.priority}
            </span>

          </h2>

          <p>
            {t.whyText}
          </p>

        </div>


        <div className="features">

          {/* QUALITY */}

          <div>

            <strong>
              ✓
            </strong>

            <h3>
              {t.quality}
            </h3>

            <p>
              {t.qualityDesc}
            </p>

          </div>


          {/* ON TIME */}

          <div>

            <strong>
              ✓
            </strong>

            <h3>
              {t.onTime}
            </h3>

            <p>
              {t.onTimeDesc}
            </p>

          </div>


          {/* AFFORDABLE */}

          <div>

            <strong>
              ✓
            </strong>

            <h3>
              {t.affordable}
            </h3>

            <p>
              {t.affordableDesc}
            </p>

          </div>

        </div>

      </section>


      {/* ================= BOOKING ================= */}

      <section
        id="booking"
        className="booking-section"
      >

        <div className="section-title">

          <p>
            {t.onlineService}
          </p>

          <h2>

            {t.bookingTitle}{" "}

            <span>
              {t.bookingTitle2}
            </span>

          </h2>

          <p>
            {t.bookingText}
          </p>

        </div>


        {/* BOOKING FORM */}

        <form
          className="booking-box"
          onSubmit={handleBooking}
        >

          {/* NAME */}

          <label>
            {t.customerName}
          </label>

          <input
            type="text"
            name="customerName"
            placeholder={t.customerPlaceholder}
            required
          />


          {/* MOBILE */}

          <label>
            {t.mobile}
          </label>

          <input
            type="tel"
            name="mobile"
            placeholder={t.mobilePlaceholder}
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />


          {/* ADDRESS */}

          <label>
            {t.address}
          </label>

          <textarea
            name="address"
            placeholder={t.addressPlaceholder}
            rows="3"
            required
          ></textarea>


          {/* SERVICE */}

          <label>
            {t.selectService}
          </label>

          <select
            name="service"
            defaultValue=""
            required
          >

            <option
              value=""
              disabled
            >
              {t.selectServicePlaceholder}
            </option>

            <option value="Electrical Works">
              {t.electrical}
            </option>

            <option value="Plumbing Works">
              {t.plumbing}
            </option>

            <option value="Installation & Repair">
              {t.installation}
            </option>

          </select>


          {/* PROBLEM */}

          <label>
            {t.problem}
          </label>

          <textarea
            name="problem"
            placeholder={t.problemPlaceholder}
            rows="4"
            required
          ></textarea>


          {/* PHOTO */}

          <label>
            {t.uploadPhoto}
          </label>

          <input
            type="file"
            name="faultPhoto"
            accept="image/*"
          />

          <small>
            {t.uploadText}
          </small>


          {/* DATE */}

          <label>
            {t.appointmentDate}
          </label>

          <input
            type="date"
            name="date"
            required
          />


          {/* TIME */}

          <label>
            {t.appointmentTime}
          </label>

          <input
            type="time"
            name="time"
            required
          />


          {/* PAYMENT */}

          <label>
            {t.payment}
          </label>

          <select
            name="payment"
            defaultValue=""
            required
          >

            <option
              value=""
              disabled
            >
              {t.paymentPlaceholder}
            </option>

            <option value="Cash">
              {t.cash}
            </option>

            <option value="GPay">
              {t.gpay}
            </option>

          </select>


          {/* BOOK BUTTON */}

          <button type="submit">
            {t.bookAppointment}
          </button>

        </form>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact"
      >

        <h2>
          {t.needService}
        </h2>

        <p>
          {t.contactText}
        </p>


        {/* PHONE */}

        <a href="tel:+918667464561">
          📞 +91 8667464561
        </a>


        {/* EMAIL */}

        <a
          href="mailto:vj.electricals.madurai@gmail.com"
        >
          ✉️ vj.electricals.madurai@gmail.com
        </a>


        {/* ADDRESS */}

        <p>
          📍 {t.location}
        </p>


        {/* WHATSAPP */}

        <a
          href="https://wa.me/918667464561"
          target="_blank"
          rel="noreferrer"
        >
          💬 WhatsApp
        </a>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <h3>
          VJ ELECTRICAL AND PLUMBING WORKS
        </h3>

        <p>
          {t.footer}
        </p>

      </footer>

    </div>
  );
}

export default App;