import React from 'react'
import { render } from '@testing-library/react'

import { App } from './App'
import { MainBlock } from './components/MainBlock'
import { Title } from './components/Title'
import { InfoBlock } from './components/InfoBlock'
import { InfoField } from './components/InfoField'
import { Controls } from './components/Controls'
import { TwilightBar } from './components/TwilightBar'

const mockResponse = {
  "results":
  {
    "sunrise":"7:27:02 AM",
    "sunset":"5:05:55 PM",
    "solar_noon":"12:16:28 PM",
    "day_length":"9:38:53",
    "civil_twilight_begin":"6:58:14 AM",
    "civil_twilight_end":"5:34:43 PM",
    "nautical_twilight_begin":"6:25:47 AM",
    "nautical_twilight_end":"6:07:10 PM",
    "astronomical_twilight_begin":"5:54:14 AM",
    "astronomical_twilight_end":"6:38:43 PM"
  },
   "status":"OK"
}

test('renders APP with title', () => {
  const { getByText } = render(<App />)
  const AppTitle = getByText(/Sunrise Sunset API/)
  expect(AppTitle).toBeInTheDocument()
})

test('renders Loader Component before data', () => {
  const { container } = render(<MainBlock />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="container"
      >
        <div
          class="main-wrapper"
        >
          <div
            class="loader-wrapper"
          >
            <div
              class="lds-ellipsis"
            >
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})

test('renders Title Component with data', () => {
  const { getByText } = render(<Title formattedDate={'3/22/2020'} />)
  const currentDate = getByText('3/22/2020')
  expect(currentDate).toBeInTheDocument()
})

test('renders InfoBlock Component with weather data, 3 elements', () => {
  const mockWeatherData = {
    sunrise: mockResponse.results.sunrise,
    sunset: mockResponse.results.sunset,
    day_length: mockResponse.results.day_length,
  }

  const { container } = render(<InfoBlock weatherData={mockWeatherData} />)
  const { children } = container.getElementsByClassName('info-block__list')[0]
  expect(children).toHaveLength(3)
})

test('renders InfoField Component with data', () => {
  const mockEntry = ['Sunrise', '7:27:02']
  const { getByText } = render(<InfoField data={mockEntry} />)
  const key = getByText('Sunrise')
  const value = getByText('7:27:02')
  
  expect(key).toBeInTheDocument()
  expect(value).toBeInTheDocument()
})

test('renders Controls Component with Btns', () => {
  const { container } = render(<Controls changeDate={() => {}} />)
  const { children } = container.getElementsByClassName('controls__list')[0]

  expect(children).toHaveLength(4)
})

test('renders TwilightBar Component', () => {
  const { container: containerDefault} = render(<TwilightBar weatherData={mockResponse.results} />)
  const { container: containerWithCustomBarWidth} = render(
    <TwilightBar weatherData={mockResponse.results} barWidth={720}/>
  )

  expect(containerDefault).toMatchInlineSnapshot(`
    <div>
      <div
        class="twilight-container"
      >
        <div
          class="twilight-wrapper"
          style="width: 1440px; transition: background 0.8s linear;"
        />
      </div>
    </div>
`)

  expect(containerWithCustomBarWidth).toMatchInlineSnapshot(`
    <div>
      <div
        class="twilight-container"
      >
        <div
          class="twilight-wrapper"
          style="width: 720px; transition: background 0.8s linear;"
        />
      </div>
    </div>
  `)
})