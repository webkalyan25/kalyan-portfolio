import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header py-3 ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <h4 className="m-0 fw-bold logo">
            WEB-KALYAN
          </h4>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-4">
            <span className="fw-medium phone">
              📞 +91 82788-87302
            </span>
            <span className="fs-4 cursor-pointer menu">
              ☰
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
