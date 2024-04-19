import { Link } from "react-router-dom";

function Button(props) {
    return (
        <>
            <button className="bg-blue-700 px-4 py-1 rounded-md">
                <Link to={props.link} 
                className="text-slate-50 text-xl uppercase font-medium">{props.text}</Link>
            </button>
        </>
    );
};

export default Button;