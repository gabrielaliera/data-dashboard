
const About = () => {
    
    return(
        <div className ="App-page">
            <div className="home">
                <h1>Web Development Project 5 - *Pokemon Card Dashboard*</h1>
                <p>Submitted by: Gabriela Liera</p>
                <p>This web app: Pokemon Card Dashboard displays card information about the lastest Pokemon deck series. Users can view the card information like rarity and market prices. In addition, users can filter/search for pokemon. </p>
                <p>Time spent: 20 hours spent in total</p>
                <h2 id="required-features">Required Features</h2>
                <p>The following required functionality is completed:</p>
                <ul>
                    <li>[x] The list displays a list of data fetched using an API call</li>
                    <li>[x] Data uses the useEffect React hook and async/await syntax</li>
                    <li>[x] The app dashboard includes at least three summary statistics about the data such as
                        <ul>
                            <li>[x] Image</li>
                            <li>[x] Name</li>
                            <li>[x] Different market prices</li>
                        </ul>
                    </li>
                    <li>[x] A search bar allows the user to search for an item in the fetched data</li>
                    <li>[x] Multiple different filters (2+) allow the user to filter items in the database by specified categories</li>
                    <li>[x] Clicking on an item in the list view displays more details about it</li>
                    <li>[x] Clicking on an item has a direct, unique link to that item&#39;s detail view page</li>
                </ul>
                <p>The following optional features are implemented:</p>
                <ul>
                    <li>[x] Multiple filters can be applied simultaneously</li>
                    <li>[x] Filters use different input types such as a text input, a selection, or a slider</li>
                    <li>[x] The user can enter specific bounds for filter values</li>
                </ul>
                <h2 id="notes">Notes</h2>
                <p>During the course of this project, I encountered several challenges that tested my skills and problem-solving abilities. 
                One significant hurdle I faced was the learning curve associated with React Router. Understanding how to effectively utilize React Router to manage routing within the application required dedicated effort and research.</p>

                <p>Another challenge arose when I needed to conditionally render specific data related to card information. Determining the appropriate logic and structure to display the desired information based on certain conditions was a complex task. It involved careful consideration of the data available and creating conditional rendering statements that accurately represented the desired outcome.</p>
                <p>Additionally, the project involved retrieving deck information, including details about crown zenith and individual card data. However, this required making two separate API calls. Overcoming this challenge involved finding a way to combine these calls into a single fetch request, optimizing efficiency and reducing unnecessary network requests.</p>
                <p>Lastly, implementing the search feature posed its own set of challenges. Developing a robust search functionality that effectively filtered and displayed relevant results required thoughtful consideration of the search algorithm, user experience, and handling various edge cases.</p>
                <p>Despite these challenges, I persevered and gained valuable insights and experience. Through active problem-solving and a commitment to continuous learning, I successfully navigated these obstacles and delivered a functional and robust solution.</p>
            </div>
        </div>

)}

export default About;