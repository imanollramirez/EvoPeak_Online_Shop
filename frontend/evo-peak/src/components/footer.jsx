import "../components/footer.css";
import Logo from "../assets/EvoPeak_Footer.png";

const footer = () => {

    return (
    <>
    <div className="bottom text-center pt-3">
    <a href="/"><img src={Logo} width={180}/></a>
    <p className="mt-2"><a href="/">Terminos y condiciones</a> | <a href="/"> Politicas y condiciones</a> <span className="at">@EvoPeak_SV</span></p>
    <p class="socials mt-2 pb-2 m-b-0">
        <a href="https://www.facebook.com/ricaldone.itr" target="blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://x.com/ricaldone_itr" target="blank"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/ricaldone/" target="blank"><i class="fa-brands fa-instagram"></i></a>
        </p>
    </div>
    </>
    )
}

export default footer;