# *************** THE SOLUTION ***************
## Run Locally

Clone this repo
Run npm install
Modify src/config/local.js if you need to change port# from 3001
Run npm run dev

## Deploy to Production
Port number on production is set to process.env.PORT otherwise defaults to 3001. You can change this behavior in src/config/production.js if you need to.

Run npm install
Run npm run prod

### Heroku

I am hosting this API on heroku under the following root URL:

https://enigmatic-harbor-78678.herokuapp.com/

## API Design Notes
### /

server.js - entry point

### /src
/config - Loads local or production server variables
/controllers - Defines the specific endpoint paths
/database - This is where the data comes from. Currently using in-memory instead of persistent data
/models - Eventually this is where an ODM will handle data retrieval and manipulations
/routes - Defines high-level routes
/server - Build and start the server
/services - This is the layer before the ODM. This is also where we do error handling in regard to the data
utils - Any and all helper methods should go here

## API Documentation
NOTE: ALL API endpoints will return an updated list of surveys or an error object
### GET /api/surveys
Get a list of surveys including questions and responses.

Sample response:
```
{
    "message": "surveys fetched successfully",
    "data": [
        {
            "id": 3375723641,
            "title": "Roommate Initial Screening",
            "questions": [
                {
                    "id": 219202833,
                    "type": "text",
                    "content": "What is your name"
                },
                {
                    "id": 390916127,
                    "type": "choice",
                    "content": "What is your gender",
                    "choices": [
                        "male",
                        "female",
                        "nonbinary"
                    ]
                },
                {
                    "id": 1401684556,
                    "type": "date",
                    "content": "When is your birthdate"
                }
            ],
            "responses": [
                {
                    "id": 171392780,
                    "question_1": "Avan Sardar",
                    "question_2": "male",
                    "question_3": "1983-08-29T06:00:00.000Z"
                }
            ]
        }
    ]
}
```

### POST /api/surveys
Create new survey. Requires one field ```questions``` of type Array which contains the questions this survey holds.
Each question must a be a valid JSON object with the following fields:

* type: String
* content: String

Example Post Body
```
{
            "questions": [
                {
                    "type": "text",
                    "content": "What is your name"
                }
            ]
}
```

### DELETE /api/questions/:surveyId/:questionId
Delete a question within a survey.
Note: This does not delete responding responses to the deleted question

```:surveyId``` must be a valid survey id
```:questionId``` must be a valid question id within the parent survey

### POST /api/questions/:surveyId
Add a question to a survey.

```:surveyId``` must be a valid survey id

Example Post Body

```
{
    "type": "text", "content": "Tell us about yourself?"
}
```

### PUT /api/questions/:surveyId
Modify a question within the survey with the given id

```:surveyId``` must be a valid survey id

Example Body

```
{
    "id": 693935699,
    "content": "What is your FIRST name?"
}
```

### PUT /api/questions/reorder/:surveyId
Re-order the questions within the survey with the given id

```:surveyId``` must be a valid survey id

The body must contain the field ```order``` of type Array. The array will contain the ids of the questions in the desired order. The number of ids must match the number of questions in this survey and all the ids must be valid ids matching the questions in this survey.

Example Body

```
{
    "order": [222635413,450595255, 650739171]
}
```

### POST /api/responses/:surveyId
Add/submit a response to a survey

```:surveyId``` must be a valid survey id

Note: There are NO validation being done on the responses being submitted. Any number and type of answers can be submitted.

Example Post Body
```
{"response":
    {
        "question_1": "Jason Statham",
        "question_2": "male",
        "question_3": "1967-07-26"
    }
}
```






# *************** THE CHALLENGE ***************
# Product Description
SurveysAPI is a JSON REST API for creating, modifying, and submitting surveys. A survey is an ordered list of survey questions. Supported types of questions include:
- Text Entry (free form) (ex: "What is your name")
- Multiple Choice (ex: "Which color do you like the best? Choose one: [Orange, Green, Blue, Red]")
- Date (ex: "What is your birthdate?")
  - NOT timestamp; this is date-only

# Challenge Overview
This challenge has two parts (instructions for each appear below):
1. Coding Portion
2. Written Portion

Submission Instructions:
- Clone this repository and create your own remote to push it to.
- Implement the coding portion.
- Include your response to the written portion in the README.
- When ready, invite me (patrick.wickham@alcoverooms.com) to your remote.
  - Note: I will not look at git history.

# Coding Portion Instructions
## Requirements
Implement REST API endpoints (JSON) for the following pieces of functionality:
- Create a survey
  - See "Product Description" for types of questions you must support
- Modify a previously created survey
  - Add/Remove questions
  - Modify a question
  - Reorder questions
- Submit to a survey

You may organize the code however you see fit, including creating/moving files/folders.

In addition to the code, please also provide _brief_ overview of its usage, so I can see the API design. This can come in the form of comments, README, or an external script that demonstrates the use of each endpoint.

### Note:
These are just use cases, not necessarily API endpoints. Your API can have as many endpoints as you see fit.

## Tech Specs
- Must be runnable on a Node version >v10
- Must be pure nodejs (no typescript)
- Do not use npm libraries for any core features
  - If there's a library you think should be used, you may email me at patrick.wickham@alcoverooms.com to get approval
- Must be runnable as Express server using `npm run dev` script and accessible locally on port 3001
  - This is already provided

## Getting Started
- Clone this repo
- `npm install`
- `npm run dev`

## You will be graded on:
- API Design (Usability for clients)
- Code Readability
- Overall Simplicty
- Extensibility
#### Example questions you should ask to evaluate your submission (but not implement):
(This list is not exhaustive)
- How easy would it be for a new contributor to pick up the project?
- How easy would it be to plug in a database layer?
- How easy would it be to add another type of survey question?
- How easy would it be to add other new features (search surveys / submissions, list submissions, store user data, etc)?
## You will NOT be graded on
- Performance (Readable code > Optimized code)
- Implementation of out-of-scope features
## Out of scope
- Using a database or any persistent storage
- User management or identities (Assume API is used "anonymously" ie as a private service)
- Authentication
- Frontend
- Formal documentation

# Written Portion Instructions
Create a brief (one-paragraph, or bulleted list) of what technical steps would be required to deploy this app to production. (This should _not_ include possible new features; assume the provided feature set is complete).

# Questions / Issues?
Email me at patrick.wickham@alcoverooms.com and I will respond as soon as I can.
