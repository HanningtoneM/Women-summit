const featuredSpeakers = document.querySelector('.speakers');

const speakers = [
  {
    name: 'Magret Kenyatta',
    position: 'first lady of kenya',
    description: 'Margaret Gakuo Kenyatta is a Kenyan educator, First Lady of Kenya Since 2013, and wife of Uhuru Muigai Kenyatta, fourth president. She is also the founder of beyond-Zero campaign that has helped many women in our country',
    image: './images/women/kenyatta.jpg',
  },

  {
    name: 'Julie Gichuru',
    position: 'Media personality',
    description: 'Julie Gathoni Sumira Gichuru is a Kenyan entrepreneur and media personality with investments in media, fashion retail and entertainment sectors. She is an independent director at Acumen Communication Limited and is a fellow and trustee of the Africa Leadership Initiative EA.',
    image: './images/women/julie.jpg',
  },

  {
    name: 'Flora Mworoa',
    position: 'County Comissioner',
    description: 'Flora Mworoa is the County Comissioner of Nairobi county. She grew up in a small town in Meru county and has managed to grow her craft in both education and career wise. She is a definiton of a great career woman',
    image: './images/cc2.jpeg',
  },

  {
    name: 'Lupita Nyongo',
    position: 'Actor',
    description: 'Lupita Amondi is a Kenyan-Mexican actress. She was born in Mexico City, where her father was teaching, and was raised in Kenya from the age of one.',
    image: './images/women/lupita.webp',
  },

  {
    name: 'Amina Mohammed',
    position: 'Cabinet Secretary',
    description: 'Kenyan cabinet secretary, lawyer and a diplomat of Somali descent. She is presently serving as the Cabinet Secretary for Sports, Heritage and Culture in Kenya',
    image: './images/women/Amina_Mohamed.jpg',
  },

  {
    name: 'Wendo Githaka',
    position: 'Student counsel',
    description: 'student counsel at Universty of Nairobi and also Student mentor. Studies law and has specialized in public speaking. She is also the chairlady of the creating and performing arts club.',
    image: './images/wendo.jpeg',
  },
];

speakers.forEach((item) => {
  const card = `
      <div class="d-flex featured-left">
        <div class="image">
          <img src="./images/Tiles.svg" alt="" class="image-left" />
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