import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUi from "../components/RateLimitedUi"

const HomePage = () => {
    const [IsRateLimited, setIsRateLimited] = useState(true)
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/notes');

                console.log(res.data);
            } catch (error) {
                console.error("Error fetching notes:", error)

            }
        }
    }, [])
    return (
        <div className="min-h-screen ">
            <Navbar />

            {IsRateLimited && <RateLimitedUi />}
        </div>
    )
}

export default HomePage