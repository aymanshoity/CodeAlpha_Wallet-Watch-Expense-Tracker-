

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3mCV5tF/background.jpg)' }}>

            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-red-600">Wallet <span className="text-blue-950">Watch</span></h1>
                    <p className="mb-5">Wallet Wellness Starts Here: Welcome to <span className="text-red-500">Wallet <span className="text-blue-950">Watch</span></span> Expense Tracker.</p>
                    <button className="btn bg-red-600 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;