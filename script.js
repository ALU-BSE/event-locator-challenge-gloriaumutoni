const events = [
  {
    id: 1,
    title: "Tech Innovation Summit 2025",
    category: "technology",
    date: "2025-08-15",
    time: "09:00 AM",
    location: "Silicon Valley Convention Center",
    address: "123 Tech Street, San Francisco, CA",
    price: "$299",
    image: "fas fa-laptop-code",
    description:
      "Join industry leaders and innovators for a full day of insights into the latest technology trends. This summit features keynote speeches from top tech executives, hands-on workshops, and networking opportunities with fellow professionals. Learn about AI, blockchain, cloud computing, and emerging technologies that will shape the future.",
    organizer: "Tech Events Inc.",
    capacity: "500 attendees",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Art Exhibition Opening",
    category: "arts",
    date: "2025-07-20",
    time: "06:00 PM",
    location: "Downtown Art Gallery",
    address: "456 Art Avenue, New York, NY",
    price: "Free",
    image: "fas fa-palette",
    description:
      "Experience the work of contemporary artists from around the world in this stunning exhibition. The opening night features wine tasting, artist meet-and-greets, and guided tours of the collection. This exhibition showcases diverse artistic expressions and innovative techniques that challenge traditional boundaries.",
    organizer: "Metropolitan Arts Foundation",
    capacity: "200 attendees",
    featured: true,
  },
  {
    id: 3,
    title: "Business Leadership Conference",
    category: "business",
    date: "2025-09-10",
    time: "08:30 AM",
    location: "Grand Business Hotel",
    address: "789 Corporate Blvd, Chicago, IL",
    price: "$450",
    image: "fas fa-chart-line",
    description:
      "Develop your leadership skills with expert speakers, interactive workshops, and peer networking. This conference covers strategic planning, team management, digital transformation, and sustainable business practices. Perfect for executives, managers, and aspiring leaders looking to advance their careers.",
    organizer: "Business Leaders Network",
    capacity: "300 attendees",
    featured: false,
  },
  {
    id: 4,
    title: "Jazz Festival Under the Stars",
    category: "music",
    date: "2025-08-25",
    time: "07:00 PM",
    location: "Riverside Park Amphitheater",
    address: "321 River Road, Austin, TX",
    price: "$75",
    image: "fas fa-music",
    description:
      "Enjoy an evening of smooth jazz under the open sky with renowned musicians and local artists. This outdoor festival features multiple stages, food vendors, and a relaxed atmosphere perfect for music lovers. Bring your blanket and enjoy world-class jazz performances in a beautiful natural setting.",
    organizer: "Austin Music Society",
    capacity: "1000 attendees",
    featured: true,
  },
  {
    id: 5,
    title: "Marathon Training Workshop",
    category: "sports",
    date: "2025-07-28",
    time: "06:00 AM",
    location: "City Sports Complex",
    address: "654 Athletic Way, Denver, CO",
    price: "$35",
    image: "fas fa-running",
    description:
      "Learn proper training techniques, nutrition strategies, and injury prevention methods from professional coaches. This workshop is designed for runners of all levels who want to improve their performance and safely complete their first marathon or achieve a personal best.",
    organizer: "Denver Running Club",
    capacity: "150 attendees",
    featured: false,
  },
  {
    id: 6,
    title: "Gourmet Food & Wine Tasting",
    category: "food",
    date: "2025-08-05",
    time: "05:30 PM",
    location: "Culinary Institute",
    address: "987 Flavor Street, Napa, CA",
    price: "$125",
    image: "fas fa-wine-glass",
    description:
      "Indulge in an evening of exquisite cuisine paired with premium wines from local vineyards. Professional sommeliers will guide you through tastings while renowned chefs present their signature dishes. Learn about wine pairing, flavor profiles, and culinary techniques in an elegant setting.",
    organizer: "Napa Valley Culinary Society",
    capacity: "80 attendees",
    featured: true,
  },
  {
    id: 7,
    title: "Digital Marketing Masterclass",
    category: "education",
    date: "2025-09-18",
    time: "10:00 AM",
    location: "Learning Center Downtown",
    address: "234 Knowledge Ave, Seattle, WA",
    price: "$199",
    image: "fas fa-laptop",
    description:
      "Master the latest digital marketing strategies including social media advertising, content marketing, SEO, and analytics. This intensive workshop provides hands-on training with real-world case studies and practical exercises. Perfect for marketers, entrepreneurs, and business owners.",
    organizer: "Digital Learning Institute",
    capacity: "100 attendees",
    featured: false,
  },
  {
    id: 8,
    title: "Wellness & Mindfulness Retreat",
    category: "health",
    date: "2025-08-12",
    time: "09:00 AM",
    location: "Serenity Wellness Center",
    address: "567 Peaceful Path, Sedona, AZ",
    price: "$180",
    image: "fas fa-lotus",
    description:
      "Reconnect with yourself through guided meditation, yoga sessions, and wellness workshops. This day-long retreat offers a peaceful escape from daily stress with professional instructors teaching mindfulness techniques, breathing exercises, and stress management strategies.",
    organizer: "Harmony Wellness Group",
    capacity: "60 attendees",
    featured: true,
  },
];

let filteredEvents = events;
let currentEvent = null;

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("home-page")) {
    loadFeaturedEvents();
    setMinDate();
  } else if (document.getElementById("events-page")) {
    loadEvents();
  } else if (document.getElementById("event-details-page")) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get("id"));
    if (eventId) {
      showEventDetails(eventId);
    }
  }
});

function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date-filter").setAttribute("min", today);
}

function createEventCard(event) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6";

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  col.innerHTML = `
      <div class="event-card" onclick="window.location.href='event-details.html?id=${
        event.id
      }'">
          <div class="event-image">
              <i class="${event.image}"></i>
          </div>
          <div class="event-body">
              <span class="event-category">${
                event.category.charAt(0).toUpperCase() + event.category.slice(1)
              }</span>
              <h5 class="event-title">${event.title}</h5>
              <div class="event-meta">
                  <div class="mb-1">
                      <i class="fas fa-calendar-alt me-2"></i>${formattedDate}
                  </div>
                  <div class="mb-1">
                      <i class="fas fa-clock me-2"></i>${event.time}
                  </div>
                  <div class="mb-2">
                      <i class="fas fa-map-marker-alt me-2"></i>${
                        event.location
                      }
                  </div>
              </div>
              <p class="event-description">${event.description.substring(
                0,
                120
              )}...</p>
              <div class="d-flex justify-content-between align-items-center">
                  <span class="event-price">${event.price}</span>
                  <small class="text-muted">${event.capacity}</small>
              </div>
          </div>
      </div>
  `;

  return col;
}

function loadFeaturedEvents() {
  const featuredEvents = events.filter((event) => event.featured);
  const container = document.getElementById("featured-events");
  if (container) {
    container.innerHTML = "";
    featuredEvents.forEach((event) => {
      container.appendChild(createEventCard(event));
    });
  }
}

function searchEvents(event) {
  event.preventDefault();

  const query = document.getElementById("search-query").value.toLowerCase();
  const dateFilter = document.getElementById("date-filter").value;
  const categoryFilter = document.getElementById("category-filter").value;

  filteredEvents = events.filter((eventItem) => {
    const matchesQuery =
      !query ||
      eventItem.title.toLowerCase().includes(query) ||
      eventItem.description.toLowerCase().includes(query) ||
      eventItem.location.toLowerCase().includes(query);

    const matchesDate = !dateFilter || eventItem.date === dateFilter;
    const matchesCategory =
      !categoryFilter || eventItem.category === categoryFilter;

    return matchesQuery && matchesDate && matchesCategory;
  });

  sessionStorage.setItem("filteredEvents", JSON.stringify(filteredEvents));
  window.location.href = "events.html";
}

function loadEvents() {
  const container = document.getElementById("events-results");
  const noEventsDiv = document.getElementById("no-events");

  if (sessionStorage.getItem("filteredEvents")) {
    filteredEvents = JSON.parse(sessionStorage.getItem("filteredEvents"));
  }

  if (container) {
    container.innerHTML = "";

    if (filteredEvents.length === 0) {
      noEventsDiv.style.display = "block";
      return;
    }

    noEventsDiv.style.display = "none";

    filteredEvents.forEach((event) => {
      container.appendChild(createEventCard(event));
    });
  }
}

function showEventDetails(eventId) {
  currentEvent = events.find((event) => event.id === eventId);
  if (!currentEvent) return;

  loadEventDetails();
}

function loadEventDetails() {
  if (!currentEvent) return;

  const eventDate = new Date(currentEvent.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const heroContent = document.getElementById("event-hero-content");
  if (heroContent) {
    heroContent.innerHTML = `
          <div class="row">
              <div class="col-lg-8">
                  <span class="badge bg-light text-dark mb-3">${
                    currentEvent.category.charAt(0).toUpperCase() +
                    currentEvent.category.slice(1)
                  }</span>
                  <h1 class="display-5 fw-bold mb-3">${currentEvent.title}</h1>
                  <p class="lead mb-4">${currentEvent.description.substring(
                    0,
                    150
                  )}...</p>
                  <div class="d-flex flex-wrap gap-4">
                      <div>
                          <i class="fas fa-calendar-alt me-2"></i>
                          <span>${formattedDate}</span>
                      </div>
                      <div>
                          <i class="fas fa-clock me-2"></i>
                          <span>${currentEvent.time}</span>
                      </div>
                      <div>
                          <i class="fas fa-map-marker-alt me-2"></i>
                          <span>${currentEvent.location}</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 text-lg-end">
                  <div class="fs-2 fw-bold">${currentEvent.price}</div>
                  <div class="text-light opacity-75">${
                    currentEvent.capacity
                  }</div>
              </div>
          </div>
      `;
  }

  const eventDescription = document.getElementById("event-description");
  if (eventDescription) {
    eventDescription.innerHTML = `
          <p>${currentEvent.description}</p>
          <h5 class="mt-4">What to Expect</h5>
          <ul class="list-unstyled">
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Expert speakers and industry professionals</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Networking opportunities with like-minded individuals</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Refreshments and materials provided</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Certificate of attendance</li>
          </ul>
      `;
  }

  const eventInfo = document.getElementById("event-info");
  if (eventInfo) {
    eventInfo.innerHTML = `
          <div class="info-item">
              <i class="fas fa-calendar-alt info-icon"></i>
              <div>
                  <strong>Date & Time</strong><br>
                  ${formattedDate}<br>
                  ${currentEvent.time}
              </div>
          </div>
          <div class="info-item">
              <i class="fas fa-map-marker-alt info-icon"></i>
              <div>
                  <strong>Location</strong><br>
                  ${currentEvent.location}<br>
                  ${currentEvent.address}
              </div>
          </div>
          <div class="info-item">
              <i class="fas fa-user info-icon"></i>
              <div>
                  <strong>Organizer</strong><br>
                  ${currentEvent.organizer}
              </div>
          </div>
          <div class="info-item">
              <i class="fas fa-users info-icon"></i>
              <div>
                  <strong>Capacity</strong><br>
                  ${currentEvent.capacity}
              </div>
          </div>
          <div class="info-item">
              <i class="fas fa-tag info-icon"></i>
              <div>
                  <strong>Price</strong><br>
                  ${currentEvent.price}
              </div>
          </div>
      `;
  }
}

function clearFilters() {
  document.getElementById("search-query").value = "";
  document.getElementById("date-filter").value = "";
  document.getElementById("category-filter").value = "";
  filteredEvents = events;
  sessionStorage.setItem("filteredEvents", JSON.stringify(filteredEvents));
}
