let selectedColor = '';
let currentWord = '';

function selectColor(color) {
    selectedColor = color;
    document.getElementById("disabilitySection").style.display = "block";

    const levelMessage = document.getElementById("levelMessage");
    switch (color) {
        case 'rojo':
            levelMessage.textContent = "El estudiante tiene una discapacidad muy avanzada.";
            break;
        case 'amarillo':
            levelMessage.textContent = "El estudiante necesita atención requerida.";
            break;
        case 'verde':
            levelMessage.textContent = "El estudiante está en un nivel adecuado.";
            break;
        case 'azul':
            levelMessage.textContent = "El estudiante es sobresaliente.";
            break;
        default:
            levelMessage.textContent = "";
    }

    showActivities();
}

function showActivities() {
    const disabilitySelect = document.getElementById("disabilitySelect");
    const activitySection = document.getElementById("activitySection");
    const activityList = document.getElementById("activityList");
    const videoContainer = document.getElementById("videoContainer");
    const imageContainer = document.getElementById("imageContainer");
    const resources = document.getElementById("resources");

    activityList.innerHTML = "";
    videoContainer.innerHTML = "";
    imageContainer.innerHTML = "";

    if (disabilitySelect.value) {
        activitySection.style.display = "block";
        resources.style.display = "block";

        let activities = [];
        let videos = [];
        let images = [];

        switch (disabilitySelect.value) {
            case "dislexia":
                activities = [
                    {
                        activity: "Utilizar audiolibros para facilitar la comprensión.",
                        examples: ["Audiolibros de cuentos", "Audiolibros de novelas", "Audiolibros educativos"],
                        explanation: "Los audiolibros permiten al estudiante escuchar la historia, facilitando la comprensión."
                    },
                    {
                        activity: "Practicar con tarjetas de palabras.",
                        examples: ["Tarjetas de vocabulario", "Tarjetas de sinónimos", "Tarjetas de antónimos"],
                        explanation: "Las tarjetas ayudan a reconocer palabras y mejorar el vocabulario."
                    },
                    {
                        activity: "Fomentar la lectura en voz alta.",
                        examples: ["Lectura en clase", "Lectura en casa con un familiar", "Lectura en grupos"],
                        explanation: "Leer en voz alta mejora la fluidez y la confianza."
                    },
                ];
                videos = [
                   "https://www.youtube.com/embed/dyslexia_video2",
                    "https://www.youtube.com/embed/dyslexia_video2"
                ];
                images = [
                   'IMG\disleia.png',
                    'IMG\actividades-ninos-dislexia.jpg'
                ];
                break;
            case "discalculia":
                activities = [
                    {
                        activity: "Usar manipulativos para entender conceptos matemáticos.",
                        examples: ["Bloques de construcción", "Fichas de conteo", "Cuentas"],
                        explanation: "Los manipulativos hacen que los conceptos abstractos sean más concretos."
                    },
                    {
                        activity: "Realizar actividades prácticas de conteo.",
                        examples: ["Contar objetos", "Contar pasos al caminar", "Contar monedas"],
                        explanation: "Contar objetos tangibles ayuda a desarrollar habilidades numéricas."
                    },
                    {
                        activity: "Incorporar juegos de mesa que impliquen sumar.",
                        examples: ["Monopoly", "Uno", "Juegos de cartas"],
                        explanation: "Los juegos de mesa permiten practicar matemáticas en un contexto divertido."
                    },
                ];
                videos = [
                    "https://www.youtube.com/embed/dyscalculia_video1",
                    "https://www.youtube.com/embed/dyscalculia_video2"
                ];
                images = [
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150"
                ];
                break;
            case "tdah":
                activities = [
                    {
                        activity: "Establecer rutinas diarias.",
                        examples: ["Rutina de mañana", "Rutina de estudio", "Rutina de noche"],
                        explanation: "Las rutinas ayudan a crear un sentido de orden y previsibilidad."
                    },
                    {
                        activity: "Usar temporizadores para mantener la concentración.",
                        examples: ["Temporizador de cocina", "Aplicaciones de temporizador", "Relojes de arena"],
                        explanation: "Los temporizadores ayudan a establecer límites de tiempo para tareas."
                    },
                    {
                        activity: "Incorporar descansos regulares.",
                        examples: ["Descansos de 5 minutos cada 25 minutos", "Paseos cortos", "Ejercicios de estiramiento"],
                        explanation: "Los descansos cortos ayudan a mejorar la concentración y el rendimiento."
                    },
                ];
                videos = [
                    "https://www.youtube.com/embed/adhd_video1",
                    "https://www.youtube.com/embed/adhd_video2"
                ];
                images = [
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150"
                ];
                break;
            case "visual":
                activities = [
  {
                        activity: "Usar materiales en braille.",
                        examples: ["Libros en braille", "Etiquetas en braille", "Tarjetas educativas en braille"],
                        explanation: "Los materiales en braille permiten a los estudiantes con discapacidad visual acceder a la información."
                    },
                    {
                        activity: "Incorporar audiolibros.",
                        examples: ["Audiolibros de ficción", "Audiolibros de no ficción", "Audiolibros educativos"],
                        explanation: "Los audiolibros facilitan el acceso a la lectura sin necesidad de ver el texto."
                    },
                    {
                        activity: "Proporcionar recursos visuales adicionales.",
                        examples: ["Gráficos y diagramas", "Materiales con alto contraste", "Videos con descripciones"],
                        explanation: "Los recursos visuales adaptados mejoran la comprensión del contenido."
                    },
                ];
                videos = [
                    "https://www.youtube.com/embed/visual_impairment_video1",
                    "https://www.youtube.com/embed/visual_impairment_video2"
                ];
                images = [
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150"
                ];
                break;
            default:
                activities = [];
                videos = [];
                images = [];
        }

        activities.forEach(({activity, examples, explanation}) => {
            const li = document.createElement("li");
            li.innerHTML = `${activity} <br> Ejemplos: ${examples.join(", ")} <br> Cómo hacerlo: ${explanation}`;
            activityList.appendChild(li);
        });


        videos.forEach(video => {
            const iframe = document.createElement("iframe");
            iframe.src = video;
            iframe.width = "250";
            iframe.height = "150";
            videoContainer.appendChild(iframe);
        });

        images.forEach(image => {
            const img = document.createElement("img");
            img.src = 'IMG\actividades-ninos-dislexia.jpg';
            img.alt = "Recurso visual";
            img.style.width = "150px";
            img.style.marginRight = "10px";
            imageContainer.appendChild(img);
        });
    } else {
        activitySection.style.display = "none";
    }
}

function playSound() {
    const wordInput = document.getElementById('wordInput');
    currentWord = wordInput.value.trim();
    const feedback = document.getElementById('feedback');

    if (currentWord === "") {
        feedback.textContent = "Por favor, escribe una palabra.";
        return;
    }

    feedback.textContent = ""; // Limpiar el mensaje de retroalimentación

    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
}

function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES';

    recognition.onstart = () => {
        document.getElementById("feedback").textContent = "Escuchando...";
    };

    recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript;
        currentWord = currentWord; // Guarda la palabra original
        checkPronunciation(spokenWord);
    };

    recognition.onerror = () => {
        document.getElementById("feedback").textContent = "Error al reconocer la voz.";
    };

    recognition.start();
}

function checkPronunciation(spokenWord) {
    const feedbackElement = document.getElementById("feedback");
    const correctPronunciation = currentWord.toLowerCase();

    if (spokenWord.toLowerCase() === correctPronunciation) {
        feedbackElement.textContent = "¡Correcto! Muy bien pronunciado.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = `Incorrecto. Pronunciaste "${spokenWord}".`;
        feedbackElement.style.color = "red";
        
        // Proporcionar corrección y consejo
        provideCorrectionAndTips(correctPronunciation);
    }
}

function provideCorrectionAndTips(correctWord) {
    const feedbackElement = document.getElementById("feedback");

    // Sugerencia de cómo mejorar la pronunciación
    const tips = [
        "Asegúrate de articular bien las sílabas.",
        "Practica frente a un espejo para ver tu boca.",
        "Escucha la pronunciación y repítela varias veces.",
        `Intenta pronunciarlo como: ${correctWord}`
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    feedbackElement.textContent += ` - Consejo: ${randomTip}`;
}

function filterResults() {
    const filter = document.getElementById('filterInput').value.toLowerCase();
    const table = document.getElementById('studentTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const name = row.cells[0].textContent.toLowerCase();

        if (name.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.style.display = menu.style.display === "none" ? "block" : "none"; // Alternar menú
}

function showTable(blockNumber) {
    document.getElementById("studentTableSection").style.display = "block";
    document.getElementById("disabilitySection").style.display = "block"; // Mostrar sección de discapacidad
}
