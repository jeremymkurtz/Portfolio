import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={40} height={40}
                 className={"stroke-[1.5px] fill-none stroke-primary dark:stroke-primaryDark"}>
                <path className="cls-1"
                      d="m9.5,41.56c-4.82,0-8.75-3.92-8.75-8.75v-6c.17-.87.94-1.52,1.8-1.52.87.03,1.58.63,1.78,1.44v5.65c0,3.34,2.72,6.05,6.05,6.05s6.05-2.72,6.05-6.05V10.8c0-.41-.34-.75-.75-.75h-6.82c-.41,0-.75.34-.75.75v2.61c0,1.03-.84,1.86-1.86,1.86s-1.86-.84-1.86-1.86v-2.61c0-2.34,1.9-4.24,4.24-4.24h7.13c2.34,0,4.24,1.9,4.24,4.24v21.93c0,4.87-3.96,8.84-8.84,8.84h-1.65Z"/>
                <path className="cls-1"
                      d="m44.66,41.56c-.98,0-1.77-.8-1.77-1.77v-4.88c0-.05,0-.1-.02-.15.01-.14.02-.29.02-.43v-1.22c0-3.34-2.71-6.05-6.05-6.05s-6.05,2.72-6.05,6.05v1.22c0,.15,0,.29.02.44,0,.05-.02.1-.02.15v4.89c0,.97-.79,1.77-1.77,1.77s-1.77-.79-1.77-1.77V8.33c0-.97.79-1.77,1.77-1.77s1.77.79,1.77,1.77v11.33c0,.31.19.59.48.7.09.03.18.05.27.05.21,0,.41-.09.56-.25l11.83-13.09c.36-.4.88-.63,1.42-.63.48,0,.93.18,1.29.5.78.71.85,1.92.14,2.71l-11.74,12.99c-.2.22-.25.54-.13.81.12.27.39.45.69.45h1.88c4.95,0,8.98,4.03,8.98,8.98v6.92c0,.98-.8,1.77-1.77,1.77Z"/>
            </svg>
        </Link>
        )
}