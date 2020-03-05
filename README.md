# Weather widgets app

This is just a proof of concept for weather cards to be used as widgets into multiple possible places.

## Steps to get it working

### Clone and install dependencies

```bash
# clone the repository and install dependencies
git clone https://github.com/oscargm/weather.git
cd weather
npm i
```

`made with svelte`

To start go to [OpenWeather](https://openweathermap.org) and create an account.
Create an api key and copy into the `example.env` [file](./example.env)

Then you can start the application

```bash
npm run dev
```

### Mock server

A mock server has been installed to prevent api blocks per maximum requests.
To use the mock server, run in another terminal instance the following code:

```bash
npm run mock-server
```

and change the url of the fetch method in [App.svelte](./src/App.svelte) to `http://localhost:3000/weather`
then, you'll have unlimited requests to continue developing.
This will return a weather sample response for Barcelona city, feel free to change as you please.
