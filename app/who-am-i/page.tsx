import { MapPin, X, Brain, Activity, Hammer, Search } from "lucide-react";
import Time from "./time";

export default function WhoAmIPage() {
  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-3xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Who Am I?
          </h1>
          <h2 className="text-2xl text-zinc-400/80 font-medium mb-2">
            Redbull Enthusiast
          </h2>
          {/* <p className="text-zinc-500/90 mb-2 mt-1">Generation Z</p> */}
          <p className="text-zinc-700"><MapPin className="inline -mt-[3px]" size={16} /> Sydney, Australia (Current Time: <Time />)</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none -mt-6">
          <p className="text-lg text-zinc-400 leading-relaxed">
            I am a multidisciplinary engineer operating at the intersection of biological systems and digital technology.
            My work focuses on leveraging software engineering principles to solve complex problems in synthetic biology and healthcare.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed mt-4">
            With a background in both life sciences and computer science, I bridge the gap between laboratory experimentation and computational analysis.
            I build tools that accelerate research, optimize workflows, and visualize complex data.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400">
            <div>
              <div className="text-white font-medium mb-3 text-lg">Biotech & Engineering</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Synthetic Biology & Genetics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Pharmacology & Microbiology</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Lab Automation & Robotics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Mechatronics Systems</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Biomedical Instrumentation</li>
              </ul>
            </div>
            <div>
              <div className="text-white font-medium mb-3 text-lg">Software & AI</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Full Stack & Mobile (Flutter, Next.js, TypeScript)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Machine Learning (KNIME, Python)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cloud (AWS, Azure, GCP)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cybersecurity & Privacy</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Rust & C# Programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Associate Member</h4>
              <p className="text-xs text-zinc-500 mt-1">Engineers Australia</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Machine Learning & AI Foundations</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn / KNIME</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Python Data Analysis</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Cloud Platform for Developers</h4>
              <p className="text-xs text-zinc-500 mt-1">AWS, Azure, GCP</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">CompTIA A+ (Physical Networking)</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-medium">Rapid Prototyping for Product Design</h4>
              <p className="text-xs text-zinc-500 mt-1">LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Education
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">University of Technology Sydney</h4>
                <div className="text-zinc-400">Bachelor of Engineering (Honours)</div>
                <div className="text-zinc-400">Bachelor of Medical Science</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm text-right sm:text-left">
                Double Degree
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">TAFE NSW</h4>
                <div className="text-zinc-400">4x Certificates in Information Technology</div>
                <p className="text-sm text-zinc-500 mt-1">
                  Specializing in Web Development, Database Design, and Network Security.
                </p>
              </div>
              <div className="text-zinc-500 font-mono text-sm text-right sm:text-left">
                Trade School
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full overflow-hidden">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            On Rotation
          </h3>
          <div className="relative w-full flex overflow-hidden mask-linear-fade">
            <div className="flex animate-scroll gap-6 w-max">
              {/* Duplicated list for infinite scroll */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 shrink-0">
                  {[
                    { title: "Frogstomp", artist: "Silverchair", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/4b/07/d54b073a-6422-3486-7545-557c5282a5ec/886445059557.jpg/500x500bb.jpg" },
                    { title: "Hyperview", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/11/3e/d2113e48-6044-cbd8-132a-1d8225ba5877/artwork.jpg/500x500bb.jpg" },
                    { title: "Promise Everything", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2e/b5/fa/2eb5fa18-7752-ef1d-217d-0c54bc910a58/075679900203.jpg/500x500bb.jpg" },
                    { title: "Illmatic", artist: "Nas", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b9/eb/cc/b9ebccbc-5ba4-2cdb-5332-b065739abd9a/886444567619.jpg/500x500bb.jpg" },
                    { title: "Shed", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/15/6a/07/156a071f-fa4d-8b2f-f9c0-455ca3f45be2/550.jpg/500x500bb.jpg" },
                    { title: "Beside Myself", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/48/4c/8f/484c8f94-7a50-cf86-8579-97a88ebb731e/075679868466.jpg/500x500bb.jpg" },
                    { title: "Feel Something", artist: "Movements", cover: "/feelsomething.jpeg" },
                    { title: "Youth", artist: "Citizen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8a/f1/cf/8af1cfd9-b305-facd-b0e0-859b8c1a4a2b/cover.jpg/500x500bb.jpg" },
                    { title: "As You Please", artist: "Citizen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bd/76/21/bd76213c-c50c-2a2e-6589-9edf7af5c7cd/cover.jpg/500x500bb.jpg" },
                    { title: "Peripheral Vision", artist: "Turnover", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/e8/2c/a1e82cf2-c8b0-e81a-d067-dc5134d47843/52677.jpg/500x500bb.jpg" },
                    { title: "Colourmeinkindness", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/14/ac/7b/14ac7b28-e4ae-1ab8-63b7-17c9b47b678a/43554.jpg/500x500bb.jpg" },
                    { title: "The Premier Hussle", artist: "Nipsey Hussle", cover: "/premier-hussle.jpg" },
                    { title: "Nonstop Feeling", artist: "Turnstile", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e7/f9/2b/e7f92b2e-02e6-12b3-ff09-846edb758563/016861748005.jpg/500x500bb.jpg" },
                    { title: "36 Chambers", artist: "Wu-Tang Clan", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/20/1f/8c201f03-7617-2d8b-3d8d-e0ba2d55041b/196872123784.jpg/500x500bb.jpg" },
                    { title: "I Wish I Could Stay Here", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/55/43/26/554326c2-4ffc-de4b-2390-b6f93305bcf6/cover.jpg/500x500bb.jpg" },
                    { title: "The Things We Think We're Missing", artist: "Balance and Composure", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/fd/c4/e1fdc4ae-8eb8-b2dc-b88a-33c29a65bea4/2049.jpg/500x500bb.jpg" },
                    { title: "Light We Made", artist: "Balance and Composure", cover: "/lightwemade.jpg" },
                    { title: "Separation", artist: "Balance and Composure", cover: "/separation.jpg" },
                    { title: "Dear G-D...", artist: "Being As An Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/d5/88/06d5884e-9336-8847-8d52-f4786a36065b/cover.jpg/500x500bb.jpg" },
                    { title: "Wildlife", artist: "La Dispute", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2f/17/b9/2f17b94d-78d1-a388-5a4e-03b9266dbc23/603111932125.png/500x500bb.jpg" },
                    { title: "Songs to Scream at the Sun", artist: "Have Heart", cover: "/songstoscream.jpg" },
                    { title: "Floral Green", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/53/24/a3532431-4b69-580b-3e75-aefd9db39ae6/451.jpg/500x500bb.jpg" },
                    { title: "amo", artist: "Bring Me The Horizon", cover: "/bmthamo.jpeg" },
                    { title: "Parachutes", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/500x500bb.jpg" },
                    { title: "How We Both Wondrously Perish", artist: "Being As An Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6a/7c/83/6a7c83b4-8881-93f1-913b-c594ceabb821/856658003814.jpg/500x500bb.jpg" },
                    { title: "Come Over When You're Sober, Pt. 1", artist: "Lil Peep", cover: "/peeppt1.jpg" },
                    { title: "Come Over When You're Sober, Pt. 2", artist: "Lil Peep", cover: "/peeppt2.jpg" },
                    { title: "Hybrid Theory", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/53/a7/7f/53a77fab-c54c-a57b-8130-248fc12d0c80/093624948995.jpg/500x500bb.jpg" },
                    { title: "Faces", artist: "Mac Miller", cover: "/macfaces.jpg" },
                    { title: "Best Buds", artist: "Mom Jeans", cover: "/bestbuds.jpg" },
                    { title: "Grown Man Biz", artist: "Scotty Hinds", cover: "/scottyhinds.jpg" },
                  ].map((album, j) => (
                    <div key={j} className="w-48 space-y-3 group shrink-0">
                      <div className={`aspect-square w-full rounded-lg bg-zinc-900 overflow-hidden relative flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors`}>
                        {album.cover ? (
                          <img src={album.cover} alt={album.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <div className="text-center p-4">
                            <div className="text-xs text-zinc-600 font-bold uppercase tracking-widest">{album.artist}</div>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm truncate" title={album.title}>{album.title}</div>
                        <div className="text-zinc-500 text-xs truncate" title={album.artist}>{album.artist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Background
          </h3>
          <div className="prose prose-invert prose-zinc leading-relaxed text-zinc-400">
            <p>
              I've always been into video games and skateboarding. As a teenager, that was my world. I also studied Art and Modern History in high school because I've always been interested in that sort of art and culture.
            </p>
            <br />
            <p>
              Later, I was sent to a game development academy by my school. That was a cool moment for me, and it's where I started to see how I could combine my interests with education.
            </p>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Where I'm From
          </h3>
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 relative grayscale invert contrast-125 brightness-75">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Terrigal%20Beach%20Australia&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Reading List
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "The Holy Bible", author: "New International Version", note: "Stories to introduce you to human nature.", cover: "/bible.jpg" },
              { title: "Animal Farm", author: "George Orwell", note: "A story about the betrayal of the revolution.", cover: "/animalfarm.jpg" },
              { title: "Dhammapada", author: "Buddha", note: "The Buddhist scripture that teaches you about the path to enlightenment.", cover: "/buddah.jpg" },
              { title: "Maps of Meaning", author: "Jordan Peterson", note: "The architecture of meaning in human culture.", cover: "/mapsofmeaning.jpg" }
            ].map((book, i) => (
              <div key={i} className="group flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
                <div className="shrink-0 w-16 h-24 bg-zinc-800 rounded overflow-hidden shadow-sm">
                  {book.cover && <img src={book.cover} alt={book.title} className="w-full h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity" />}
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{book.title}</h4>
                  <div className="text-zinc-500 text-sm mb-2">{book.author}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">"{book.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            On Weekends
          </h3>
          <div className="flex flex-col md:flex-row ">
            <div className="flex-row md:flex-col flex justify-center md:justify-normal">
              <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512" xmlSpace="preserve" className="fill-zinc-500 opacity-50 size-48">
                <g>
                  <path className="st0" d="M275.076,93.952c2.991-24.117-14.126-46.108-38.252-49.108c-24.126-3-46.107,14.117-49.107,38.252
		c-3,24.126,14.126,46.108,38.256,49.107C250.085,135.195,272.076,118.078,275.076,93.952z"/>
                  <path className="st0" d="M384.588,229.743c-20.572-32.927-36.882-70.296-41.076-77.557c-2.487-4.316-2.73-7.361-0.78-11.622
		c8.4-12.144,16.991-24.197,25.685-36.125c7.54-10.352,18.319-21.802,14.202-35.9c-2.364-8.108-9.541-11.486-15.604-16.424
		c-15.23-12.441-30.414-24.982-45.742-37.333c-4.292-3.45-8.436-7.08-12.783-10.45c-7.068-6.288-17.897-5.658-24.18,1.424
		c-5.297,5.964-5.617,14.576-1.361,20.9L266.932,43.34c3.928,3.1,7.446,6.658,10.436,10.648l15.987-16.648l40.324,39.126
		l-31.878,33.954c-17.613,17.252-59.472,42.072-49.891,77.035c7.302,26.648,32.418,72.404,32.418,85.323
		c0,17.892-9.81,108.287-9.81,108.287c-0.064,0.352-0.081,0.703-0.126,1.063l-28.396,98.143c-3.225,10.612,2.775,21.838,13.4,25.054
		c10.617,3.225,21.842-2.766,25.063-13.396l34.162-90.873c0.473-1.054,0.892-2.153,1.225-3.297l0.37-0.982
		c0.518-1.721,18.468-86.8,18.468-86.8l0.798-7.91l-8.586,85.324c-0.248,1.504-0.41,3.027-0.41,4.613l4.207,97.665
		c0,12.333,9.991,22.333,22.324,22.333c12.33,0,22.333-10,22.333-22.333l5.77-94.134l13.792-86.927
		C401.889,281.768,405.155,262.67,384.588,229.743z"/>
                  <path className="st0" d="M187.676,125.879l-73.224,76.242c-3.734,3.901-4.631,9.712-2.239,14.55l18.554,37.531
		c1.464,2.991,4.162,5.171,7.379,6.036c3.216,0.847,6.64,0.279,9.396-1.586l13.936-9.397c2.753-1.864,4.568-4.819,4.987-8.117
		c0.419-3.297-0.608-6.612-2.815-9.099l-24.972-33.594l60.035-62.53C194.64,133.104,190.951,129.717,187.676,125.879z"/>
                </g>
              </svg>
            </div>
            <div className="flex-row md:flex-col flex justify-center px-8 mt-4 md:mt-0">
              <p className="text-zinc-400 leading-relaxed text-center">
                On weekends, you'll likely find me playing golf. Don't expect me to be any good at it though, I embarrass the sport with my swings.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Personal Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Prototyping - Large Tile */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Workshop Prototyping</h4>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
                  There is a satisfaction in bringing ideas into the physical world. Whether it's crafting with timber or fabricating with 3D additive manufacturing, I love the feedback loop that comes from rapid prototyping.
                </p>
              </div>
            </div>

            {/* Psychology - Standard Tile */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 h-full flex flex-col">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Human OS</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  I am captivated by the source code of human behavior.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] md:text-xs text-purple-400 font-mono">
                    <span>import </span>
                    <span>EVOLUTIONARY_PSYCH</span>
                    <span>//</span>
                    <span>ANALYTICAL_PSYCH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Source - Standard Tile */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 relative">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Open Source</h4>
                <p className="text-zinc-400 leading-relaxed">
                  I believe software is at it's best when it is transparent, accessible, and community-driven.
                </p>
              </div>
            </div>

            {/* Cars - Standard Tile */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 relative">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">JDM Culture</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Japanese engineering from the 90s represents a golden era of mechanical harmony and style.
                </p>
              </div>
            </div>

            {/* Defense - Standard Tile */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 relative">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Military</h4>
                <p className="text-zinc-400 leading-relaxed">
                  I'm fascinated by the macro-scale systems and bravery that enables the evolution and protection of our culture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Favourite Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 container mx-auto">
            {[
              "Next.js",
              "tRPC",
              "Supabase",
              "TailwindCSS",
              "Apple Silicon",
              "Prisma.io",
              "Neural Networks",
              "Capacitor.js"
            ].map((tech, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors flex items-center justify-center text-center">
                <span className="text-zinc-400 font-medium cursor-default">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Things I Don't Like
          </h3>
          <ul className="list-inside space-y-2">
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Expensive food</li>
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Difficult English spelling</li>
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Riding buses</li>
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Loans and compound interest</li>
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Crowded elevators</li>
          </ul>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Favourite TV Series
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Silicon Valley", network: "HBO", cover: "/silicon-valley.jpg" },
              { title: "Mr. Robot", network: "USA Network", cover: "/mrrobot.jpg" },
              { title: "Dopesick", network: "Hulu", cover: "/dopesick.jpg" },
              { title: "Therapy or Torture", network: "CCHR", cover: "/therapyortorture.jpg" },
              { title: "Trainspotting", network: "Channel Four Films", cover: "/trainspotting.jpg" },
              { title: "Citizen Four", network: "Doc Society", cover: "/snowden.jpg" }
            ].map((show, i) => (
              <div key={i} className="group flex flex-col gap-3">
                <div className="aspect-2/3 w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors relative flex items-center justify-center">
                  {show.cover ? (
                    <img src={show.cover} alt={show.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity bg-zinc-900" />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center px-4 text-center ${show.cover ? 'hidden' : ''}`}>
                    <span className="text-zinc-500 font-medium">{show.title}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{show.title}</h4>
                  <div className="text-zinc-500 text-sm">{show.network}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Core Values & Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Brain size={20} />
                </div>
                <h4 className="text-white font-medium">Intentionality</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Right thought precedes right action. Strategy is the precursor to execution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <Activity size={20} />
                </div>
                <h4 className="text-white font-medium">Pragmatism</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Perfection is only an idea, don't let it consume you. Ship, iterate, test and improve.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Hammer size={20} />
                </div>
                <h4 className="text-white font-medium">Craftsmanship</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The tools we choose shape our output. Don't reinvent the wheel. Build on others expertise to produce quality.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Search size={20} />
                </div>
                <h4 className="text-white font-medium">Precision</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Assumptions can often cause conflict. Prioritise precision in communication and code.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Photo Album
          </h3>
          <div className="space-y-4">
            <div className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 group relative">
              <img src="/selfies/2.JPG" alt="Life moment" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 -mt-28 sm:-mt-36 md:-mt-44" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-mono">2023</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: "/selfies/a.png", year: "2024" },
                { src: "/selfies/3.jpeg", year: "2024" },
                { src: "/selfies/4.JPG", year: "2023" },
              ].map((photo, i) => (
                <div key={i} className="aspect-3/4 rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 group relative">
                  <img src={photo.src} alt="Life moment" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-mono">{photo.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Current Hardware
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Macbook Pro (2020) [M1]",
              "Keychron K1 (Red Switches)",
              "Anycubic Kobra S1",
              "TS80P Soldering Iron",
              "Uni-T UT210E Multimeter",
              "VINCA DCLA-0805 Calipers",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between group">
                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">{item}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-green-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Gaming Hall of Fame
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "GTA San Andreas", subtitle: "Rockstar", cover: "/gta-sa.jpg" },
              { title: "Counter Strike Source", subtitle: "Valve", cover: "/css.jpg" },
              { title: "Deus Ex: Human Revolution", subtitle: "Eidos-Montréal", cover: "/deusex.jpg" },
              { title: "Saints Row The Third", subtitle: "Volition", cover: "/saintsrow.jpg" },
              { title: "Portal", subtitle: "Valve", cover: "/portal.jpg" },
              { title: "Half-Life 2", subtitle: "Valve", cover: "/halflife.jpg" },
              { title: "Borderlands", subtitle: "Gearbox", cover: "/borderlands.png" },
              { title: "Need for Speed: Most Wanted", subtitle: "EA", cover: "/nfsmw.png" },
              { title: "Tony Hawk's Underground", subtitle: "Neversoft", cover: "/thug.jpg" },
              { title: "Assassin's Creed Revelations", subtitle: "Ubisoft", cover: "/acr.jpg" },
              { title: "Guild Wars 2", subtitle: "NCSoft", cover: "/gw2.png" },
              { title: "Pokemon Emerald Version", subtitle: "Nintendo", cover: "/emerald.jpg" },
            ].map((game, i) => (
              <div key={i} className="group flex flex-col gap-3">
                <div className="aspect-2/3 w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors relative flex items-center justify-center">
                  <img src={game.cover} alt={game.title} className="w-full h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity bg-zinc-900" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors truncate">{game.title}</h4>
                  <div className="text-zinc-500 text-sm truncate">{game.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Worldview & Goals
          </h3>
          <div className="space-y-4">
            <div className="relative rounded-lg border border-white/20 hover:border-white/25 overflow-hidden group">
              <img src="/banner.png" alt="Banner" className="w-full h-auto group-hover:blur-[1px] transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-white max-sm:text-sm text-xl font-medium text-center bg-black/20 px-6 py-3 rounded-md backdrop-blur-[3px] group-hover:backdrop-blur-[5px] transition-all duration-500">
                  Technological and moral progress — owing to tradition.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Long-Term Roadmap
          </h3>
          <div className="relative">
            <div className="space-y-0">
              {/* Step 1: Undergraduate */}
              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500">
                    <span className="text-blue-400 font-bold text-sm">1</span>
                  </div>
                  {/* Line to next step */}
                  <div className="w-px flex-1 bg-gradient-to-b from-blue-500 to-green-500 opacity-50" />
                </div>
                <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-blue-500/30 hover:border-blue-500/50 transition-colors mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10">NOW</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Undergraduate Studies</h4>
                  <p className="text-sm text-zinc-400">Completing dual degrees in Engineering (Honours) and Medical Science at UTS.</p>
                </div>
              </div>

              {/* Step 2: Engineering Employment */}
              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500/50">
                    <span className="text-green-400/70 font-bold text-sm">2</span>
                  </div>
                  {/* Line to next step */}
                  <div className="w-px flex-1 bg-gradient-to-b from-green-500 to-purple-500 opacity-50" />
                </div>
                <div className="flex-1 p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-green-500/30 transition-colors mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-green-400/70 px-2 py-0.5 rounded-full bg-green-500/10">NEXT</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Part Time Engineering Employment</h4>
                  <p className="text-sm text-zinc-400">Seeking a software engineering role while completing my undergraduate studies — building systems that accelerate technological progress or have value to consumers.</p>
                </div>
              </div>

              {/* Step 3: Part-time PhD */}
              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500/30">
                    <span className="text-purple-400/70 font-bold text-sm">3</span>
                  </div>
                  {/* Line with arrow */}
                  <div className="w-px flex-1 bg-purple-500 opacity-50" />
                  <div className="text-purple-500 opacity-50 -mt-0.5 leading-none">▼</div>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-purple-400/70 px-2 py-0.5 rounded-full bg-purple-500/10">FUTURE</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Part-Time PhD</h4>
                  <p className="text-sm text-zinc-400">Post-graduation, pursuing advanced research in biotech, neuroscience, computational neurobiology, or psychology while continuing industry work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Growth Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Future Investigations Column */}
            <div className="rounded-xl bg-zinc-900/30 border border-white/15 overflow-hidden">
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/20">
                <h4 className="text-amber-400 font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Future Investigations
                </h4>
              </div>
              <div className="p-3 space-y-2">
                {[
                  { title: "Rust for embedded systems programming", tag: "Language" },
                  { title: "Computational neurobiology", tag: "Research" },
                  { title: "WebAssembly", tag: "Web" },
                  { title: "Go for asynchronous scripting", tag: "Language" },
                ].map((card, i) => (
                  <div key={i} className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 hover:border-amber-500/30 transition-colors group cursor-default">
                    <div className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">{card.title}</div>
                    <div className="text-xs text-zinc-500 mt-1">{card.tag}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons Learnt Column */}
            <div className="rounded-xl bg-zinc-900/30 border border-white/15 overflow-hidden">
              <div className="px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Lessons Learnt
                </h4>
              </div>
              <div className="p-3 space-y-2">
                {[
                  { title: "Focus on MVP before features", tag: "Practice" },
                  { title: "Simple solutions outlast clever ones", tag: "Philosophy" },
                  { title: "Plan for the UX before coding", tag: "Practice" },
                  { title: "Listen to developer market feedback", tag: "Practice" },
                ].map((card, i) => (
                  <div key={i} className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 hover:border-emerald-500/30 transition-colors group cursor-default">
                    <div className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">{card.title}</div>
                    <div className="text-xs text-zinc-500 mt-1">{card.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            My Development Loop
          </h3>
          <div className="relative">
            {/* Loop container */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 ">
              {[
                { emoji: "🥤", label: "Redbull", color: "text-red-400" },
                { emoji: "🧠", label: "Hyperfocus", color: "text-purple-400" },
                { emoji: "🧑‍💻", label: "Code", color: "text-blue-400" },
                { emoji: "😤", label: "Debug", color: "text-orange-400" },
                { emoji: "🚀", label: "Deploy", color: "text-green-400" },
                { emoji: "💤", label: "Rest @ 3am", color: "text-zinc-400" },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex flex-col items-center group">
                    <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform cursor-default">{step.emoji}</span>
                    <span className={`text-[10px] sm:text-xs font-mono mt-1 ${step.color}`}>{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-zinc-600 text-lg">→</span>
                  )}
                </div>
              ))}
              {/* Loop back arrow */}
              <span className="text-zinc-600 text-2xl">↺</span>
            </div>
            {/* Subtitle */}
            <p className="text-center text-zinc-500 text-sm mt-4 italic">
              "I'll just make one small change.." — Me, every night
            </p>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Endgame
          </h3>
          <p className="text-zinc-500 text-sm -mt-4">
            Goals that live in the back of my mind — things I'd love to build before I'm gone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Youth Center Card */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-white/10 hover:border-amber-500/30 transition-all overflow-hidden">
              {/* Blueprint grid pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">💡</div>
                  <span className="text-[10px] font-mono text-amber-400/60 px-2 py-1 rounded-full border border-amber-400/20 bg-amber-400/5">
                    VISION
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Cultural Youth Center
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    An all-ages non-profit venue and weekend sanctuary for young people on the Central Coast. A place for live shows, creativity, and community — the space I wish existed when I was growing up.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                    Central Coast, NSW
                  </span>
                </div>
              </div>
            </div>

            {/* Stanley University Card */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all overflow-hidden">
              {/* Blueprint grid pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
              <a href="https://stanleyuni.github.io" target="_blank">
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <img src="/Shield-S.png" alt="Stanley University" className="w-8 h-10" />
                    <span className="text-[10px] font-mono text-blue-400/60 px-2 py-1 rounded-full border border-blue-400/20 bg-blue-400/5">
                      VISION
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Stanley University
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      A contribution to higher education access on the Central Coast — named after my university maths professor. Bridging the gap for a region underserved by tertiary opportunities.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      Central Coast, NSW
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Honest Admissions
          </h3>

          <div className="space-y-6">
            {/* Unpopular Opinions */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                <span>🔥</span> Unpopular Opinions
              </h4>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-red-500/20 hover:border-red-500/30 transition-colors">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  I think crypto is useless.
                </p>
              </div>
            </div>

            {/* Things I've Accepted */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                <span>🪞</span> Things I've Accepted About Myself
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-zinc-500/30 transition-colors">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    I'm emotionally neutral in a lot of my expression — this sometimes upsets people who want more visible enthusiasm. It's nothing personal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-zinc-500/30 transition-colors">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    I'd rather do something myself than ask others. Delegation isn't my strong suit — I just don't like bothering people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Straight Edge
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* X Symbol */}
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900/50 border border-white/10 shrink-0 my-auto max-sm:mx-auto">
              <span className="text-4xl font-black text-white">X</span>
            </div>
            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap max-sm:justify-center">
                <span className="text-xs font-mono text-zinc-500 px-2 py-1 rounded-full border border-zinc-700 bg-zinc-800/50">
                  Since August 2019
                </span>
                <span className="text-xs font-mono text-zinc-500 px-2 py-1 rounded-full border border-zinc-700 bg-zinc-800/50">
                  Hardcore / Punk Subculture
                </span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Straight edge is a subculture of hardcore punk that celebrates sobriety from drugs and alcohol. I made the decision to join the straight edge community in 2019 and very rarely — practically never — drink alcohol.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                This decision was influenced by one of my favourite skateboarders <a href="https://www.instagram.com/dale_do/" className="text-blue-400 hover:underline" target="_blank">Dale Decker</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Editor Preferences
          </h3>
          <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#252526] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-xs font-mono text-zinc-500">Visual Studio Code — excellence.ts (Dark Mode)</span>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs md:text-sm sm:text-base leading-relaxed overflow-x-auto">
              <div className="text-blue-400">
                <span className="text-purple-400">function</span> <span className="text-yellow-200">createExcellence</span>(<span className="text-blue-300">isReady</span><span className="text-white">:</span>&nbsp;<span className="text-emerald-400">boolean</span>) <span className="text-white relative group cursor-default">
                  {'{'}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded border border-white/10 max-md:hidden opacity-60 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Same-line brace (1TBS)
                  </div>
                </span>
              </div>
              <div className="relative group cursor-default w-fit">
                {/* <div className="absolute left-0 top-0 bottom-0 w-4 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                <span className="text-purple-400 pl-4">if</span> (<span className="text-blue-300">isReady</span>) {'{'}
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded border border-white/10 max-md:hidden opacity-60 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Two space indentation
                </div>
              </div>
              <div>
                <span className="text-purple-400 pl-8">return</span> <span className="text-yellow-200">shipIt</span>();
              </div>
              <div className="text-white">&nbsp;&nbsp;{'}'}</div>
              <div className="text-white">{'}'}</div>
            </div>
          </div>

          <div className="mx-3 bg-zinc-800 -mt-2 text-zinc-300 text-xs px-2 py-1 rounded border border-white/10 md:hidden group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Same-line brace (1TBS)
          </div>

          <div className="mx-3 bg-zinc-800 -mt-6 text-zinc-300 text-xs px-2 py-1 rounded border border-white/10 md:hidden group-hover:opacity-100  transition-opacity whitespace-nowrap pointer-events-none z-10">
            Two space indentation
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Enjoyment vs Stressors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dopamine */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Activity size={20} />
                </div>
                <h4 className="text-white font-medium">Dopamine Sources<sup className="text-blue-500">&nbsp;++</sup></h4>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Novelty & Big Ideas", width: "95%" },
                  { label: "Shopping", width: "90%" },
                  { label: "Creative Freedom", width: "95%" },
                  { label: "Relaxing Beach Days", width: "70%" },
                  { label: "Talented Mentorship", width: "85%" },
                  { label: "Upgrading Systems", width: "100%" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">{item.label}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors rounded-full" style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cortisol */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <Activity size={20} />
                </div>
                <h4 className="text-white font-medium">Cortisol Triggers<sup className="text-red-500">&nbsp;--</sup></h4>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Micromanagement", width: "100%" },
                  { label: "Repetitive Routine", width: "95%" },
                  { label: "Inauthenticity", width: "90%" },
                  { label: "Rigid Bureaucracy", width: "85%" },
                  { label: "Undervalued Contributions", width: "95%" },
                  { label: "Early Mornings", width: "98%" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400 group-hover:text-red-400 transition-colors">{item.label}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500/50 group-hover:bg-red-400 transition-colors rounded-full" style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            User Manual
          </h3>
          <div className="rounded-xl overflow-hidden bg-zinc-900/80 border border-[#30363d] shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-[#30363d]">
              <div className="flex items-center gap-2">
                <div className="text-[#8b949e]">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor" className="octicon octicon-book">
                    <path d="M0 0h16v16H0z" fill="none"></path>
                    <path d="M0 4.25v7.25a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75V2.75l-4-1V4.25zm.75 8v-.039l3.25-.813V2.41L.75 3.22V12.25zM12 2.75v8.75a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75V4.25l-4-1V2.75zm3.25 9.5h-2.5V3.387l3.25.813V12.25zM5.5 2.5l5 1.25v9.5l-5-1.25V2.5z"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#c9d1d9] font-mono">README.md</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              <div className="text-sm text-zinc-400 mb-3 -mt-2">Software revision: v{(new Date().getFullYear() - 1997).toString()}.0.0</div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2">
                  Strong Opinions, Loosely Held
                </h4>
                <div className="pl-4 border-l-4 border-[#30363d] text-[#8b949e] py-1 italic">
                  I value new information above my own ego.
                </div>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  I view ideas as hypotheses to be tested, not identities to be defended. If evidence proves me wrong, I try to pivot immediately.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2">
                  Learning: First Principles
                </h4>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  I hate memorizing; I want to understand the <em>why</em>. Whether it's a new framework or a biological pathway, I want to be able to tear it down to its fundamental truths and be able to build it back up.
                  <br /><br />
                  <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#a5d6ff] text-xs">Why? &gt; How?</code>
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-[#c9d1d9] border-b border-[#30363d] pb-2">
                  Psychological Safety
                </h4>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  I believe the best insights begin when it is safe to say "I don't know". I am patient with questions and flexible with mistakes, provided we learn from them. I optimize for team trust, not just individual code velocity.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Favourite Problems
          </h3>
          <p className="text-zinc-500 text-sm -mt-4">
            The open questions that I carry around in my head.
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-rose-500/30 transition-colors group">
              <div className="flex items-start gap-4">
                <span className="text-2xl pt-1">⚖️</span>
                <div>
                  <h4 className="text-lg font-serif text-white/90 italic leading-relaxed mb-3">
                    "What sort of constitutional checks and balances should a people have that balances freedom with responsibility, and creativity with preservation?"
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50"></span>
                    Governance & Society
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-sky-500/30 transition-colors group">
              <div className="flex items-start gap-4">
                <span className="text-2xl pt-1">🏡</span>
                <div>
                  <h4 className="text-lg font-serif text-white/90 italic leading-relaxed mb-3">
                    "How do we build physical environments that respect human physiology, rather than exploiting for profits?"
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50"></span>
                    Sustainability
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-teal-500/30 transition-colors group">
              <div className="flex items-start gap-4">
                <span className="text-2xl pt-1">💭</span>
                <div>
                  <h4 className="text-lg font-serif text-white/90 italic leading-relaxed mb-3">
                    "Are people predisposed to mistake predicting troubles (or responding to troubles) with causing troubles?"
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                    Psychology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            The Alternative
          </h3>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 leading-relaxed italic border-l-4 border-zinc-700 pl-4 py-2 my-6">
              "Why choose such a difficult, strange path? Why not just drink beers at the local pub with friends and avoid the sacrifice?"
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I tried that. Truly. And it was meaningful, I love my friends. But unfortunately, I'm filled with <strong className="text-white">dread</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              You see, I have a problem: <span className="text-amber-600 font-medium">I can't enjoy the apocalypse</span> <em>(or at least, I feel like I have responsibility to build after the apocalypse)</em>. While my friends saw a fulfilling friday night, I saw the slow, entropic decay of the world demanding action. I was filled with a conspiratorial anxiety that if I didn't move — if I didn't take action — our impending doom would be upon us.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              So I chose this path. Out of fear and sympathy. Because for me, the anxiety of standing still is the only thing scarier than the work itself.
            </p>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            How I Waste Time
          </h3>
          <p className="text-zinc-500 text-sm -mt-4">
            Things I watch when I should be sleeping.
          </p>
          <div className="rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden">
            {/* TV Static Header */}
            <div className="px-5 py-3 bg-zinc-800/50 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xs font-mono animate-pulse">● REC</span>
                {/* <span className="text-zinc-500 text-xs font-mono">02:47 AM</span> */}
              </div>
              <span className="text-zinc-600 text-xs font-mono">DOCUMENTARY</span>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4 group">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors">Forensic Investigations</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Cold cases, DNA breakthroughs, interrogation techniques — I find the investigative process fascinating. Nothing like learning about detectives investigations at 3am.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5" />

              <div className="flex items-start gap-4 group">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-orange-400 transition-colors">Prison Documentaries</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The sociology of incarceration, life inside maximum security, reform programs. It's a window into a world most hopefully never see — and I can't look away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </section>
    </main>
  );
}