import { MapPin } from "lucide-react";
import React from "react";

export default function WhoAmIPage() {
  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-3xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Who Am I?
          </h1>
          <h2 className="text-2xl text-zinc-400 font-medium">
            Redbull enthusiast
          </h2>
          <p className="text-zinc-600"><MapPin className="inline -mt-[3px]" size={16} /> Sydney, Australia</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none -mt-6">
          <p className="text-lg text-zinc-400 leading-relaxed">
            I am a multidisciplinary engineer operating at the intersection of biological systems and digital technology.
            My work focuses on leveraging software engineering principles to solve complex problems in synthetic biology and healthcare.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed mt-4">
            With a background in both life sciences and computer science, I bridge the gap between wet lab experimentation and computational analysis.
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
              Later, I was sent to a game development academy by my school. That was a cool moment for me, and it's where I started to see how I could combine my interests with technology. I never saw myself going to university after school, but the path was chosen for me.
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
                  {book.cover && <img src={book.cover} alt={book.title} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />}
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
                viewBox="0 0 512 512" xmlSpace="preserve" className="fill-zinc-500 size-48">
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
      </section>
    </main>
  );
}