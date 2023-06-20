# Web Development Project 5 - *Pokemon Card Dashboard*

Submitted by: **Gabriela Liera**

This web app: Pokemon Card Dashboard displays card information about the lastest Pokemon deck series. Users can view the card information like rarity and market prices. In addition, users can filter/search for pokemon. 

Time spent: **20** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] *Image*
  - [x] *name*
  - [x] *Different market prices*
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
- [x] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/gabrielaliera/data-dashboard/blob/master/walkthrough.gif' title='Video Demo' width='1200' heigth="1200" alt='Video Demo' />
GIF created with <a href="https://www.cockos.com/licecap/">LICEcap.</a> 

## Notes

During the course of this project, I encountered several challenges that tested my skills and problem-solving abilities. One significant hurdle I faced was the learning curve associated with React Router. Understanding how to effectively utilize React Router to manage routing within the application required dedicated effort and research.

Another challenge arose when I needed to conditionally render specific data related to card information. Determining the appropriate logic and structure to display the desired information based on certain conditions was a complex task. It involved careful consideration of the data available and creating conditional rendering statements that accurately represented the desired outcome.

Additionally, the project involved retrieving deck information, including details about crown zenith and individual card data. However, this required making two separate API calls. Overcoming this challenge involved finding a way to combine these calls into a single fetch request, optimizing efficiency and reducing unnecessary network requests.

Lastly, implementing the search feature posed its own set of challenges. Developing a robust search functionality that effectively filtered and displayed relevant results required thoughtful consideration of the search algorithm, user experience, and handling various edge cases.

Despite these challenges, I persevered and gained valuable insights and experience. Through active problem-solving and a commitment to continuous learning, I successfully navigated these obstacles and delivered a functional and robust solution.
## License

    Copyright [2023] [Gabriela Liera]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
