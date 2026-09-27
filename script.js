const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // <- Replace with your API key

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const weatherEl = document.getElementById('weather');

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(()=>({message:'Unknown error'}));
    throw new Error(error.message || 'Failed to fetch weather');
  }
  return res.json();
}

function renderWeather(data) {
  const html = `
    <div class="card">
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${Math.round(data.main.temp)}°C</strong> — ${data.weather[0].description}</p>
      <p>Feels like ${Math.round(data.main.feels_like)}°C • Humidity ${data.main.humidity}%</p>
    </div>
  `;
  weatherEl.innerHTML = html;
  weatherEl.classList.remove('hidden');
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  weatherEl.classList.add('hidden');
  weatherEl.innerHTML = '<div class="card">Loading…</div>';
  weatherEl.classList.remove('hidden');
  try {
    const data = await getWeather(city);
    renderWeather(data);
  } catch (err) {
    weatherEl.innerHTML = `<div class="card">Error: ${err.message}</div>`;
  }
});
