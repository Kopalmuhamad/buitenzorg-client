import { Button } from "../atom/button"

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-12 relative">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary -skew-y-6 transform origin-top-right z-0"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tighter">
                        BRUTAL
                        <br />
                        <span className="text-primary">FASHION</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-mono max-w-md">
                        Embrace the unconventional. Our clothes defy norms and amplify your individuality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="text-lg py-6 px-8 rounded-none transition-colors duration-300">
                            SHOP NOW
                        </Button>
                        <Button variant="secondary" className="text-lg py-6 px-8 rounded-none transition-colors duration-300">
                            OUR STORY
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full h-96 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Brutalist fashion model"
                            className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-primary p-4 rotate-2">
                        <p className="text-2xl font-bold">NEW COLLECTION</p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Hero