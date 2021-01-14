# Enye Backend Challenge

A RESTFUL API built with Node.js, to examine my skills in creating the backbone struture of an application

## About this project

I was tasked with creating a service integration to a public API and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.

### Tasks

- Create an endpoint that accepts a `GET` request to `/api/rates`
- The `/api/rates` endpoint must accept the following request query parameter strings
  1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
  2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
- I assumed standard HTTP status codes on the response. If a request is unsuccessful, the application properly handle it accordingly with the appropriate status codes
- Upon a successful API response, I transformed the fetched payload into an object containing the following keys:
  1. **results**: JSON object containing the results from the API
  2. **base**: the requested home rate from the request URL query strings
  3. **date**: the current date
  4. **rates**: An Object containing the requested currency in the request URL query strings
- The application server was written with Node using an Express server

## Built With

- NodeJs
- Express
- Heroku
- ES6

## Live Demo

For the full working application Click [here](https://enye-backend-test.herokuapp.com)

## Author

👤 **Somoye Ayotunde**

- Github:[@somoye123](https://github.com/somoye123)
- Twitter:[@ayotunde_197](https://twitter.com/ayotunde_197)
- LinkedIn:[Somoye Ayotunde](https://www.linkedin.com/in/somoye-ayotunde-03a471161)

## 🤝 Contributing

- Contributions, issues and feature requests are welcome!

- Feel free to check the [issues page](https://github.com/somoye123/Enye-Backend-Test/issues)

## Show your support

- Give a ⭐️ if you like this project!
