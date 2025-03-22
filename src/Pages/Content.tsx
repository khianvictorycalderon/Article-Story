import { useParams } from 'react-router-dom';
import { colorGrey1, colorWhite1, colorGrey3, ArticlesJSONPath, StoriesJSONPath } from '../App';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const Content:React.FC<{theme: string}> = ({theme}) => {

    // Dynamic data initial value
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [reminder, setReminder] = useState<string>("");
    const [storyCharacters, setStoryCharacters] = useState<string[]>([]);
    const [content, setContent] = useState<string>("");
    const [datePublished, setDatePublished] = useState<string>("");
    const { contentID } = useParams<{contentID: string}>();

    useEffect(() => {
        let foundData = false; // Flag to track if data is found

        // Reset content before fetching new data
        setTitle("Loading...");
        setAuthor("Loading...");
        setReminder("");
        setStoryCharacters([]);
        setContent("Loading...");

        // Check if contentID is valid
        if (!contentID) {
            console.warn("Invalid contentID, cannot fetch data.");
            setContent("Invalid contentID, cannot fetch data.");
            return;
        }

        // Fetch stories.json
        fetch(StoriesJSONPath)
            .then(response => response.json())
            .then(data => {
                const story = data.find((item: { id: string }) => item.id.toLowerCase() === contentID.toLowerCase());
                if (story) {
                    foundData = true;
                    setTitle(story.title);
                    setAuthor(story.author);
                    setDatePublished(story.date);
                    setReminder(story.reminder);
                    setStoryCharacters(story.characters);
                    setContent(story.fullContent);
                }
            })
            .catch(error => {
                console.error("Error fetching stories data:", error);
                setContent("Error fetching stories data.");
            });

        // Fetch articles.json
        fetch(ArticlesJSONPath)
            .then(response => response.json())
            .then(data => {
                const article = data.find((item: { id: string }) => item.id.toLowerCase() === contentID.toLowerCase());
                if (article) {
                    foundData = true;
                    setTitle(article.title);
                    setAuthor(article.author);
                    setDatePublished(article.date);
                    setReminder(article.reminder);
                    setContent(article.fullContent);
                }
            })
            .catch(error => {
                console.error("Error fetching articles data:", error);
                setContent("Error fetching articles data.");
            })
            .finally(() => {
                window.scrollTo({top: 0, behavior: "smooth"});
                // If no data was found in either JSON file
                if (!foundData) {
                    setTitle("Unknown Title");
                    setAuthor("Unknown Author");
                    setDatePublished("Unknown Date")
                    setContent("No content found for this ID.");
                }
            });

    }, [contentID]); // Re-run when contentID changes         

    return (
        <div 
            className="content-page justify"
            style={{
                background: theme === "Light" ? colorWhite1 : colorGrey3,
                color: theme === "Light" ? colorGrey1 : colorWhite1
            }}
            >
            <Helmet>
                <title>{title || "Loading..."}</title>
            </Helmet>
            <h1 className="center">{title}</h1>
            <hr/>
            <b>Written by: </b><u><span dangerouslySetInnerHTML={{__html: author}}/></u><br/>
            <b>Date Published: </b><u>{datePublished}</u><br/>
            {reminder && (
                <>
                    <b>Reminder: </b><span dangerouslySetInnerHTML={{__html: reminder}}/><br/>
                </>
            )}
            {storyCharacters.length > 0 && (
                <>
                    <b>Story Characters: </b>
                    <ul>
                        {storyCharacters.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
            <br/>
            <span dangerouslySetInnerHTML={{__html: content}}/>
            <br/><br/>
        </div>
    );
}