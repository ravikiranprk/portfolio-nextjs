const project1 = {
    title: "Fullstack Next.js Todo App with Admin Dashboard and Role-based access control.",
    listItems: [
        "A fullstack Next.js todo application with role-based authentication and authorization.",
        "Users can view, add, edit (title, description, and completion status), and delete their todos. Admin can view all the registered users, view all the todos (read-only), and see statistics about total users, total todos count, and todo completion chart (pie chart)",
        "Next.js 15, React.js 19, Tailwind CSS, Recharts, PostgreSQL + Drizzle ORM + Neon.tech, Server Actions, Sign-in using Credentials Provider with NextAuth, Form Handling, Role-based authentication and authorization.",
    ],
    image: "/todoapp.png",
    projectLink: "https://nextjs-admin-dashboard-gamma.vercel.app/signin",
}
const project2 = {
    title: "Next.js CRUD application",
    listItems: [
        "A Next.js application that allows users to create, read, update, and delete data from a MongoDB database",
        "Features include CRUD users, and a responsive design that adapts to different screen sizes.",
        "Next.js 15, React.js 19, Tailwind CSS, MongoDB, Next.js API routes, Next.js App routing, Fetch API",
    ],
    image: "/window.svg",
    projectLink: "",
}
const project3 = {
    title: "Next.js Pokemon Dexter app with Infinite Scrolling",
    listItems: [
        "A Next.js application that fetches and display all the Pokemon data from Pokeapi API.",
        "Features include infinite scrolling, and a responsive design that adapts to different screen sizes.",
        "Next.js 15, React.js 19, Tailwind CSS, Pokeapi API, Framer Motion",
    ],
    image: "/pokedexterapp.png",
    projectLink: "https://nextjs-pokedexter.vercel.app/",
}

export const projects = [project1, project3, project2]