import LinkUnderline from "@/components/LinkUnderline";
import WidenText from "@/components/WidenAnimator";

export default function Contact() {
    return (
        <div className={"text-lg"}>
            <WidenText indexes={[0, 2]} text={"Contact"} cn={"text-4xl font-black uppercase"}/>
            <LinkUnderline useLink={true} href={"mailto:kurtzjeremy126@gmail.com"}>
                Email: kurtzjeremy126@gmail.com
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"https://www.linkedin.com/in/jeremymkurtz/"}>
                Linkedin: jeremymkurtz
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"https://www.github.com/jeremymkurtz"}>
                Github: jeremymkurtz
            </LinkUnderline>
            <LinkUnderline useLink={true} href={"tel:+1(312)718-4905"}>
                Phone Number: +1(312)718-4905
            </LinkUnderline>
        </div>
    )
}