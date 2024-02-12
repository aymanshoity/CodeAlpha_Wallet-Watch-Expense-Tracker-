import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links=<>
    <NavLink to='/' className={({isActive})=>(isActive? 'text-white mr-4':'text-yellow-300 mr-4')}>Home</NavLink>
    <NavLink to='/dashboard' className={({isActive})=>(isActive? 'text-white mr-4':'text-yellow-300 mr-4')}>Dashboard</NavLink>
    <NavLink to='/login' className={({isActive})=>(isActive? 'text-white mr-4':'text-yellow-300 mr-4')}>Login</NavLink>
    </>
    return (
        <div className="navbar bg-blue-950 text-white z-10 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <img className="rounded-full h-20 w-20" src="../../../../../public/WW logo design.jpeg"  alt="" />
                    <h2 className="text-white text-2xl">Wallet Watch</h2>                
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Register</a>
            </div>
        </div>
    );
};

export default Navbar;