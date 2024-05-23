import WidenAnimator from "@/components/WidenAnimator";

export default function Work(){
    return (
        <div className={"gap-2"}>
            <WidenAnimator indexes={[0,2]} text={"Work"} cn={"text-4xl font-black uppercase"}/>
            <WidenAnimator indexes={[2,3]} text={"Projects"} cn={"text-4xl font-black uppercase"}/>
        </div>
    )
}