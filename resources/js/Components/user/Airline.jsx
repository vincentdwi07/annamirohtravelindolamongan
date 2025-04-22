export default function Airline(){
    const airlineLogos = [
        {src: "./user/airlines/1.png"},
        {src: "./user/airlines/2.png"},
        {src: "./user/airlines/3.png"},
        {src: "./user/airlines/4.png"},
        {src: "./user/airlines/5.png"},
        {src: "./user/airlines/6.png"},
        {src: "./user/airlines/7.png"},
        {src: "./user/airlines/8.png"},
    ]
    return(
        <>
            <div className="user-airline">
                <div className="airlines-logo">
                    <div className="airlines-slide">
                        {airlineLogos.map((logo, index) => (
                            <img key={index} src={logo.src} alt="" />
                        ))}
                    </div>
                    <div className="airlines-slide">
                        {airlineLogos.map((logo, index) => (
                            <img key={index} src={logo.src} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}