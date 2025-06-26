import "../components/footer.css";
import Logo from "../assets/EvoPeak_Footer.png";

const footer = () => {

    return (
    <>
    <div className="bottom text-center pt-3">
    <a href="/inicio"><img src={Logo} width={180}/></a>
    <p className="mt-2"><a href="/inicio">Terminos y condiciones</a> | <a href="/inicio"> Politicas y condiciones</a> <span className="at">@EvoPeak_SV</span></p>
    <p className="socials mt-2 pb-2 m-b-0">
        <a href="https://www.facebook.com/ricaldone.itr" target="blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://x.com/ricaldone_itr" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/ricaldone/" target="blank"><i className="fa-brands fa-instagram"></i></a>
        </p>
    </div>
    </>
    )
}

export default footer;