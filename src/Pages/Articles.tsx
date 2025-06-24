import { useEffect, useState } from 'react';
import { colorGrey1, colorWhite1, colorGrey2, colorWhite3, colorGrey3, ArticlesJSONPath, shuffleArray } from '../App';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface ArticlesProps {
    id: string;
    title: string;
    description: string;
};

export const Articles: React.FC<{ theme: string }> = ({ theme }) => {
    const [articles, setArticles] = useState<ArticlesProps[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
    const [loading, setLoading] = useState<boolean>(true); // State for loading
    const navigate = useNavigate();

    useEffect(() => {
        const cacheBustedPath = `${ArticlesJSONPath}?t=${new Date().getTime()}`;

        fetch(cacheBustedPath)
            .then(fetchedData => fetchedData.json())
            .then(data => {
                const shuffledData = shuffleArray(data);

                // Only extract id, title, and description
                const filteredData = shuffledData.map((article: any) => ({
                    id: article.id,
                    title: article.title,
                    description: article.description,
                }));

                setArticles(filteredData);
                setLoading(false);
            })
            .catch((e) => {
                console.error(`Articles JSON load failed: ${e}`);
                setLoading(false);
            });
    }, []);

    // Filter articles based on search query
    const filteredArticles = articles.filter((article) => {
        const normalizedSearchQuery = searchQuery.toLowerCase();
        const normalizedTitle = article.title.toLowerCase();

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
                <h2 className="center">Choose Article</h2>
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
                    ) : filteredArticles.length === 0 ? (
                        <>No results found</> // Display message if no results match the search
                    ) : (
                        filteredArticles.map((item, index) => (
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
                                <Helmet>
                                    <title>Choose Article</title>
                                </Helmet>
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
