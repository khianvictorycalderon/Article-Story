import { useEffect, useState } from 'react';
import { colorGrey1, colorWhite1, colorGrey2, colorWhite3, colorGrey3, StoriesJSONPath, shuffleArray } from '../App';
import { useNavigate } from 'react-router-dom';

interface StoriesProps {
    id: string;
    title: string;
    description: string;
};

export const Stories: React.FC<{ theme: string }> = ({ theme }) => {
    const [stories, setStories] = useState<StoriesProps[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
    const [loading, setLoading] = useState<boolean>(true); // State for loading
    const navigate = useNavigate();

    useEffect(() => {
        fetch(StoriesJSONPath)
            .then(fetchedData => fetchedData.json())
            .then(data => {
                const shuffledData = shuffleArray(data);

                // Only extract id, title, and description
                const filteredData = shuffledData.map((story: any) => ({
                    id: story.id,
                    title: story.title,
                    description: story.description,
                }));

                setStories(filteredData);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((e) => {
                console.error(`Stories JSON load failed: ${e}`);
                setLoading(false); // Set loading to false if there's an error
            });
    }, []);

    // Filter stories based on search query
    const filteredStories = stories.filter((story) => {
        const normalizedSearchQuery = searchQuery.toLowerCase();
        const normalizedTitle = story.title.toLowerCase();

        return (
            !searchQuery || 
            normalizedTitle.includes(normalizedSearchQuery) || 
            normalizedTitle.startsWith(normalizedSearchQuery)
        );
    });

    return (
        <>
            <div
                className="list-section"
                style={{
                    background: theme === "Light" ? colorWhite1 : colorGrey3,
                    color: theme === "Light" ? colorGrey1 : colorWhite1
                }}
            >
                <h2 className="center">Choose Story</h2>
                <hr />
                <label className="search-bar">
                    <span>Search:</span>
                    <input
                        className="w-100 search-bar-input"
                        type="text"
                        style={{
                            background: theme === "Light" ? colorWhite3 : colorGrey2,
                            color: theme === "Light" ? colorGrey1 : colorWhite1
                        }}
                        placeholder="Search title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state
                    />
                </label>

                <div className="card-section">
                    {loading ? (
                        <>Loading...</> // Display loading message when fetching data
                    ) : filteredStories.length === 0 ? (
                        <>No results found</> // Display message if no results match the search
                    ) : (
                        filteredStories.map((item, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    background: theme === "Light" ? colorWhite3 : colorGrey1,
                                    color: theme === "Light" ? colorGrey1 : colorWhite1
                                }}
                                onClick={() => {
                                    navigate(`../content/${item.id}`);
                                    window.location.reload(); // for the ads
                                }}
                            >
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="desc">
                                    <hr />
                                    {item.description}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};
