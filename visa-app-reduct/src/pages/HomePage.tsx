import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Passport & Visa Application Portal</h1>
            <Link to="/passport" className="text-blue-500 underline">
            Start Your Passport Application
            </Link>
            <br />
            <Link to="/visa" className="text-blue-500 underline">
            Start Your Visa Application
            </Link>
        </div>
    );
}