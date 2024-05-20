import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="text-lg underline">Email: <Link href="mailto:kurtzjeremy126@gmail.com">kurtzjeremy126@gmail.com</Link></p>
            <p className="text-lg underline">Linkedin: <Link href="https://www.linkedin.com/in/jeremymkurtz/">jeremymkurtz</Link></p>
            <p className="text-lg underline">Github: <Link href="https://www.github.com/jeremymkurtz">jeremymkurtz</Link></p>
            <p className="text-lg underline">Phone Number: <Link href="tel:+1(312)718-4905">+1[312]-718-4905</Link></p>
        </div>
    )
}