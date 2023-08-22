import { notFound } from "next/navigation"

export const dynamicParams = true // default value is true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()
    return tickets.map((ticket) => {
        id: ticket.id
    })
}

async function getTicket(id) {
    const res = await fetch(
        'http://localhost:4000/tickets/'+id,
        {
            next: {
              revalidate: 60
            }
        }
    )

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        // throw new Error('Failed to fetch data')
        notFound()
    }

    return res.json()
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

    return (
        <main>
            <nav>
                <h2>Ticket Detail</h2>
            </nav>
            <div className="card">
                <h3>{ticket.tile}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
