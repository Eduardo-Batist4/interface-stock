import { Link } from "react-router-dom";

function Button(props) {
    return (
        <>
            <button className="px-4 py-1 rounded-md bg-blue-700 hover:bg-blue-600  active:bg-blue-800">
                <Link to={props.link} 
                className="text-slate-50 text-xl uppercase font-medium">{props.text}</Link>
            </button>
        </>
    );
};

export default Button;