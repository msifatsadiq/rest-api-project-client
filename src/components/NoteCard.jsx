import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";

const NoteCard = ({ note }) => {
    return (
        <Link
            to={`/note/${note._id}`}
            className="group relative overflow-hidden rounded-xl border border-green-400/30 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-green-400 hover:shadow-2xl"
        >
            <div className="card-body p-5">
                <h3 className="card-title text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {note.title}
                </h3>
                <p className="text-sm text-gray-300/80 line-clamp-3 mb-4">
                    {note.content}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                        {formatDate(new Date(note.updatedAt))}
                    </span>
                    <div className="flex items-center gap-2">
                        <PenSquareIcon className="size-4 text-green-300/80 group-hover:text-green-400 transition-colors" />
                        <button className="btn btn-ghost btn-xs p-1 rounded-full hover:bg-green-400/10 transition-colors">
                            <Trash2Icon className="size-4 text-red-400/80 hover:text-red-500 transition-colors" />
                        </button>
                    </div>
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-xl border border-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </Link>
    );
};

export default NoteCard;