import HeaderCSS from "./Header.module.css";
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
    <Container className={HeaderCSS["header-container"]}>
        <h3 className={HeaderCSS["header-logo"]}>
            Verif.
        </h3>
    <div className={HeaderCSS["user-box"]}>
        <div className={HeaderCSS["user-logo"]}>
        <i className="fi fi-rr-circle-user"></i>
        </div>
        <div className={HeaderCSS["user-info-box"]}>
            <div className={HeaderCSS["user-name"]}>Burhanul Islam</div>
            <p className={HeaderCSS["user-id"]}>123456789</p>
        </div>
    </div>
    </Container>
    </>
  );
}

export default Header;
