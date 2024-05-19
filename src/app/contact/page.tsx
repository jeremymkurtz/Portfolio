import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="text-lg">Email: <Link href="mailto:kurtzjeremy126@gmail.com"><a>kurtzjeremy126@gmail.com</a></Link></p>
            <p className="text-lg">Linkedin: <Link href="https://www.linkedin.com/in/jeremymkurtz/"><a>jeremymkurtz</a></Link></p>
            <p className="text-lg">Github: <Link href="https://www.github.com/jeremymkurtz"><a>jeremymkurtz</a></Link></p>
            <p className="text-lg">Phone Number: <Link href="tel:3127184905"><a>+1[312]-718-4905</a></Link></p>
        </div>
    )
}