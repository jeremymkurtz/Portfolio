import WidenText from "@/components/WidenAnimator";

export default function Work(){
    return (
        <div className={"gap-2"}>
            <WidenText indexes={[0,2]} text={"Work"} cn={"text-4xl font-black uppercase"}/>
            <WidenText indexes={[2,3]} text={"Projects"} cn={"text-4xl font-black uppercase"}/>
        </div>
    )
}