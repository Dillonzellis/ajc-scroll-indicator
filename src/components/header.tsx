export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="https://www.ajc.com/">
          <img
            className="large-logo"
            src="https://www.ajc.com/pf/resources/logos/AJC/logo-full-redesign.svg?d=1458"
            alt="AJC Logo"
          />
          <img
            src="https://www.ajc.com/pf/resources/logos/AJC/logo-short.svg?d=1458"
            alt="AJC Logo"
            className="small-logo"
          />
        </a>
      </div>
    </header>
  );
};
