export default function ProjectCard({ title, listItems }) {
    return (
        <>
            <h2 className="text-2xl font-bold uppercase">{title}</h2>
            <ul className="flex flex-col gap-1 list-disc ml-6">
                {listItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}