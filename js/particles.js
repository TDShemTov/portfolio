// Define the particles.js configuration for both sections
const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
};

// Ensure the DOM is fully loaded before initializing particles.js
document.addEventListener("DOMContentLoaded", function() {
  // Check if the element for the home section exists, and then apply particlesJS
  if (document.getElementById("particles-js-home")) {
    particlesJS("particles-js-home", particlesConfig);
  }

  // Check if the element for the skills section exists, and then apply particlesJS
  if (document.getElementById("particles-js-skills")) {
    particlesJS("particles-js-skills", particlesConfig);
  }
  
});
