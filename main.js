const stories = [
  {
    nombre: "valentiapolo1927",
    fotoPerfil: "https://unavatar.io/valentinapolo1927",
  },
  {
    nombre: "andrey__vasquez",
    fotoPerfil: "https://unavatar.io/Andreyvasquez",
  },
  {
    nombre: "valeria__polo",
    fotoPerfil:
      "https://lh3.googleusercontent.com/ogw/AOLn63E7eDHOTCOVM7gnYBcDKTHtpKcBBINszKrQprqr=s64-c-mo",
  },
  {
    nombre: "emilianosanchez2005",
    fotoPerfil: "https://unavatar.io/emilianosanchez",
  },
  {
    nombre: "sayturinarvaez1973",
    fotoPerfil: "https://unavatar.io/sayurinarvaez",
  },
  {
    nombre: "valentiapolo1927",
    fotoPerfil: "https://unavatar.io/valentinapolo1927",
  },
  {
    nombre: "andrey__vasquez",
    fotoPerfil: "https://unavatar.io/Andreyvasquez",
  },
  {
    nombre: "valeria__polo",
    fotoPerfil:
      "https://lh3.googleusercontent.com/ogw/AOLn63E7eDHOTCOVM7gnYBcDKTHtpKcBBINszKrQprqr=s64-c-mo",
  },
  {
    nombre: "emilianosanchez2005",
    fotoPerfil: "https://unavatar.io/emilianosanchez",
  },
  {
    nombre: "sayturinarvaez1973",
    fotoPerfil: "https://unavatar.io/sayurinarvaez",
  },
];

// querySelector => es para traer un elmento HTML aqui traemos el div con la clase stories
const containerStories = document.querySelector(".stories"); // => <div class="stories"></div>

stories.forEach((storie) => {
  containerStories.innerHTML += `
  <div class="storie">
  <div class="fotoDePerfil">
  <img
    src="${storie.fotoPerfil}"
    alt=""
  />
  </div>
  <h3 class="nombreDeUsuario">${storie.nombre}</h3>
</div>
  `;
});
function generarNum() {
  return Math.floor(Math.random() * 3000);
}
const posts = [
  {
    nombre: "sayuriNarvaez",
    fotoPerfil: "https://unavatar.io/sayuriNarvaez",
    ubication: {
      nombre: "bajo zero",
      url: "https://www.google.com/maps/place/Bajo+zero%C2%B0/@3.4096431,-76.3475875,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3a0f0afda119a9:0xbde455710f54b7fd!8m2!3d3.4096377!4d-76.3450126!16s%2Fg%2F11qh1kjrv1?hl=es&entry=ttu",
    },
    img: "https://i.pinimg.com/564x/7f/99/c2/7f99c26cd620d699b2b42d838ea53abf.jpg",
    meGusta: true,
    estaGuardado: true,
    numeroDegustas: generarNum(),
    descrpcion: "🍦🥳",

    comentarios: [
      {
        fotoPerfil: "https://unavatar.io/valeriapolo",
        nombre: "valeriapolo23",
        comentario: "linda disfruta",
      },
    ],
  },

  {
    nombre: "andreyVasquez",
    fotoPerfil: "https://unavatar.io/AndreyVasquez",
    ubication: {
      nombre: "punta cana ",
      url: "https://www.google.com/maps/place/Punta+Cana,+Rep%C3%BAblica+Dominicana/@18.5600761,-68.372535,3a,75y/data=!3m8!1e2!3m6!1sAF1QipMwhIEAXUyMIHi4eYjD85Iqava2na3KAM9rBI1F!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMwhIEAXUyMIHi4eYjD85Iqava2na3KAM9rBI1F%3Dw97-h86-k-no!7i3005!8i2646!4m7!3m6!1s0x8ea891645dcbfe77:0x61881cfaed12f6f3!8m2!3d18.5600761!4d-68.372535!10e5!16zL20vMDVzYzdn?hl=es&entry=ttu",
    },
    img: "https://i.pinimg.com/564x/55/97/3b/55973b3e4862a68f1c5a0d036c224fe9.jpg",
    meGusta: true,
    estaGuardado: true,
    numeroDegustas: generarNum(),
    descrpcion: "disfrutando con el amor de mi vida ",

    comentarios: [
      {
        fotoPerfil: "https://unavatar.io/valeriapolo",
        nombre: "valeriapolo23",
        comentario: "te amo vida ",
      },
    ],
  },
  {
    nombre: "mariajoseg03",
    fotoPerfil: "https://unavatar.io/mariaJose",
    ubication: {
      nombre: "poli de portivo ",
      url: "https://www.google.com/maps/place/Pozuelo+de+Alarc%C3%B3n,+Madrid,+Espa%C3%B1a/@40.4405596,-3.7880281,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipONaOV6gL2c_txdh3ps14WGAtvhpG1q3d8V519I!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipONaOV6gL2c_txdh3ps14WGAtvhpG1q3d8V519I%3Dw86-h114-k-no!7i3000!8i4000!4m16!1m8!3m7!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!2zRXNwYcOxYQ!3b1!8m2!3d40.463667!4d-3.74922!16zL20vMDZta2o!3m6!1s0xd4186130fa9597f:0xc88bf5f6ad1bf5d5!8m2!3d40.4475272!4d-3.8074152!10e5!16s%2Fg%2F11cn68yn1_?hl=es&entry=ttu",
    },
    img: "https://i.pinimg.com/564x/03/3f/41/033f419f0d10796477e5854b4f255d10.jpg",
    meGusta: true,
    estaGuardado: true,
    numeroDegustas: generarNum(),
    descrpcion:
      " El arte no reproduce aquello que es visible sino que hace visible aquello que no siempre lo es.💗🎨",

    comentarios: [
      {
        fotoPerfil: "https://unavatar.io/valeriapolo",
        nombre: "valeriapolo23",
        comentario: "linda disfruta",
      },
    ],
  },
  {
    nombre: "camila_rial",
    fotoPerfil: "https://unavatar.io/comidaRicas",
    ubication: {
      nombre: "poli de portivo ",
      url: "https://www.google.com/maps/place/Pozuelo+de+Alarc%C3%B3n,+Madrid,+Espa%C3%B1a/@40.4405596,-3.7880281,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipONaOV6gL2c_txdh3ps14WGAtvhpG1q3d8V519I!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipONaOV6gL2c_txdh3ps14WGAtvhpG1q3d8V519I%3Dw86-h114-k-no!7i3000!8i4000!4m16!1m8!3m7!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!2zRXNwYcOxYQ!3b1!8m2!3d40.463667!4d-3.74922!16zL20vMDZta2o!3m6!1s0xd4186130fa9597f:0xc88bf5f6ad1bf5d5!8m2!3d40.4475272!4d-3.8074152!10e5!16s%2Fg%2F11cn68yn1_?hl=es&entry=ttu",
    },
    img: "https://i.pinimg.com/564x/72/78/35/72783575e608df8d1b02f4386cc00312.jpg",
    meGusta: true,
    estaGuardado: true,
    numeroDegustas: generarNum(),
    descrpcion: "ahh no chaoo 😂💗",

    comentarios: [
      {
        fotoPerfil: "https://unavatar.io/valeriapolo",
        nombre: "valeriapolo23",
        comentario: "linda disfruta",
      },
    ],
  },
];

const containerPosts = document.querySelector(".posts");

posts.forEach((post) => {
  containerPosts.innerHTML += `
<article class="post">
  <header class="post_header">
    <img
      src="${post.fotoPerfil}"
      alt=""
    />
    <div class="nombre_usuario">
      <h6>${post.nombre}</h6>
      <a
        href="${post.ubication.url}"
      >
        ${post.ubication.nombre}
      </a>
    </div>
    <svg
      aria-label="Más opciones"
      class="_ab6-"
      color="rgb(245, 245, 245)"
      fill="rgb(245, 245, 245)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  </header>
  <div class="post_media">
    <img
      src="${post.img}"
      alt=""
    />

    <div class="iconos-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
        />
      </svg>

      <svg
        aria-label="Comentar"
        class="x1lliihq x1n2onr6"
        color="rgb(245, 245, 245)"
        fill="rgb(245, 245, 245)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Comentar</title>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>

      <svg
        aria-label="Compartir publicación"
        class="x1lliihq x1n2onr6"
        color="rgb(245, 245, 245)"
        fill="rgb(245, 245, 245)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Compartir publicación</title>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        ></line>
        <polygon
          fill="none"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>

      <svg
        class="guardar"
        aria-label="Guardar"
        class="x1lliihq x1n2onr6"
        color="rgb(245, 245, 245)"
        fill="rgb(245, 245, 245)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Guardar</title>
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    </div>

    <div class="descripcion">
      <h3>${post.nombre}</h3>
      <p>${post.descrpcion}</p>
    </div>

    <p class="numeroDeGusta"> ${post.numeroDegustas} me gusta</p>

    <div class="post-comentario">
      <input type="text" placeholder="escribe un comentario" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />

        <input type="text" placeholder="escribe un comentario" />
      </svg>
    </div>
  </div>
</article>
  `;
});

const sugerencias = [
  {
    nombre: "andrey__vasquez",
    nombre2: "joel_george12 y 3 más siguen esta cer..",
    fotoPerfil: "https://unavatar.io/Andreyvasquez",
  },
  {
    nombre: "valentina-polo",
    nombre2: "oh.sarita y 5 más siguen esta cue..",
    fotoPerfil: "https://unavatar.io/valentina-polo",
  },
  {
    nombre: "Anuel",
    nombre2: "kmaleon_15 y 14 más siguen esta..",
    fotoPerfil: "https://unavatar.io/Anuel-aa",
  },
  {
    nombre: "Beauty_lashes",
    nombre2: "mari.aelena674 y 1 más siguen est..",
    fotoPerfil: "https://unavatar.io/Beauty_lashes",
  },
  {
    nombre: "KarenSevillano",
    nombre2: "Nuevo en Instagram",
    fotoPerfil: "https://unavatar.io/KarenSevillano",
  },
];
const modal = document.querySelector(".modal");

const cerrarModal = () => {
  modal.classList.add("oculto");
};
const follow = (event, usuario) => {
  const button = event.target;
  const text = button.innerText;
  const img = modal.querySelector("img");
  const p = modal.querySelector("p");
  if (text === "Seguir") {
    button.classList.add("following");
    button.innerText = "Siguiendo";
  } else {
    modal.classList.remove("oculto");
    img.src = usuario.fotoPerfil;
    p.innerText = `¿Dejar de seguri a ${usuario.nombre}?`;
    button.classList.remove("following");
    button.innerText = "Seguir";
  }
};

const sugerenciasHtml = document.querySelector(".sugerencia-para-seguir");
sugerencias.forEach((sugerencia) => {
  const obj = JSON.stringify(sugerencia);
  sugerenciasHtml.innerHTML += `
  <div class="mi-cuenta">
  <img src="${sugerencia.fotoPerfil}" alt="" />
  <div class="cuenta-usuario">
    <h2>${sugerencia.nombre}</h2>
    <h4>${sugerencia.nombre2}</h4>
  </div>
  <button onclick='follow(event, ${obj})'>Seguir</button>
</div>`;
});
