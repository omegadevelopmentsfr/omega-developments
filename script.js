document.addEventListener('DOMContentLoaded', function () {
    initFloatingLines();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initCounters();
    initRevealAnimations();
    initContactForm();
    initParallax();
});

function initFloatingLines() {
    var container = document.getElementById('floating-lines-bg');
    if (!container || typeof THREE === 'undefined') return;

    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    var vertexShader = [
        'precision highp float;',
        'void main() {',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
    ].join('\n');

    var fragmentShader = [
        'precision highp float;',
        'uniform float iTime;',
        'uniform vec3 iResolution;',
        'uniform vec2 iMouse;',
        '',
        'const vec3 BLACK = vec3(0.0);',
        'const vec3 PINK = vec3(0.914, 0.278, 0.961);',
        'const vec3 BLUE = vec3(0.184, 0.294, 0.635);',
        'const vec3 PURPLE = vec3(0.545, 0.361, 0.965);',
        '',
        'mat2 rotate(float r) {',
        '  return mat2(cos(r), sin(r), -sin(r), cos(r));',
        '}',
        '',
        'vec3 background_color(vec2 uv) {',
        '  vec3 col = vec3(0.0);',
        '  float y = sin(uv.x - 0.2) * 0.3 - 0.1;',
        '  float m = uv.y - y;',
        '  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));',
        '  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));',
        '  return col * 0.5;',
        '}',
        '',
        'float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv) {',
        '  float time = iTime * 0.8;',
        '  float x_offset = offset;',
        '  float x_movement = time * 0.1;',
        '  float amp = sin(offset + time * 0.2) * 0.3;',
        '  float y = sin(uv.x + x_offset + x_movement) * amp;',
        '',
        '  vec2 d = screenUv - mouseUv;',
        '  float influence = exp(-dot(d, d) * 5.0);',
        '  float bendOffset = (mouseUv.y - screenUv.y) * influence * -0.5;',
        '  y += bendOffset;',
        '',
        '  float m = uv.y - y;',
        '  return 0.0175 / max(abs(m) + 0.01, 0.001) + 0.01;',
        '}',
        '',
        'void main() {',
        '  vec2 fragCoord = gl_FragCoord.xy;',
        '  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;',
        '  baseUv.y *= -1.0;',
        '',
        '  vec3 col = vec3(0.0);',
        '  vec3 b = background_color(baseUv);',
        '',
        '  vec2 mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;',
        '  mouseUv.y *= -1.0;',
        '',
        '  for (int i = 0; i < 6; i++) {',
        '    float fi = float(i);',
        '    float angle = -1.0 * log(length(baseUv) + 1.0);',
        '    vec2 ruv = baseUv * rotate(angle);',
        '    col += b * wave(',
        '      ruv + vec2(0.05 * fi + 2.0, -0.7),',
        '      1.5 + 0.2 * fi,',
        '      baseUv,',
        '      mouseUv',
        '    ) * 0.2;',
        '  }',
        '',
        '  for (int i = 0; i < 6; i++) {',
        '    float fi = float(i);',
        '    float angle = 0.2 * log(length(baseUv) + 1.0);',
        '    vec2 ruv = baseUv * rotate(angle);',
        '    col += b * wave(',
        '      ruv + vec2(0.05 * fi + 5.0, 0.0),',
        '      2.0 + 0.15 * fi,',
        '      baseUv,',
        '      mouseUv',
        '    );',
        '  }',
        '',
        '  for (int i = 0; i < 6; i++) {',
        '    float fi = float(i);',
        '    float angle = -0.4 * log(length(baseUv) + 1.0);',
        '    vec2 ruv = baseUv * rotate(angle);',
        '    ruv.x *= -1.0;',
        '    col += b * wave(',
        '      ruv + vec2(0.05 * fi + 10.0, 0.5),',
        '      1.0 + 0.2 * fi,',
        '      baseUv,',
        '      mouseUv',
        '    ) * 0.1;',
        '  }',
        '',
        '  gl_FragColor = vec4(col, 1.0);',
        '}'
    ].join('\n');

    var uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(1, 1, 1) },
        iMouse: { value: new THREE.Vector2(-1000, -1000) }
    };

    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    var geometry = new THREE.PlaneGeometry(2, 2);
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var clock = new THREE.Clock();
    var targetMouse = new THREE.Vector2(-1000, -1000);
    var currentMouse = new THREE.Vector2(-1000, -1000);

    function setSize() {
        var width = container.clientWidth || 1;
        var height = container.clientHeight || 1;
        renderer.setSize(width, height, false);
        var canvasWidth = renderer.domElement.width;
        var canvasHeight = renderer.domElement.height;
        uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
    }

    setSize();
    window.addEventListener('resize', setSize);

    document.addEventListener('mousemove', function (e) {
        var rect = renderer.domElement.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var dpr = renderer.getPixelRatio();
        targetMouse.set(x * dpr, (rect.height - y) * dpr);
    });

    function animate() {
        uniforms.iTime.value = clock.getElapsedTime();
        currentMouse.lerp(targetMouse, 0.05);
        uniforms.iMouse.value.copy(currentMouse);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
}

function initNavbar() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    var mobileToggle = document.querySelector('.mobile-toggle');
    var navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', function () {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '20px';
            navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });
}

function initSmoothScroll() {
    var navLinks = document.querySelector('.nav-links');

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));

            if (target) {
                var offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
}

function initCounters() {
    var statNumbers = document.querySelectorAll('.stat-number');

    var animateCounter = function (el) {
        var target = parseInt(el.getAttribute('data-count'));
        var duration = 2000;
        var step = target / (duration / 16);
        var current = 0;

        var updateCounter = function () {
            current += step;
            if (current < target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target;
            }
        };

        updateCounter();
    };

    var observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(function (stat) {
        statsObserver.observe(stat);
    });
}

function initRevealAnimations() {
    var revealElements = document.querySelectorAll('.service-card, .team-card, .project-card');

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
}

function initContactForm() {
    var contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var btn = contactForm.querySelector('button[type="submit"]');
        var originalText = btn.innerHTML;

        btn.innerHTML = '<span>Envoi en cours...</span>';
        btn.disabled = true;

        fetch("https://formsubmit.co/ajax/omegadevelopmentsfr@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "false") {
                    throw new Error("Erreur d'envoi");
                }
                btn.innerHTML = '<span>Message envoyé !</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
                btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                contactForm.reset();

                setTimeout(function () {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 5000);
            })
            .catch(error => {
                console.error(error);
                alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.");
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
    });
}

function initParallax() {
    var heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', function () {
        var scrolled = window.pageYOffset;
        var rate = scrolled * 0.3;

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = 'translateY(' + rate + 'px)';
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}
