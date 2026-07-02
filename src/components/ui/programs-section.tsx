"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Program = {
  badge: string;
  title: string;
  audience: string;
  duration: string;
  benefits: string[];
  cta: string;
  href: string;
  accent: string;
  softAccent: string;
  icon: "star" | "bolt" | "tools";
};

const programs: Program[] = [
  {
    badge: "Flagship · Grades 6–12",
    title: "International FutureX Fellowship",
    audience: "School & college students, Grades 6–12",
    duration: "36 sessions over 9 months (Online)",
    benefits: [
      "Build and validate a real startup",
      "Pitch to investors at Demo Day",
      "Earn an international certification",
      "Learn through the Harvard Case Method",
      "Grow with an XP-based progress system",
    ],
    cta: "Explore the Fellowship",
    href: "/futurex-fellowship",
    accent: "#9f7b19",
    softAccent: "#fff4d8",
    icon: "star",
  },
  {
    badge: "In-school · All grades",
    title: "AI Scholar Track",
    audience: "Schools and their students (in-school delivery)",
    duration: "Semester-long — 20 sessions",
    benefits: [
      "Build practical AI literacy during school hours",
      "Learn prompt engineering through projects",
      "Understand AI ethics and responsible use",
      "Create a first working AI tool",
      "Present finished work in a student showcase",
    ],
    cta: "Partner with Your School",
    href: "/for-schools",
    accent: "#6629d6",
    softAccent: "#f1e9ff",
    icon: "bolt",
  },
  {
    badge: "Cohort · Age 14+",
    title: "Build With AI",
    audience: "Older students, undergrads, working professionals",
    duration: "8 weekends (16 sessions, online)",
    benefits: [
      "Build 3 useful AI-powered tools",
      "Work with free, no-code platforms",
      "Follow a guided 8-weekend build plan",
      "Improve through mentor and peer feedback",
      "Present finished tools at Demo Day",
    ],
    cta: "Join the Next Cohort",
    href: "/products",
    accent: "#16804b",
    softAccent: "#e4f4eb",
    icon: "tools",
  },
];

function ProgramIcon({ icon }: { icon: Program["icon"] }) {
  if (icon === "bolt") {
    return (
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path
          d="M18.8 2 7.5 17h8.1l-2.4 13L24.5 14.7h-8.1L18.8 2Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (icon === "tools") {
    return (
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path
          d="m18.3 10.8 2.9-2.9-.6-3.4 3.4-1.2 3.1 3.1-1.2 3.4-3.4-.6-2.9 2.9M14.2 14.2 4 24.4V28h3.6l10.2-10.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m11.2 18.8-6.7-6.7A5.5 5.5 0 0 1 3.9 6l4 4 2.2-2.2-4-4a5.5 5.5 0 0 1 6.1.6l6.6 6.6M18 18l10 10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
      <path
        d="m16 2.8 3.3 9.4 9.9.2-7.9 6 2.9 9.5-8.2-5.6-8.2 5.6 2.9-9.5-7.9-6 9.9-.2L16 2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProgramsScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    const geometries = [
      new THREE.IcosahedronGeometry(0.86, 1),
      new THREE.TorusKnotGeometry(0.58, 0.16, 90, 12),
      new THREE.OctahedronGeometry(0.9, 1),
    ];
    const colors = [0xd2ac31, 0x6a2cdb, 0x16804b];
    const xPositions = [-3.6, 0, 3.6];
    const meshes: THREE.Mesh[] = [];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: colors[index],
        emissive: colors[index],
        emissiveIntensity: 0.08,
        metalness: 0.08,
        roughness: 0.3,
        transparent: true,
        opacity: 0.26,
        wireframe: index !== 1,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(xPositions[index], index === 1 ? 0.3 : -0.15, -1);
      mesh.rotation.set(index * 0.4, index * 0.7, 0);
      world.add(mesh);
      meshes.push(mesh);
    });

    const particleCount = 130;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const palette = colors.map((color) => new THREE.Color(color));

    for (let index = 0; index < particleCount; index += 1) {
      const positionIndex = index * 3;
      particlePositions[positionIndex] = (Math.random() - 0.5) * 11;
      particlePositions[positionIndex + 1] = (Math.random() - 0.5) * 5.5;
      particlePositions[positionIndex + 2] = (Math.random() - 0.5) * 3;

      const color = palette[index % palette.length];
      particleColors[positionIndex] = color.r;
      particleColors[positionIndex + 1] = color.g;
      particleColors[positionIndex + 2] = color.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    world.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(2, 4, 5);
    scene.add(ambientLight, keyLight);

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      pointerTarget.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerTarget.y =
        -((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      pointer.lerp(pointerTarget, 0.035);
      world.rotation.y = pointer.x * 0.09;
      world.rotation.x = pointer.y * 0.05;

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.0015 + index * 0.0003;
        mesh.rotation.y += 0.002 + index * 0.00035;
        mesh.position.y +=
          Math.sin(elapsed * 0.65 + index * 1.7) * 0.0009;
      });
      particles.rotation.y = elapsed * 0.012;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    window.addEventListener("pointermove", onPointerMove);

    if (prefersReducedMotion.matches) {
      renderer.render(scene, camera);
    } else {
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      geometries.forEach((geometry) => geometry.dispose());
      meshes.forEach((mesh) => {
        (mesh.material as THREE.Material).dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 opacity-75"
      aria-hidden="true"
    />
  );
}

export function ProgramsSection() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[#e3e8df] bg-[#f7faf5] px-5 py-24 sm:px-8 lg:px-14 lg:py-28">
      <div
        className="absolute inset-0 opacity-45"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21,52,39,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(21,52,39,.055) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 36%, transparent 70%, black)",
        }}
      />
      <div
        className="absolute left-1/2 top-8 h-72 w-[78%] -translate-x-1/2 rounded-full bg-white/90 blur-3xl"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-[430px]" aria-hidden="true">
        <ProgramsScene />
      </div>

      <div className="relative mx-auto max-w-[1380px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.24em] text-[#16804b]">
            Our Programs
          </p>
          <h2 className="mt-5 text-[38px] font-black leading-[1.04] tracking-[-0.04em] text-[#10271e] sm:text-[54px] lg:text-[68px]">
            Three paths. One mission:{" "}
            <span className="relative whitespace-nowrap text-[#6629d6]">
              build, don&apos;t just learn.
              <span
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#c9f45b]"
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-7 text-[#53645d] sm:text-[19px]">
            Every program is project-led. No passive lectures — your child ships
            something real.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#dce4de] bg-white/95 shadow-[0_18px_55px_rgba(31,56,44,0.09)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(31,56,44,0.16)] lg:min-h-[820px]"
            >
              <div className="relative flex flex-col p-7 sm:p-9 lg:min-h-[350px]">
                <div
                  className="absolute -right-20 -top-20 size-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundColor: program.softAccent }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div
                    className="grid size-16 shrink-0 place-items-center rounded-[20px] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                    style={{
                      color: program.accent,
                      backgroundColor: program.softAccent,
                    }}
                  >
                    <ProgramIcon icon={program.icon} />
                  </div>
                  <span
                    className="inline-flex rounded-full px-4 py-2 text-right text-[11px] font-black uppercase tracking-[0.08em] sm:text-[12px]"
                    style={{
                      color: program.accent,
                      backgroundColor: program.softAccent,
                    }}
                  >
                    {program.badge}
                  </span>
                </div>

                <h3 className="relative mt-8 text-[31px] font-black leading-[1.08] tracking-[-0.035em] text-[#10271e] sm:text-[35px]">
                  {program.title}
                </h3>

                <div className="relative mt-7 space-y-4 text-[16px] leading-7 text-[#5a6a63]">
                  <p>
                    <strong className="font-black text-[#173027]">For: </strong>
                    {program.audience}
                  </p>
                  <p>
                    <strong className="font-black text-[#173027]">
                      Duration:{" "}
                    </strong>
                    {program.duration}
                  </p>
                </div>

              </div>

              <div className="relative flex flex-1 flex-col border-t border-[#dfe5e1] bg-[#fbfcfb] p-7 sm:p-9">
                <h4 className="text-[17px] font-black text-[#173027]">
                  Program benefits:
                </h4>
                <ul className="mt-5 space-y-4">
                  {program.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="grid grid-cols-[auto_1fr] gap-3 text-[15px] leading-6 text-[#4e5e57] sm:text-[16px]"
                    >
                      <span
                        className="mt-0.5 grid size-5 place-items-center rounded-full text-[12px] font-black"
                        style={{
                          color: program.accent,
                          backgroundColor: program.softAccent,
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={program.href}
                  className="relative mt-8 flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#10271e] px-5 py-4 text-center text-[16px] font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(16,39,30,0.22)] lg:mt-auto lg:pt-4"
                >
                  {program.cta}
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
