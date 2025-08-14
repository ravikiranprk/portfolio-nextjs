import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, listItems, image, projectLink }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
                <div className="p-2">
                    <h2 className="text-xl font-bold capitalize">{title}</h2>
                    <ul className="flex flex-col gap-1 ml-6">
                        {listItems.map((item, index) => {
                            const element = index === 2 ? <li key={index} className="list-disc"><strong>Tech Stack: </strong>{item}</li> : <li key={index} className="list-disc">{item}</li>
                            return element;
                        })}
                    </ul>
                </div>
                <div className="p-2 rounded-lg">
                    <Link href={projectLink ?? "#"} target="_blank">
                        <Image src={image ?? "/window.svg"} alt="project" width={500} height={500} />
                    </Link>
                </div>
            </div>
        </>
    )
}