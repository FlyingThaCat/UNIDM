import { DaySection } from "./sections/Day";

export const Content = ({ data }) => {
    return (
        <div className="flex flex-col items-center">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="py-20 max-w-[80%] flex flex-col items-center">
                    <DaySection day={key} date={value.date} />
                    {value.topics.map((topic, index) => (
                        <div id={`${topic.title}`} key={index} className="py-32 w-full max-w-5xl text-justify">
                            <h1 className="text-4xl font-bold">{topic.title}</h1>
                            <h2 className="text-xl font-semibold mt-2">{topic.speaker}</h2>
                            <p className="mt-4">{topic.content}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
