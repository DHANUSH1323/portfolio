import React, { useEffect, useRef } from "react";

/**
 * Particleground-like background in React (API parity with the legacy site).
 * Mirrors the defaults in jquery.particleground.js and the demo.js options
 * you shared (dotColor/lineColor set to #5cbdaa).
 *
 * Tunables are grouped in the OPTIONS object below and match the original:
 * - minSpeedX/Y, maxSpeedX/Y
 * - directionX/Y: 'center' bounces off edges
 * - density: one particle per N pixels (width*height / density)
 * - particleRadius (NOTE: legacy code draws radius/2; we do the same)
 * - lineWidth, proximity, parallax, parallaxMultiplier
 * - dotColor, lineColor
 */
export default function BackgroundParticles() {
    const ref = useRef(null);
    const raf = useRef(0);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });

        const DPR = Math.min(2, window.devicePixelRatio || 1);

        const OPTIONS = {
            minSpeedX: 0.1,
            maxSpeedX: 0.7,
            minSpeedY: 0.1,
            maxSpeedY: 0.7,
            directionX: "center", // 'center' = bounce
            directionY: "center",
            density: 32000, // one particle every N pixels
            dotColor: "#5cbdaa",
            lineColor: "#5cbdaa",
            particleRadius: 6, // legacy lib draws /2
            lineWidth: 2,
            curvedLines: false,
            proximity: 150, // keep links visible even with fewer particles
            parallax: true,
            parallaxMultiplier: 5,
        };

        let w = 0,
            h = 0;

        // Pointer + parallax state
        let mouseX = 0,
            mouseY = 0,
            winW = 0,
            winH = 0,
            pointerX = 0,
            pointerY = 0;

        const desktop = !navigator.userAgent.match(
            /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
        );

        const particles = [];

        function styleCanvas() {
            // Always cover the full viewport so particles are visible edge-to-edge
            w = window.innerWidth;
            h = window.innerHeight;

            canvas.width = Math.round(w * DPR);
            canvas.height = Math.round(h * DPR);
            // Explicitly pin canvas to viewport and push it behind content
            canvas.style.position = 'fixed';
            canvas.style.inset = '0'; // top/right/bottom/left = 0
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.zIndex = '-1';
            canvas.style.pointerEvents = 'none';

            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            ctx.fillStyle = OPTIONS.dotColor;
            ctx.strokeStyle = OPTIONS.lineColor;
            ctx.lineWidth = OPTIONS.lineWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        }

        function initParticles() {
            particles.length = 0;
            const num = Math.max(
                1,
                Math.round((canvas.width / DPR) * (canvas.height / DPR) / OPTIONS.density)
            );
            for (let i = 0; i < num; i++) {
                const layer = Math.ceil(Math.random() * 3); // 1..3 like legacy
                particles.push({
                    stackPos: i,
                    active: true,
                    layer,
                    parallaxOffsetX: 0,
                    parallaxOffsetY: 0,
                    parallaxTargX: 0,
                    parallaxTargY: 0,
                    position: {
                        x: Math.ceil(Math.random() * w),
                        y: Math.ceil(Math.random() * h),
                    },
                    speed: {
                        x: (() => {
                            switch (OPTIONS.directionX) {
                                case "left":
                                    return +(
                                        -OPTIONS.maxSpeedX +
                                        Math.random() * OPTIONS.maxSpeedX -
                                        OPTIONS.minSpeedX
                                    ).toFixed(2);
                                case "right":
                                    return +(
                                        Math.random() * OPTIONS.maxSpeedX + OPTIONS.minSpeedX
                                    ).toFixed(2);
                                default: {
                                    let sx = +(
                                        -OPTIONS.maxSpeedX / 2 +
                                        Math.random() * OPTIONS.maxSpeedX
                                    ).toFixed(2);
                                    sx += sx > 0 ? OPTIONS.minSpeedX : -OPTIONS.minSpeedX;
                                    return sx;
                                }
                            }
                        })(),
                        y: (() => {
                            switch (OPTIONS.directionY) {
                                case "up":
                                    return +(
                                        -OPTIONS.maxSpeedY +
                                        Math.random() * OPTIONS.maxSpeedY -
                                        OPTIONS.minSpeedY
                                    ).toFixed(2);
                                case "down":
                                    return +(
                                        Math.random() * OPTIONS.maxSpeedY + OPTIONS.minSpeedY
                                    ).toFixed(2);
                                default: {
                                    let sy = +(
                                        -OPTIONS.maxSpeedY / 2 +
                                        Math.random() * OPTIONS.maxSpeedY
                                    ).toFixed(2);
                                    sy += sy > 0 ? OPTIONS.minSpeedY : -OPTIONS.minSpeedY;
                                    return sy;
                                }
                            }
                        })(),
                    },
                });
            }
        }

        function drawParticle(p) {
            // Dot (legacy draws radius / 2)
            ctx.beginPath();
            ctx.arc(
                p.position.x + p.parallaxOffsetX,
                p.position.y + p.parallaxOffsetY,
                OPTIONS.particleRadius / 2,
                0,
                Math.PI * 2,
                true
            );
            ctx.closePath();
            ctx.fill();

            // Lines to nearby particles
            ctx.beginPath();
            for (let i = particles.length - 1; i > p.stackPos; i--) {
                const p2 = particles[i];
                const ax = p.position.x - p2.position.x;
                const ay = p.position.y - p2.position.y;
                const dist = Math.sqrt(ax * ax + ay * ay);

                if (dist < OPTIONS.proximity) {
                    ctx.moveTo(
                        p.position.x + p.parallaxOffsetX,
                        p.position.y + p.parallaxOffsetY
                    );
                    if (OPTIONS.curvedLines) {
                        ctx.quadraticCurveTo(
                            Math.max(p2.position.x, p2.position.x),
                            Math.min(p2.position.y, p2.position.y),
                            p2.position.x + p2.parallaxOffsetX,
                            p2.position.y + p2.parallaxOffsetY
                        );
                    } else {
                        ctx.lineTo(
                            p2.position.x + p2.parallaxOffsetX,
                            p2.position.y + p2.parallaxOffsetY
                        );
                    }
                }
            }
            ctx.stroke();
            ctx.closePath();
        }

        function updateParticle(p) {
            // Parallax offsets (mouse-based since we don’t use device orientation here)
            if (OPTIONS.parallax) {
                pointerX = mouseX;
                pointerY = mouseY;
                p.parallaxTargX = (pointerX - winW / 2) / (OPTIONS.parallaxMultiplier * p.layer);
                p.parallaxOffsetX += (p.parallaxTargX - p.parallaxOffsetX) / 10;
                p.parallaxTargY = (pointerY - winH / 2) / (OPTIONS.parallaxMultiplier * p.layer);
                p.parallaxOffsetY += (p.parallaxTargY - p.parallaxOffsetY) / 10;
            }

            const elWidth = w;
            const elHeight = h;

            // Horizontal
            switch (OPTIONS.directionX) {
                case "left":
                    if (p.position.x + p.speed.x + p.parallaxOffsetX < 0) {
                        p.position.x = elWidth - p.parallaxOffsetX;
                    }
                    break;
                case "right":
                    if (p.position.x + p.speed.x + p.parallaxOffsetX > elWidth) {
                        p.position.x = 0 - p.parallaxOffsetX;
                    }
                    break;
                default:
                    if (
                        p.position.x + p.speed.x + p.parallaxOffsetX > elWidth ||
                        p.position.x + p.speed.x + p.parallaxOffsetX < 0
                    ) {
                        p.speed.x = -p.speed.x;
                    }
                    break;
            }

            // Vertical
            switch (OPTIONS.directionY) {
                case "up":
                    if (p.position.y + p.speed.y + p.parallaxOffsetY < 0) {
                        p.position.y = elHeight - p.parallaxOffsetY;
                    }
                    break;
                case "down":
                    if (p.position.y + p.speed.y + p.parallaxOffsetY > elHeight) {
                        p.position.y = 0 - p.parallaxOffsetY;
                    }
                    break;
                default:
                    if (
                        p.position.y + p.speed.y + p.parallaxOffsetY > elHeight ||
                        p.position.y + p.speed.y + p.parallaxOffsetY < 0
                    ) {
                        p.speed.y = -p.speed.y;
                    }
                    break;
            }

            p.position.x += p.speed.x;
            p.position.y += p.speed.y;
        }

        function resize() {
            styleCanvas();

            // Sync sizes for parallax math
            winW = window.innerWidth;
            winH = window.innerHeight;

            // Cull offscreen (not strictly necessary but keeps parity)
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                if (p.position.x > w || p.position.y > h) {
                    particles.splice(i, 1);
                }
            }

            // Density-adjusted count
            const target = Math.max(
                1,
                Math.round((canvas.width / DPR) * (canvas.height / DPR) / OPTIONS.density)
            );
            if (target > particles.length) {
                while (particles.length < target) {
                    particles.push({
                        ...particles[0], // copy shape
                        // but randomize fields like legacy init
                        stackPos: particles.length,
                        layer: Math.ceil(Math.random() * 3),
                        parallaxOffsetX: 0,
                        parallaxOffsetY: 0,
                        parallaxTargX: 0,
                        parallaxTargY: 0,
                        position: {
                            x: Math.ceil(Math.random() * w),
                            y: Math.ceil(Math.random() * h),
                        },
                        speed: {
                            x: (() => {
                                let sx =
                                    -OPTIONS.maxSpeedX / 2 + Math.random() * OPTIONS.maxSpeedX;
                                sx += sx > 0 ? OPTIONS.minSpeedX : -OPTIONS.minSpeedX;
                                return +sx.toFixed(2);
                            })(),
                            y: (() => {
                                let sy =
                                    -OPTIONS.maxSpeedY / 2 + Math.random() * OPTIONS.maxSpeedY;
                                sy += sy > 0 ? OPTIONS.minSpeedY : -OPTIONS.minSpeedY;
                                return +sy.toFixed(2);
                            })(),
                        },
                    });
                }
            } else if (target < particles.length) {
                particles.splice(target);
            }

            // Re-index
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].stackPos = i;
            }
        }

        function draw() {
            raf.current = requestAnimationFrame(draw);

            // Canvas wipe
            ctx.clearRect(0, 0, w, h);

            // Update + draw
            for (let i = 0; i < particles.length; i++) {
                updateParticle(particles[i]);
            }
            for (let i = 0; i < particles.length; i++) {
                drawParticle(particles[i]);
            }
        }

        function onMouseMove(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }

        styleCanvas();
        initParticles();
        draw();

        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", onMouseMove, false);

        // Kick a resize once mounted to sync everything
        resize();

        return () => {
            cancelAnimationFrame(raf.current);
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return <canvas ref={ref} className="bg-particles" aria-hidden />;
}