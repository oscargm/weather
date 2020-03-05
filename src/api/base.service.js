export async function getImage(cityName) {
  return fetch(`https://source.unsplash.com/featured/1600x900/?${cityName}`)
    .then(response => response.body)
    .then(body => {
      const reader = body.getReader()

      return new ReadableStream({
        start(controller) {
          return pump()

          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close()
                return
              }

              // Enqueue the next data chunk into our target stream
              controller.enqueue(value)
              return pump()
            })
          }
        },
      })
    })
    .then(stream => new Response(stream))
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => `url(${url})`)
    .catch(err => console.error(err))
}

export async function getWeatherData(cityId) {
  const weatherRes = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${WEATHER_API_KEY}&units=metric`
    // `http://localhost:3000/weather`
  )
  return await weatherRes.json()
}
