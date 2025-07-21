import { PlusCircleIcon } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-7xl px-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
                        ThinkBoard
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to={'/create'} className="btn btn-primary ">
                            <PlusCircleIcon className="size-5" />
                        </Link>
                        <span>New Note</span>

                    </div>

                </div>

            </div>
        </header>
    )
}

export default Navbar