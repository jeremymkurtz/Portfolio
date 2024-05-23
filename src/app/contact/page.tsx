import LinkUnderline from "@/components/LinkUnderline";

export default function Contact() {
    return (
        <div className={"text-lg"}>
            <h1 className="text-3xl font-semibold">Contact</h1>
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