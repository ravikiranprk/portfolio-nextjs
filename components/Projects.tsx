export default function Projects() {
    return (
        <section id="projects" className="mt-14 mb-16 flex flex-col gap-8">
            <h2 className='text-3xl font-bold mb-4'>Projects</h2>
            <h2 className='text-2xl font-bold'>MERN Stack Admin Dashboard for a Car Rental System</h2>
            <ul className='flex flex-col gap-2'>
                <li>A modern and user-friendly dashboard for a car rental system, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.</li>
                <li>Features include user authentication, role-based access control, and a responsive design that adapts to different screen sizes.</li>
                <li>Tech Stack: MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Recharts, OAuth (Google) and Vite.</li>
            </ul>
            <h2 className='text-2xl font-bold'>Next.js CRUD Application</h2>
            <ul className='flex flex-col gap-2'>
                <li>A Next.js application that allows users to create, read, update, and delete data from a MongoDB database.</li>
                <li>Features include user authentication, and a responsive design that adapts to different screen sizes.</li>
                <li>Tech Stack: Next.js, React.js, Tailwind CSS, MongoDB, Next.js API routes, Next.js App routing, Fetch API, OAuth (Google) and JWT.</li>
            </ul>
        </section>
    )
}