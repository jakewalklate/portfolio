import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "ISS Satellite Tracker",
  description: "A 3D printed Arduino device that physically points at the International Space Station using stepper motors, GPS, and the SGP4 algorithm.",
};

export default function SatelliteTrackerPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-3xl w-full space-y-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all projects</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20">
              Hardware
            </span>
            <span>•</span>
            <span>Embedded Systems / Space</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            International Space Station (ISS) Tracker
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A 3D printed Arduino device that physically points at the International Space Station in real-time,
            calculating orbital position using GPS coordinates, WiFi connectivity, and the SGP4 propagation algorithm.
          </p>
        </header>

        {/* How It Works */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">How It Works</h2>
          <p className="text-zinc-400 leading-relaxed">
            The tracker combines <strong className="text-zinc-200">orbital mechanics</strong> with
            <strong className="text-zinc-200"> precision motor control</strong> to create a physical pointer
            that follows the ISS across the sky. When the station passes overhead, the device rotates to
            track its position in real-time.
          </p>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🛰️ TLE Data Fetching</h3>
              <p className="text-zinc-400 text-sm">
                The device connects to WiFi and fetches Two-Line Element (TLE) data via HTTP GET requests.
                TLEs contain the orbital parameters needed to predict the ISS position at any given time.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">📍 GPS Location</h3>
              <p className="text-zinc-400 text-sm">
                A GPS module provides the tracker&apos;s precise ground coordinates—latitude, longitude, and
                altitude. This reference point is essential for calculating the relative position of the satellite.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🧮 SGP4 Algorithm</h3>
              <p className="text-zinc-400 text-sm">
                The Simplified General Perturbations 4 (SGP4) algorithm propagates the TLE data to calculate
                the satellite&apos;s position at the current timestamp. It accounts for Earth&apos;s oblateness,
                atmospheric drag, and other orbital perturbations.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">📐 Coordinate Transform</h3>
              <p className="text-zinc-400 text-sm">
                The satellite&apos;s Earth-Centered Inertial (ECI) coordinates are transformed to azimuth and
                elevation angles relative to the observer&apos;s position—the angles needed to point the tracker.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">⚙️ Motor Control</h3>
              <p className="text-zinc-400 text-sm">
                A stepper motor handles azimuth rotation (horizontal sweep) while a servo motor controls
                elevation (vertical tilt). Together they provide smooth, precise pointing across the full sky.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">The Math</h2>
          <p className="text-zinc-400 leading-relaxed">
            SGP4 is the same algorithm used by NORAD to track objects in low Earth orbit. It takes the
            six Keplerian elements encoded in TLE format and propagates them forward in time, accounting
            for gravitational harmonics, solar radiation pressure, and atmospheric drag at low altitudes.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The transformation from satellite position to pointing angles involves converting from
            the ECI reference frame to the topocentric horizon frame centered on the observer—essentially
            answering &quot;where in my sky is this object right now?&quot;
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Hardware Components</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Arduino Microcontroller:</strong> The brain of the operation,
              running the C++ firmware that coordinates all components.
            </li>
            <li>
              <strong className="text-zinc-200">ESP8266/ESP32 WiFi Module:</strong> Enables internet connectivity
              for fetching current TLE data from online APIs.
            </li>
            <li>
              <strong className="text-zinc-200">GPS Module:</strong> Provides precise observer location and
              accurate UTC time for orbital calculations.
            </li>
            <li>
              <strong className="text-zinc-200">Stepper Motor:</strong> High-precision rotation for azimuth
              control with fine angular resolution.
            </li>
            <li>
              <strong className="text-zinc-200">Servo Motor:</strong> Fast, responsive elevation adjustment
              for vertical tracking.
            </li>
            <li>
              <strong className="text-zinc-200">3D Printed Enclosure:</strong> Custom-designed housing for
              all electronics and mechanical components.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">Software Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">C++ / Arduino:</strong> Firmware written in C++ for
              performance-critical orbital calculations on the microcontroller.
            </li>
            <li>
              <strong className="text-zinc-200">SGP4_vallado:</strong> David Vallado&apos;s reference implementation
              of the SGP4 algorithm, ported to C++ by Grady Hillhouse. Based on the companion code for
              &quot;Fundamentals of Astrodynamics and Applications&quot;.
            </li>
            <li>
              <strong className="text-zinc-200">TinyGPS++:</strong> Lightweight GPS parsing library for
              extracting location and UTC time from NMEA sentences.
            </li>
            <li>
              <strong className="text-zinc-200">WiFiS3 + ArduinoJson:</strong> WiFi connectivity for HTTP
              requests and JSON parsing for TLE data from online APIs.
            </li>
            <li>
              <strong className="text-zinc-200">QMC5883LCompass:</strong> Magnetometer driver for compass
              heading calibration and orientation reference.
            </li>
            <li>
              <strong className="text-zinc-200">LiquidCrystal_I2C:</strong> LCD display driver for showing
              satellite position, azimuth, and elevation data.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-sm rounded-full border border-sky-500/20">
              ✓ Completed
            </span>
            <a
              href="https://github.com/jakewalklate/ISS-arduino-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View source →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
