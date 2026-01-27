const Header = () => {
  return (

    <>
    <header className="position-fixed w-100  py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <h4 className="text-white m-0 fw-bold">
            WEB-KALYAN
          </h4>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-4">
            <span className="text-white fw-medium">
              📞 +91 82788-87302
            </span>
            <span className="text-white fs-4 cursor-pointer">
              ☰
            </span>
          </div>

        </div>
      </div>
    </header></>
    
  );
};

export default Header;
