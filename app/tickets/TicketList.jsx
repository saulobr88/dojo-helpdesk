import Link from "next/link"

async function getTickets() {
    const res = await fetch(
        'http://localhost:4000/tickets',
        {
            next: {
              revalidate: 0 // use 0 to opt out of using cache
        }
        }
    )

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className='card'>
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0,200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className='text-center'>There are no open tickets, yay!</p>
            )}
        </>
    )
}
