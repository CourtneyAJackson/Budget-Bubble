# Budget-Bubble

# Project Overview

## Project Name
Budget Bubble

## Project Description

Budget Bubble is an Airtable based React app designed to help users track their expenses. 
A user is able to choose from different expense categories and create a new category if desired thus rendering an easy to read expense log.  

## Wireframes

https://whimsical.com/budget-buddy-FkNMr1xKGhfCfu6ZiqWZ2M

## Component Hierarchy

https://whimsical.com/component-hierarchy-8ibukLxMgr8Uw7AKYcTHtA

## API and Data Sample


```
"records": [
        {
            "id": "rec46d047SpB7pfG8",
            "fields": {
                "Name": "Car Note",
                "Amount": 0
            },
            "createdTime": "2021-08-20T15:59:41.000Z"
        },
        {
            "id": "recJdSf6hJS6eCZaU",
            "fields": {
                "Name": "Food",
                "Amount": 0
            },
            "createdTime": "2021-08-20T16:01:19.000Z"
        },
        {
            "id": "recKKU22Gt3Hv6bFd",
            "fields": {
                "Name": "Rent/Mortgage",
                "Amount": 0
            },
            "createdTime": "2021-08-20T15:59:41.000Z"
        },
        {
            "id": "recX8YstkSC8RxUQd",
            "fields": {
                "Name": "Phone",
                "Amount": 0
            },
            "createdTime": "2021-08-20T15:59:41.000Z"
        }
    ]
}
```


#### MVP 


- Allow users to access the page through home page start button
-  Redirect users to main page via React Routes and Links
-  Allow users to choose from expenses list in drop down menu that is generated from axios GET request to Airtable
-  Allow useres to input amounts coresponding to the chosen expense item via axios POST request to Airtable
-  Allow users the option to create a new expense and add to the current expense list by updating the Airtable with created item
-  Allow users to create an expense log by adding expenses with amounts to that log via axios POST request

#### PostMVP  

- Calculate all the expenses form a given expense log
- Allow users to save their monthly expense logs
- Provide budgeting tips and guidance to users 
- Allow users to create profiles
- Have a visual reprensetation of expenses (chart/graph)

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 19-20| Prompt / Wireframes / Component Hierarchy | Complete
|August 20| Project Approval | Incomplete
|August | Core Application Structure (HTML, CSS, etc.) | Incomplete
|August | Pseudocode / actual code | Incomplete
|August | Initial Clickable Model  | Incomplete
|August | MVP | Incomplete
|August | Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 4hrs | 4hrs |
| Creating API| H | 2hrs| 2hrs | 2hrs |
| Working with API | H | 3hrs| 2hrs | 2hrs |
|Creating Components| H | 2hrs| 2hrs | 2hrs |
|Organizing Components| H | 3hrs| 2.5hrs | 2.5hrs |
|Creating Homepage| H | 2hrs| 3hrs | 3hrs |
|Implementing State/props| H | 4hrs| 4rs | 4hrs |
|Routes/Paths/Links| H | 4hrs| 3hrs | 3hrs |
|Css Design| H | 3hrs| 5hrs | 5hrs |
|Polish Design| H | 2hrs| hrs 3| 3hrs |
|Refactoring code| H | 2hrs| 2hrs | 2hrs |
|Testing App| H | 1hr| 3hrs | 3hrs |
| Total | H | 31hrs| 36hrs | 36hrs |

## SWOT Analysis

### Strengths: Api fetching and rendering data via axios, Airtable usage

### Weaknesses: Need more experience understanding and working with React as a whole

### Opportunities: Having the oppurtunity of  mapping out a very detailed plan (wireframes, component hirarchy, timeline), Access to previous lectures and supportive team for guidance

### Threats:  Time management, React app building
