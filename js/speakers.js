const featuredSpeakers = document.querySelector('.speakers');

const speakers = [
  {
    name: 'Magret Kenyatta',
    position: 'first lady of kenya',
    description: 'first lady of kenya and also the founder of beyond zero campaign',
    image: '/images/women/kenyatta.jpg',
  },

  {
    name: 'Julie Gichuru',
    position: 'Media personality',
    description: 'journalist and media personality',
    image: '/images/women/julie.jpg',
  },

  {
    name: 'Flora Mworoa',
    position: 'County Comissioner',
    description: 'County Comissioner of Nairiobi county and mentor',
    image: '/images/cc2.jpeg',
  },

  {
    name: 'Lupita Nyongo',
    position: 'Actor',
    description: 'Actor and award winner for 12 years of slave',
    image: '/images/women/lupita.webp',
  },

  {
    name: 'Amina Mohammed',
    position: 'Cabinet Secretary',
    description: 'Kenyan cabinet secretary, lawyer and a diplomat of Somali descent. She is presently serving as the Cabinet Secretary for Sports, Heritage and Culture in Kenya',
    image: '/images/women/Amina_Mohamed.jpg',
  },

  {
    name: 'Wendo Githaka',
    position: 'Student counsel',
    description: 'student counsel at Nairobi universty and also Student mentor',
    image: '/images/wendo.jpeg',
  },
];

speakers.forEach((item) => {
  const card = `
      <div class="d-flex featured-left">
        <div class="image">
          <img src="/images/Tiles.svg" alt="" class="image-left" />
          <img
            src="${item.image}"
            alt="Magret"
            class="image-top"
            id="magret-image"
          />
        </div>
        <div class="talker-info">
        <h4 id="talker-magret">${item.name}</h4>
        <i class="primary-color" id="magret-position"
          >${item.position}</i
        >
        <div class="talker-line secondary-light-bg"></div>
        <p class="mt-3" id="magret-description">
          ${item.description}
        </p>
      </div>
    </div>
  `;
  featuredSpeakers.insertAdjacentHTML('afterbegin', card);
});