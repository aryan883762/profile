const beliefs = [
    {
        title: "I Engineer for Scale & Impact",
        description:
            "From global enterprises to high-volume apps, I design systems with scalability, resilience, and performance in mind using modern cloud-native architectures.",
        border: "border-blue-600",
        text: "text-blue-600",
        aos: "fade-up",
    },
    {
        title: "I Write Clean, Testable Code",
        description:
            "I follow principles of clean architecture, TDD, and modularity to ensure code is robust, maintainable, and easy to collaborate on — across teams and time zones.",
        border: "border-green-600",
        text: "text-green-600",
        aos: "zoom-in-up",
    },
    {
        title: "I Integrate AI Where It Matters",
        description:
            "I embrace AI-assisted development for intelligent testing, UI prototyping, and boilerplate generation using tools like Copilot, DesignGPT, and Testim.",
        border: "border-orange-500",
        text: "text-orange-500",
        aos: "fade-up",
    },
    {
        title: "I Lead Through Collaboration",
        description:
            "I’ve led agile teams, mentored developers, and shaped product direction — aligning cross-functional teams through shared goals, clean documentation, and transparency.",
        border: "border-purple-600",
        text: "text-purple-600",
        aos: "zoom-in-up",
    },
];

const BeliefsSection = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "linear-gradient(301deg,#abe6ea -.08px,rgba(171,230,234,0) 104.75%)",
            }}
        >
            <div className="w-full max-w-screen-xl mx-auto py-16 px-6 md:px-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="700"
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                            How I Work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                What I Believe
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Over 7+ years, I’ve developed principles that go beyond just shipping code — focusing on performance, maintainability, and using AI tools where they genuinely add value.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition">
                            View My Projects
                        </button>
                    </div>

                    {/* Belief Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {beliefs.map(({ title, description, border, text, aos }, index) => (
                            <div
                                key={title}
                                data-aos={aos}
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                                className={`rounded border ${border} p-6 bg-white shadow-sm hover:shadow-md transition`}
                            >
                                <h3 className={`text-lg font-semibold mb-3 ${text}`}>{title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeliefsSection;
