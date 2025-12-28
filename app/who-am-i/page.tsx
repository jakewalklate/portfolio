import { MapPin, X, Brain, Activity, Hammer, Search, GraduationCap, StickyNote, Zap, Utensils, Fingerprint, Frown, Heart, Music, SquareDashed, Bike, Snowflake, SprayCan, Caravan, Mountain, Trees, Target, Waves, Flame, Circle, Microscope, Users, Leaf, Telescope, Info, HeartCrack } from "lucide-react";
import Time from "./time";
import Process from "./process";

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
          <p className="text-zinc-700"><MapPin className="inline -mt-[3px]" size={16} /> Sydney, Australia (Current Time: <Time />)</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none -mt-6">
          <p className="text-lg text-zinc-400 leading-relaxed">
            I am a multidisciplinary engineer operating at the intersection of biological systems and digital technology.
            My work focuses on leveraging engineering principles to solve complex problems in synthetic biology and healthcare.
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
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Web & Mobile (Flutter, Next.js, TypeScript)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Machine Learning (KNIME, Python)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cloud (AWS, Azure, GCP)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Cybersecurity & Privacy</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Object Oriented Programming</li>
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
                <ul className="list-disc ml-6 mb-2">
                  <li className="text-zinc-500 text-sm">Majoring in Biomedical & Mechatronic Engineering</li>
                  <li className="text-zinc-500 text-sm">Sub-major in Data Analytics & Machine Learning</li>
                </ul>
                <div className="text-zinc-400">Bachelor of Medical Science</div>
                <ul className="list-disc ml-6">
                  <li className="text-zinc-500 text-sm">Majoring in Molecular Medicine</li>
                </ul>
              </div>
              <div className="text-zinc-500 flex min-w-[120px] font-mono text-sm text-right sm:text-left">
                Double Degree
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">TAFE NSW</h4>
                <div className="text-zinc-400">4x Certificates in Information Technology</div>
                <ul className="list-disc ml-6">
                  <li className="text-sm text-zinc-500">
                    Specializing in Web Development, Database Design, and Network Security.
                  </li>
                </ul>
              </div>
              <div className="text-zinc-500 flex min-w-[120px] font-mono text-sm text-right sm:text-left">
                Trade School
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">Lachlan Macquarie Institute</h4>
                <div className="text-zinc-400">Residential Intensive</div>
                <ul className="list-disc ml-6">
                  <li className="text-sm text-zinc-500">
                    Curriculum focused on European history, political theology, and the sociology of counter-cultural movements.
                  </li>
                </ul>
              </div>
              <div className="text-zinc-500 flex min-w-[120px] font-mono text-sm text-right sm:text-left">
                Short Course
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
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 shrink-0">
                  {[
                    { title: "Frogstomp", artist: "Silverchair", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/4b/07/d54b073a-6422-3486-7545-557c5282a5ec/886445059557.jpg/500x500bb.jpg" },
                    { title: "Hyperview", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/11/3e/d2113e48-6044-cbd8-132a-1d8225ba5877/artwork.jpg/500x500bb.jpg" },
                    { title: "Promise Everything", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2e/b5/fa/2eb5fa18-7752-ef1d-217d-0c54bc910a58/075679900203.jpg/500x500bb.jpg" },
                    { title: "Illmatic", artist: "Nas", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b9/eb/cc/b9ebccbc-5ba4-2cdb-5332-b065739abd9a/886444567619.jpg/500x500bb.jpg" },
                    { title: "Shed", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/15/6a/07/156a071f-fa4d-8b2f-f9c0-455ca3f45be2/550.jpg/500x500bb.jpg" },
                    { title: "Beside Myself", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/48/4c/8f/484c8f94-7a50-cf86-8579-97a88ebb731e/075679868466.jpg/500x500bb.jpg" },
                    { title: 'XXYYXX', artist: 'XXYYXX', cover: '/xxyyxx.jpg' },
                    { title: "Feel Something", artist: "Movements", cover: "/feelsomething.jpeg" },
                    { title: "Youth", artist: "Citizen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8a/f1/cf/8af1cfd9-b305-facd-b0e0-859b8c1a4a2b/cover.jpg/500x500bb.jpg" },
                    { title: "As You Please", artist: "Citizen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bd/76/21/bd76213c-c50c-2a2e-6589-9edf7af5c7cd/cover.jpg/500x500bb.jpg" },
                    { title: "Peripheral Vision", artist: "Turnover", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/e8/2c/a1e82cf2-c8b0-e81a-d067-dc5134d47843/52677.jpg/500x500bb.jpg" },
                    { title: "Colourmeinkindness", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/14/ac/7b/14ac7b28-e4ae-1ab8-63b7-17c9b47b678a/43554.jpg/500x500bb.jpg" },
                    { title: "The Premier Hussle", artist: "Nipsey Hussle", cover: "/premier-hussle.jpg" },
                    { title: "Nonstop Feeling", artist: "Turnstile", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e7/f9/2b/e7f92b2e-02e6-12b3-ff09-846edb758563/016861748005.jpg/500x500bb.jpg" },
                    { title: "36 Chambers", artist: "Wu-Tang Clan", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/20/1f/8c201f03-7617-2d8b-3d8d-e0ba2d55041b/196872123784.jpg/500x500bb.jpg" },
                    { title: "I Wish I Could Stay Here", artist: "Basement", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/55/43/26/554326c2-4ffc-de4b-2390-b6f93305bcf6/cover.jpg/500x500bb.jpg" },
                    { title: "Light We Made", artist: "Balance and Composure", cover: "/lightwemade.jpg" },
                    { title: "Dear G-D...", artist: "Being As An Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/d5/88/06d5884e-9336-8847-8d52-f4786a36065b/cover.jpg/500x500bb.jpg" },
                    { title: "Wildlife", artist: "La Dispute", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2f/17/b9/2f17b94d-78d1-a388-5a4e-03b9266dbc23/603111932125.png/500x500bb.jpg" },
                    { title: "Songs to Scream at the Sun", artist: "Have Heart", cover: "/songstoscream.jpg" },
                    { title: "Separation", artist: "Balance and Composure", cover: "/separation.jpg" },
                    { title: "Floral Green", artist: "Title Fight", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/53/24/a3532431-4b69-580b-3e75-aefd9db39ae6/451.jpg/500x500bb.jpg" },
                    { title: "amo", artist: "Bring Me The Horizon", cover: "/bmthamo.jpeg" },
                    { title: "The Things We Think We're Missing", artist: "Balance and Composure", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/fd/c4/e1fdc4ae-8eb8-b2dc-b88a-33c29a65bea4/2049.jpg/500x500bb.jpg" },
                    { title: 'Untrue', artist: 'Burial', cover: '/BurialUntrue.jpg' },
                    { title: "Parachutes", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/500x500bb.jpg" },
                    { title: "How We Both Wondrously Perish", artist: "Being As An Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6a/7c/83/6a7c83b4-8881-93f1-913b-c594ceabb821/856658003814.jpg/500x500bb.jpg" },
                    { title: "Come Over When You're Sober, Pt. 1", artist: "Lil Peep", cover: "/peeppt1.jpg" },
                    { title: "Come Over When You're Sober, Pt. 2", artist: "Lil Peep", cover: "/peeppt2.jpg" },
                    { title: "Hybrid Theory", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/53/a7/7f/53a77fab-c54c-a57b-8130-248fc12d0c80/093624948995.jpg/500x500bb.jpg" },
                    { title: "Faces", artist: "Mac Miller", cover: "/macfaces.jpg" },
                    { title: "Best Buds", artist: "Mom Jeans", cover: "/bestbuds.jpg" },
                    { title: "Grown Man Biz", artist: "Scotty Hinds", cover: "/scottyhinds.jpg" },
                    { title: "Divination", artist: "In Hearts Wake", cover: "/inheartswake.jpg" },
                    { title: 'Singularity', artist: 'Northlane', cover: '/singularity.jpeg' },
                    { title: 'Between the Richness ', artist: 'Fiddlehead', cover: '/Betweentherichness.jpg' },
                    { title: 'Love Is Not Enough', artist: 'Casey', cover: '/love.jpg' },
                    { title: 'Yeezus', artist: 'Kaney West', cover: '/269-Kanye-West-Yeezus.jpg' },
                    { title: 'The Calling', artist: 'Hilltop Hoods', cover: '/HH_The_Calling.jpg' },
                    { title: 'Springtime and Blind ', artist: 'Fiddlehead', cover: '/springtime.jpg' },
                    { title: 'III', artist: 'Crystal Castles', cover: '/Crystal_Castles_-_III_album_cover.png' },
                    { title: 'Errorzone', artist: 'Vein.fm', cover: '/erorrzone.jpg' },
                    { title: 'Fear Network', artist: 'Ghostmane', cover: '/fearnetwork.jpg' },
                    { title: 'MMXIV', artist: 'Mindshank', cover: '/mindshank.png' },
                    { title: 'That\'s The Spirit', artist: 'Bring Me The Horizon', cover: '/spirit.jpeg' },
                    { title: 'Moving Away', artist: 'Gleemer', cover: '/movingaway.jpg' },
                    { title: 'Suicide Season', artist: 'Bring Me The Horizon', cover: '/suicide.jpg' },
                  ].sort(() => Math.random() - 0.5).map((album, j) => (
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
              I've always been into video games and skateboarding. As an adolescent, that was my world, but my first dream was to be a brain-surgeon.
            </p>
            <br />
            <p>
              I started building software before I understood what I was doing. At 11, I was running a self-hosted Runescape private server in Java, I learnt from a textbook provided to me by my aunt's friend Clint who was a C# programmer. By 13, I was writing IRC bots. At 14, I hardware jailbroke a PS3 and created one of the most downloaded multiplayer patches for Modern Warfare 2, receiving 12 pages of forum feedback from players around the world.
            </p>
            <br />
            <p>
              By 16, I had rack-mounted Xeon servers running virtualized Linux clusters in my bedroom, hand-configured firewalls, and was hosting community game servers.
            </p>
            <br />
            <p>
              The skatepark and the server rack were my two worlds. I studied Art, Modern History and Entertainment in high school because I've always been interested in that sort of art and culture.
            </p>
            <br />
            <p>
              Later, I was sent to AIE — an art and game design school in Ultimo — by my art teacher and headmaster who wanted to encourage me to study game development. That was a cool moment for me, and it's where I started to see how I could combine my interests with education.
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
            Bookshelf
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "The Holy Bible", author: "New International Version", note: "Stories to introduce you to human nature.", cover: "/bible.jpg" },
              { title: "Animal Farm", author: "George Orwell", note: "A story about the betrayal of the revolution.", cover: "/animalfarm.jpg" },
              { title: "Dhammapada", author: "Buddha", note: "The Buddhist scripture that teaches you about the path to enlightenment.", cover: "/buddah.jpg" },
              { title: "Maps of Meaning", author: "Jordan Peterson", note: "The architecture of belief in human culture.", cover: "/mapsofmeaning.jpg" },
              { title: "Notes From Underground", author: "Fyodor Dostoevsky", note: "A dark portrait of a man who clings to despair as proof of his freedom.", cover: "/notes.jpg" },
              { title: 'Civilisation and Its Discontents', author: 'Sigmund Freud', note: 'The fundamental tensions between civilization and the individual.', cover: '/civilisation.jpg' },
              { title: 'The Concise Human Body Book', author: 'DK', note: 'An illustrated guide to the human body\'s structure, function and disorders.', cover: '/body.jpg' },
              { title: 'The Design of the Unix Operating System', author: 'Maurice Bach', note: 'The primary guide to the design of the Unix operating system.', cover: '/unix.jpeg' },
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
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Workshop Prototyping</h4>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
                  There is a satisfaction in bringing ideas into the physical world. Whether it's crafting with timber or fabricating with 3D additive manufacturing, I love the feedback loop that comes from rapid prototyping.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 h-full flex flex-col">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Human OS</h4>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  I am captivated by the source code of human behavior.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 max-sm:text-[10px] text-xs text-purple-400 font-mono">
                    <span>import </span>
                    <span>EVOLUTIONARY_PSYCH</span>
                    <span>//</span>
                    <span>ANALYTICAL_PSYCH</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 relative">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Open Source</h4>
                <p className="text-zinc-400 leading-relaxed">
                  I believe software is at it's best when it is transparent, accessible, and community-driven.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]">
              <div className="z-10 relative">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">JDM Culture</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Japanese engineering from the 90s represents a golden era of mechanical harmony and style.
                </p>
              </div>
            </div>

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
          <div className="relative mx-auto max-w-2xl">
            <div className="rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
              <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3">
                <span className="flex-1 text-center text-zinc-500 text-sm font-mono">stack@portfolio ~ ps aux</span>
              </div>

              <div className="bg-zinc-950 p-4 font-mono text-sm">
                <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto] gap-4 text-zinc-600 text-xs border-b border-zinc-800 pb-2 mb-2">
                  <span>PID</span>
                  <span>PROCESS</span>
                  <span>STATUS</span>
                  <span>MEM</span>
                </div>

                <div className="space-y-1">
                  {[
                    { name: "next.js", pid: "3000", mem: "128M", sleeping: false },
                    { name: "tRPC", pid: "4000", mem: "64M", sleeping: false },
                    { name: "supabase (postgresql)", pid: "5432", mem: "256M", sleeping: false },
                    { name: "tailwindcss", pid: "8080", mem: "32M", sleeping: false },
                    { name: "apple-silicon", pid: "0001", mem: "∞", sleeping: false },
                    { name: "prisma.io", pid: "5555", mem: "48M", sleeping: false },
                    { name: "neural-net", pid: "9000", mem: "4G", sleeping: true },
                    { name: "capacitor", pid: "8100", mem: "96M", sleeping: false },
                  ].map((proc, i) => (
                    <div
                      key={i}
                      className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] gap-4 items-center py-1.5 px-2 -mx-2 rounded hover:bg-zinc-900 transition-colors cursor-default"
                    >
                      {proc.sleeping === false && (
                        <>
                          <span className="text-zinc-600 text-xs w-10">{proc.pid}</span>
                          <span className="text-green-400 group-hover:text-green-300 transition-colors">{proc.name}</span>
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            <span className="text-zinc-500 text-xs hidden sm:inline">running</span>
                          </span>
                          <span className="text-zinc-600 text-xs hidden sm:block">{proc.mem}</span>
                        </>
                      )}
                      {proc.sleeping === true && (
                        <Process proc={proc} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2">
                  <span className="text-green-500">❯</span>
                  <span className="text-zinc-400">sudo rm -rf /usr/bin/java/</span>
                  <span className="w-2 h-4 bg-zinc-400 motion-safe:animate-[blink_1.5s_step-start_infinite]" />
                </div>
              </div>
            </div>
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
            <li><X className="text-red-400 inline me-1.5 shrink-0" />Writing raw SQL migrations</li>
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
                  <GraduationCap size={20} />
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
              <img src="/selfies/2.JPG" alt="Life moment" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 -mt-24 sm:-mt-36 md:-mt-44" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-mono">{photo.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Current Toolbox
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider">
                <span>💻</span> Dev Setup
              </div>
              <div className="space-y-2">
                {[
                  { name: "MacBook Pro M1", detail: "2020 • 16GB", icon: "⌨️" },
                  { name: "Keychron K1", detail: "Red Switches", icon: "🔴" },
                  { name: 'Google Antigravity', detail: 'Vibe Code Assistant', icon: '🤖' },
                  { name: 'Fusion 360', detail: 'CAD', icon: '✏️' }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-all cursor-default">
                    <span className="text-lg">{item.icon}</span>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">{item.name}</div>
                      <div className="text-zinc-600 text-xs">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider">
                <span>🔧</span> Lab Equipment
              </div>
              <div className="space-y-2">
                {[
                  { name: "Anycubic Kobra S1", detail: "3D Printer", icon: "🖨️" },
                  { name: "TS80P", detail: "Soldering Iron", icon: "🔥" },
                  { name: "Uni-T UT210E", detail: "Digital Multimeter", icon: "⚡" },
                  { name: "VINCA DCLA-0605", detail: "Calipers", icon: "📏" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-all cursor-default">
                    <span className="text-lg">{item.icon}</span>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">{item.name}</div>
                      <div className="text-zinc-600 text-xs">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <img src="/banner.png" alt="Banner" className="w-full h-auto group-hover:blur-[2px] transition-all duration-500" />
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
              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500">
                    <span className="text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div className="w-px flex-1 bg-linear-to-b from-blue-500 to-green-500 opacity-50" />
                </div>
                <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-blue-500/30 hover:border-blue-500/50 transition-colors mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10">NOW</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Undergraduate Studies</h4>
                  <p className="text-sm text-zinc-400">Completing dual degrees in Engineering (Honours) and Medical Science at UTS.</p>
                </div>
              </div>

              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500/50">
                    <span className="text-green-400/70 font-bold text-sm">2</span>
                  </div>
                  <div className="w-px flex-1 bg-linear-to-b from-green-500 to-purple-500 opacity-50" />
                </div>
                <div className="flex-1 p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-green-500/30 transition-colors mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-green-400/70 px-2 py-0.5 rounded-full bg-green-500/10">NEXT</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Part Time Engineering Employment</h4>
                  <p className="text-sm text-zinc-400">Seeking an engineering role while completing my undergraduate studies — building systems that accelerate technological progress or have value to consumers.</p>
                </div>
              </div>

              <div className="relative flex gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500/30">
                    <span className="text-purple-400/70 font-bold text-sm">3</span>
                  </div>
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
            Growth Kanban
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-zinc-900/30 border border-white/15 overflow-hidden">
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/20">
                <h4 className="text-amber-400 font-semibold text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" className="fill-amber-400"><path d="" stroke="none" fillRule="evenodd" /><path d="M 3.425 3.334 C 3.144 4.067, 3.046 8.455, 3.207 13.084 L 3.500 21.500 12 21.500 L 20.500 21.500 20.792 14.330 C 21.067 7.595, 20.915 7.002, 18.302 4.580 C 15.978 2.424, 14.569 2, 9.729 2 C 5.824 2, 3.770 2.435, 3.425 3.334 M 5.417 5.355 C 5.131 6.101, 5.033 9.588, 5.199 13.105 L 5.500 19.500 12 19.500 L 18.500 19.500 18.805 14.750 C 19.106 10.053, 19.075 10, 16.055 10 C 13.327 10, 13 9.679, 13 7 C 13 4.233, 12.726 4, 9.469 4 C 7.420 4, 5.719 4.569, 5.417 5.355 M 15 6.500 C 15 7.325, 15.730 8, 16.622 8 C 17.951 8, 18.020 7.729, 17 6.500 C 16.315 5.675, 15.585 5, 15.378 5 C 15.170 5, 15 5.675, 15 6.500" stroke="none" fillRule="evenodd" /></svg>
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

            <div className="rounded-xl bg-zinc-900/30 border border-white/15 overflow-hidden">
              <div className="px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" className="fill-emerald-400"><path d="" stroke="none" fillRule="evenodd" /><path d="M 3.425 3.334 C 3.144 4.067, 3.046 8.455, 3.207 13.084 L 3.500 21.500 12 21.500 L 20.500 21.500 20.792 14.330 C 21.067 7.595, 20.915 7.002, 18.302 4.580 C 15.978 2.424, 14.569 2, 9.729 2 C 5.824 2, 3.770 2.435, 3.425 3.334 M 5.417 5.355 C 5.131 6.101, 5.033 9.588, 5.199 13.105 L 5.500 19.500 12 19.500 L 18.500 19.500 18.805 14.750 C 19.106 10.053, 19.075 10, 16.055 10 C 13.327 10, 13 9.679, 13 7 C 13 4.233, 12.726 4, 9.469 4 C 7.420 4, 5.719 4.569, 5.417 5.355 M 15 6.500 C 15 7.325, 15.730 8, 16.622 8 C 17.951 8, 18.020 7.729, 17 6.500 C 16.315 5.675, 15.585 5, 15.378 5 C 15.170 5, 15 5.675, 15 6.500" stroke="none" fillRule="evenodd" /></svg>
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
              <span className="text-zinc-600 text-2xl">↺</span>
            </div>
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
            <div className="group relative rounded-2xl bg-linear-to-br from-zinc-900/80 to-zinc-900/40 border border-white/10 hover:border-amber-500/30 transition-all overflow-hidden">
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

            <div className="group relative rounded-2xl bg-linear-to-br from-zinc-900/80 to-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all overflow-hidden">
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
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900/50 border border-white/10 shrink-0 my-auto max-sm:mx-auto">
              <span className="text-4xl font-black text-white">X</span>
            </div>
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
              <p className="text-zinc-400 text-sm leading-relaxed opacity-90">
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
              <span className="ml-2 text-xs font-mono text-zinc-500">excellence.ts (Dark Mode)</span>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs md:text-sm sm:text-base leading-relaxed overflow-x-auto">
              <div className="text-blue-400">
                <span className="text-purple-400">function</span> <span className="text-yellow-200">buildExcellence</span>(<span className="text-blue-300">isReady</span><span className="text-white">:</span>&nbsp;<span className="text-emerald-400">boolean</span>) <span className="text-white relative group cursor-default">
                  {'{'}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded border border-white/10 max-md:hidden opacity-60 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Same-line brace (1TBS)
                  </div>
                </span>
              </div>
              <div className="relative group cursor-default w-fit">
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
                  { label: "Waking up at dawn", width: "98%" },
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

            <div className="p-6 md:p-8 space-y-8">
              <div className="text-sm text-zinc-400 mb-3 -mt-2">Software revision: v{(new Date().getFullYear() - 1997).toString()}.0.0</div>

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
            The Motivation
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
              So I chose this path. Out of fear and sympathy. Because for me, the anxiety of not helping other people is the only thing scarier than the work itself.
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
            <div className="px-5 py-3 bg-zinc-800/50 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xs font-mono animate-pulse"><span>►</span>&nbsp;<span className="absolute -mt-[1px]">PLAY</span></span>
              </div>
              <span className="text-zinc-600 text-xs font-mono">VHS</span>
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

              <div className="border-t border-white/5" />

              <div className="flex items-start gap-4 group">
                <span className="text-3xl">🪖</span>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">World War History</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The geopolitics, strategies, and human stories from WWII. The scale of these conflicts and how they shaped the post-modern world never stops being fascinating.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5" />

              <div className="flex items-start gap-4 group">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-emerald-400 transition-colors">Renaissance & Roman History</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The rise and fall of Rome, the rebirth of classical ideas — there's something timeless about understanding how civilizations build, peak, and transform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Wardrobe
          </h3>
          <p className="text-zinc-500 text-sm -mt-4 mb-4">
            Favourite Aesthetic: Health Goth
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 rounded-lg overflow-hidden">
            {[
              { name: "Tommy Hilfiger", tagline: "American Heritage", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756" class="size-18 fill-neutral-300"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M86.206 101.091h-7.867v-9.726h7.867v9.726z"/><path fill="#4f4d67" d="M78.339 91.365h7.867v2.185h-7.867v-2.185zM78.339 98.904h7.867v2.187h-7.867v-2.187z"/><path fill="#ca3432" d="M86.206 101.091h7.867v-9.726h-7.867v9.726z"/><path fill="#4f4d67" d="M94.073 91.365h-7.867v2.185h7.867v-2.185zM94.073 98.904h-7.867v2.187h7.867v-2.187z"/><path d="M4.779 101.15v-8.683H1.538v-1.164h7.788v1.164H6.085v8.683H4.779zM17.867 93.211a3.32 3.32 0 0 1 2.375-.95c.648 0 1.231.165 1.752.494.521.329.916.792 1.186 1.39.271.598.405 1.297.405 2.099 0 1.266-.316 2.245-.948 2.934-.632.689-1.438 1.034-2.416 1.034-.96 0-1.759-.342-2.395-1.024-.637-.683-.955-1.616-.955-2.803 0-1.483.332-2.541.996-3.174zm-1.775 5.605a4.311 4.311 0 0 0 1.656 1.833c.728.447 1.555.671 2.48.671a4.88 4.88 0 0 0 2.387-.607c.737-.404 1.308-1.001 1.71-1.789s.603-1.682.603-2.68c0-.985-.191-1.866-.573-2.643a4.246 4.246 0 0 0-1.666-1.817c-.728-.434-1.546-.651-2.454-.651-1.386 0-2.517.462-3.393 1.388-.876.924-1.313 2.203-1.313 3.837 0 .865.187 1.683.563 2.458zM32.082 101.15v-9.848h1.95l2.333 6.97c.215.649.371 1.135.47 1.457.114-.358.289-.884.528-1.578l2.378-6.849h1.739v9.848h-1.253v-8.236l-2.877 8.236h-1.174l-2.842-8.379v8.379h-1.252zM49.035 101.15v-9.848h1.951l2.332 6.97c.215.649.372 1.135.471 1.457.113-.358.289-.884.529-1.578l2.378-6.849h1.739v9.848h-1.253v-8.236l-2.877 8.236H53.13l-2.842-8.379v8.379h-1.253zM68.8 101.15v-4.172l-3.795-5.676h1.568l1.941 2.983a26.65 26.65 0 0 1 1.011 1.657c.303-.515.663-1.096 1.08-1.743l1.907-2.897h1.517l-3.921 5.676v4.172H68.8zM100.467 101.15v-9.847h1.306v4.047h5.102v-4.047h1.309v9.847h-1.309v-4.636h-5.102v4.636h-1.306zM114.699 101.15v-9.847h1.307v9.847h-1.307zM122.359 101.15v-9.847h1.307v8.684h4.852v1.163h-6.159zM134.238 101.15v-9.847h6.66v1.164h-5.353v3.044h4.637v1.163h-4.637v4.476h-1.307zM146.941 101.15v-9.847h1.307v9.847h-1.307zM159.254 97.292v-1.163h4.172v3.654a7.287 7.287 0 0 1-1.979 1.151 5.852 5.852 0 0 1-2.094.386c-.965 0-1.842-.207-2.631-.62a4.108 4.108 0 0 1-1.789-1.799c-.4-.783-.604-1.66-.604-2.628 0-.958.201-1.853.602-2.685s.977-1.448 1.727-1.852c.75-.403 1.617-.604 2.596-.604.711 0 1.354.115 1.928.346.576.23 1.025.552 1.354.964.326.412.574.95.744 1.612l-1.172.322c-.148-.502-.33-.897-.551-1.185-.219-.287-.531-.517-.938-.689a3.442 3.442 0 0 0-1.355-.259c-.596 0-1.111.091-1.543.272-.436.182-.785.421-1.049.718a3.379 3.379 0 0 0-.623.977 5.192 5.192 0 0 0-.375 1.987c0 .88.15 1.616.453 2.209s.74 1.032 1.318 1.32a4.068 4.068 0 0 0 1.838.431c.562 0 1.113-.109 1.65-.327s.943-.449 1.221-.698v-1.84h-2.9zM169.527 101.15v-9.847h7.088v1.164h-5.781v3.008h5.406v1.164h-5.406v3.348h6.016v1.163h-7.323zM184.094 92.396h3.117c.73 0 1.266.149 1.604.45.338.3.508.684.508 1.149 0 .318-.088.612-.262.883a1.49 1.49 0 0 1-.766.592c-.338.123-.803.185-1.398.185h-2.803v-3.259zm0 8.754v-4.368h1.512c.336 0 .578.015.725.047.203.049.402.136.596.262.195.125.416.345.662.658s.559.764.941 1.354l1.301 2.047h1.629l-1.705-2.678a6.7 6.7 0 0 0-1.078-1.308c-.18-.162-.441-.325-.785-.491.945-.129 1.643-.434 2.096-.914s.678-1.069.678-1.768c0-.543-.137-1.038-.408-1.486a2.204 2.204 0 0 0-1.096-.938c-.457-.176-1.125-.265-2.002-.265h-4.371v9.848h1.305z"/></g></svg>' },
              { name: "Polo Sport", tagline: "Since 1967", icon: '<svg viewBox="24 78 851.1 250.9" xmlns="http://www.w3.org/2000/svg" class="size-18 fill-neutral-300"><path d="m457.7 78.7c-1.2 1.1-.7 4.8.9 7.1 2.2 3.1 1.4 4.4-4.8 8.5-2.9 2-6.2 4.4-7.4 5.4-1.1 1-2.7 2.2-3.6 2.8-8.7 5.3-28.1 19.1-29.3 20.8-1.9 2.7-1.9 3.7 0 3.7 1.6 0 11.8-5.9 12.3-7.2.2-.4.8-.8 1.3-.8 1.1 0 7.2-4.2 7.7-5.3.2-.4.8-.7 1.3-.7.9 0 6.7-4.2 17.3-12.3 1.7-1.2 4.1-3.2 5.5-4.5 2.9-2.7 4.3-2.4 5.1.9s6 4.1 6 1c0-1.2-.4-2.9-1-3.9-1.6-2.9-5-11-5-12 0-1.2-3.4-4.2-4.7-4.2-.5 0-1.3.3-1.6.7z"/><path d="m398.6 126.5c-1.7 1.5-2.6 3.4-2.6 5.4 0 2.1-.8 3.6-2.7 5-5.1 3.8-7.1 6.3-7.6 9.8-.7 3.8.6 7.3 2.6 7.3.7 0 1.9.4 2.7 1 1.2.7 1.2 1.2-.4 2.9-1.1 1.2-2.3 2.1-2.8 2.1-1.8 0-4.7 4.5-4.2 6.3.4 1.2-.7 2.8-3.2 5-6.4 5.5-7.4 6.6-7.4 8.5 0 2 5.2 7.2 7.2 7.2 2.4 0 5.8 4.4 5.8 7.6 0 1.6.7 3.8 1.5 4.8.8 1.1 1.5 3.6 1.5 5.5 0 5.3 3.6 12.1 6.5 12.1 1.2 0 2.6-.7 2.9-1.6 1-2.7 5.1-1.3 5.4 1.8.4 3-1.2 3.8-2.2 1.3-.3-.8-1.1-1.5-1.8-1.5-1.9.1-6 7-5.5 9.1.3 1-.1 2.3-.9 3-2.9 2.4-.9 12 3.7 17.5.9 1.1.9 1.8-.3 3.2-.8.9-2.3 4.4-3.3 7.7s-3.1 8.9-4.7 12.4c-2.7 5.8-2.9 7.1-2.5 14.5.3 4.4 1.1 11.2 1.7 15 1.1 5.9 1.8 7.5 4.8 10.3 1.9 1.8 3.8 3.3 4.3 3.3s1.7.9 2.8 2.1c2.7 2.9 6.5 2.2 6.9-1.3.4-3.1-2.7-6.8-5.6-6.8-3.7 0-7.6-6.7-8.6-14.6-.5-4-.3-5.4.9-6.4 1-.8 1.5-3 1.5-6.7 0-4.9.3-5.8 3.1-8.1 1.8-1.5 5.3-4.6 7.8-7l4.6-4.2-3.3-3c-1.8-1.7-3-3.5-2.7-4 .7-1.1-4.1-12-5.3-12-.9 0-3.2-4.9-3.2-6.7 0-.8.7-1.6 1.5-1.9 1-.4 1.5-2 1.5-5.2 0-5.3 1.7-4.7 2.2.7.4 4.7 2.2 4.9 4.2.6.9-1.9 2.1-3.5 2.6-3.5.6 0 1-.9 1-2 0-1.2 1.6-3 4.3-4.7 2.3-1.5 4.4-2.9 4.7-3.1s-.3-.8-1.3-1.4c-1.5-.8-1.8-2-1.6-5.6.2-2.6-.2-5.8-1-7-.7-1.3-1.5-6.7-1.7-12-.5-8.2-1-10.7-3.6-15.9-1.9-4-2.8-6.9-2.3-8.2.8-2.5 2-2.7 2.9-.5.4 1 1.5 1.4 3.3 1.2 2.4-.3 2.8-.8 2.8-3.6.1-3.7 1.7-5.2 5.6-5.2s4.1 1 .9 4c-1.7 1.6-3 3.7-3 4.7 0 1.2-1.1 2.5-2.7 3.2l-2.8 1.3 2.8 2.2c3.1 2.5 3.5 5.1 1 6-1.3.5-1.4.9-.4 1.9 1 .9 1.5.8 2.5-.6.7-.9 2.1-1.7 3-1.7s1.9-.7 2.3-1.6c.4-1.2 1.8-1.5 6.2-1.2l5.6.3.3-4.9c.2-2.7.1-5.5-.3-6.4-.5-1.3-.8-1.3-2.4.2-1 .9-2.5 1.4-3.5 1-1.6-.6-1.6-.8-.1-2.4.9-1 3.2-2.1 5.1-2.4 4-.8 5.8-3.6 4.9-7.7-.6-2.5-1.1-2.9-3.8-2.9-2.7-.1-2.9-.2-1.4-1.1 2.6-1.5 2.2-2.3-3.5-6-4.5-2.8-6.3-3.4-11.8-3.5-5.3-.2-6.8-.6-8.2-2.5-1.7-2-1.7-2.3-.3-3.9s1.4-2.1-.1-5.4c-1.6-3.3-2.1-3.6-5.9-3.6-3.1 0-4.9.7-6.9 2.5zm1.7 14.6c1.2.7 2.6 1.8 3 2.6.6 1 1.8 1.2 3.9.7 3-.6 3.1-.6 2.5 2.5-.6 2.9-.5 3.1 2.2 3.1 2 0 4-1.1 6-3.1 2.5-2.4 3.2-2.7 3.7-1.5 1 2.7 0 5-2.6 5.6-1.4.3-2.6 1.4-2.8 2.5-.6 3.1-1.8 3.8-4 2.4-1.8-1.1-2.7-1-5.7.4-5.6 2.7-6.8 2.3-6.1-1.8.7-3.8-.6-4.7-2.3-1.8-.9 1.6-1.3 1.5-3.5-1.2-2.9-3.5-3.3-7.1-.9-9.7 1.9-2.1 3.6-2.3 6.6-.7zm29.5 9.5c2.5.7 2.9 3.5.8 5.3-2.6 2.2-6.9-1.9-5.1-4.9.7-1.2 1.2-1.2 4.3-.4zm-3.5 13.9c-.3 2-3.3 3.1-4.3 1.5-.5-.8-.6-1.8-.3-2.3.7-1.1 4.8-.4 4.6.8zm-27.5 2.8c.3 2.3 0 2.7-2.2 2.7-1.3 0-2.7.6-3 1.2-.5 1.3.3-3.7 1-6 .7-2.4 3.9-.8 4.2 2.1zm6.5 4.9c1.4.9-1.2 8.8-2.9 8.8-2.2 0-2.5-1.8-.9-5 1.3-2.6 1.4-3 .1-3-2.4 0-3-2.2-1-3.7 1.6-1.1 1.9-1.1 2.8.4.5 1 1.4 2.1 1.9 2.5zm27.7-1.6c0 1.2-.9 1.4-4.2 1.2-5.9-.4-6.3-2.8-.4-2.8 3.5 0 4.6.4 4.6 1.6zm-42.6 4.6c.9 1.7 1.6 3.7 1.6 4.5 0 .7.7 1.3 1.5 1.3 1 0 1.5-1 1.5-3.1 0-2.4.4-3 1.8-2.7 2.1.4 1.8 5.8-.4 7.1-2.1 1.2-1.7 8.4 1.2 21.2.4 1.6 1.3 3.7 2.1 4.7.9 1 1.1 1.8.4 2.2-.5.4-1.3.1-1.6-.4-.4-.7-1.9-.8-3.6-.5-2.9.6-2.9.6-2.9-3.7 0-2.4-.7-5.6-1.5-7.2-.8-1.5-1.5-4.5-1.5-6.6 0-2.2-.5-5.1-1.1-6.7-1.1-2.8-1.9-12.1-1.1-13.6.6-1.2 2 .1 3.6 3.5zm-365.4-10.4c-.6.2-1 1.4-1 2.7 0 2.5 2.6 4 5.2 3 3.7-1.4 3.8 1 3.6 49.6l-.3 47.4-4.2.3c-4 .3-4.3.5-4.3 3.3v2.9h17.4c16.9 0 17.5-.1 18.1-2.1.9-2.9-.9-4.4-4.9-4.1-1.9.2-3.6 0-3.9-.5s-.7-10.7-.8-22.8c-.2-18.9 0-22 1.2-22.3 1.4-.2 4.1 3.4 19.9 27.3.8 1.3 4.8 7.2 8.8 13.1l7.4 10.9 17.6.5c9.8.3 18.3.3 19 .1.6-.2 1.2-1.4 1.2-2.7 0-1.9-.5-2.4-2.5-2.4-3.3 0-4.1-2.2-2.1-5.7.8-1.5 2.5-6.3 3.7-10.6l2.3-7.7 7.8-.2c15.4-.4 14.1-.6 14.9 2.7.8 3.4 2.5 8.5 4.5 13.3.8 1.8 1.4 4.4 1.4 5.7 0 2.1-.5 2.5-2.9 2.5-3.1 0-4.9 3.2-2.7 4.7.6.5 6.2.6 12.5.3 12.7-.6 14.5-1.6 8.8-5-2.2-1.3-3.7-3-4-4.8-.2-1.5-1-4.3-1.7-6.2s-1.8-5.1-2.5-7-1.8-5.1-2.5-7c-.6-1.9-1.6-5.1-2-7s-1.4-5.1-2-7c-.7-1.9-1.8-5.1-2.5-7s-1.8-5.1-2.5-7c-.6-1.9-1.6-5.1-2-7s-1.4-5.3-2.2-7.5c-1.4-3.7-1.8-4-5.5-4.3s-4-.1-5.5 3.5c-1.9 4.8-3.7 9.8-5 14.3-.5 1.9-1.4 3.9-1.8 4.5-.4.5-1.1 2.6-1.5 4.5s-1.1 4.1-1.6 5c-.4.8-1.5 4.2-2.4 7.5s-2.3 7.6-3 9.5c-.8 1.9-2.4 6.6-3.5 10.5-3.6 11.7-3.5 11.5-7.9 11.5-3 0-4.4-.6-5.6-2.3-3-4.2-11-15.6-14.5-20.7-1.9-2.8-4-5.7-4.5-6.3-.6-.7-2.1-2.8-3.3-4.8-1.2-1.9-3.3-4.8-4.7-6.3s-2.7-3.7-2.8-4.9c-.2-1.9.4-2.3 4.3-2.8 6.5-.9 11-3.2 15.5-8.1 6.4-6.9 7.5-9.5 7.5-18.8 0-7.7-.2-8.5-3.6-13.6-5.2-7.8-12.9-12.9-21.3-14-5-.6-49.5-1.1-51.1-.6zm42.1 6.8c8.6.9 12 4.2 14.4 13.7 1.6 6.4 1.7 8.3.7 13.2-2.7 13.5-8 17.6-23.4 18.3l-8.8.4v-22.4c0-16.6.3-22.7 1.3-23.7.8-.8 2.8-1 5.7-.7 2.5.3 7 .8 10.1 1.2zm72.7 45.4c.3 2.9 2.8 10.8 4.9 16.1 2.7 6.7 1.9 7.5-7.2 7-4.4-.2-8.3-.5-8.7-.7-.3-.2.7-4.1 2.3-8.7 1.6-4.5 2.9-9 2.9-9.9s.5-2.9 1-4.3c1.3-3.3 4.4-3 4.8.5zm372.5-51.3c-1.2 3.1.2 4.8 4.2 4.8h4l.3 48.7.2 48.8h-4.5c-4.3 0-4.5.1-4.5 3v3h44c24.2-.1 44.4.2 45 .5 1.7 1.1 5-.5 5-2.4 0-2.2-2.5-4.5-3.9-3.7-1.6 1-2.4-1.4-1.3-3.7 1.6-3.2 5.2-14.5 5.2-16.1 0-2.8 3-3.7 12.8-4l10-.3 1.6 4.1c.9 2.3 1.6 5.1 1.6 6.2s.6 2.8 1.4 3.9c.7 1.1 1.6 3.7 2 5.8.6 3.1.4 3.8-1.1 4.3-3.3 1-4.8 2.1-5.1 3.8-.3 1.4 1.1 1.6 11.7 1.6 6.6 0 12.2-.4 12.6-1 .3-.5-.8-2.1-2.4-3.5-2-1.8-3.6-4.9-5.1-9.8-1.2-4-2.8-8.7-3.6-10.5s-1.4-4.3-1.4-5.5c-.1-1.2-.7-3.3-1.5-4.7s-1.4-3.4-1.5-4.5c0-1.1-.7-3.3-1.5-4.9-.8-1.5-1.5-3.7-1.5-4.7s-.6-3.3-1.4-5.1c-2.1-5.2-3.7-10-4.6-13.8-.4-1.9-1.3-4.8-2-6.3-1.2-2.5-1.8-2.8-5.3-2.5-3.9.3-4 .4-6 6.3-1 3.3-2.5 7.3-3.3 9-.7 1.6-1.6 4.3-2 6-.4 1.6-1 3.4-1.4 4-.4.5-1.1 2.6-1.5 4.5s-1.1 4.1-1.5 5c-.4.8-2.4 6.9-4.5 13.5-2 6.6-4.1 12.9-4.5 14-.5 1.1-1.2 3.3-1.5 5-.6 3-7 8.3-8.4 6.9-.3-.3-.5-10-.3-21.5l.3-20.9h-9.1v7.3c0 9-3 19.9-6.8 24.5-4.8 6-8.2 7.2-20.9 7.2h-11.3l.2-48.8.3-48.7h4c3.8 0 4-.2 4-2.9v-3h-17.4c-12.5-.1-17.5.2-17.8 1.1zm107.7 48.7c0 1.7 2.7 10.8 4.6 15.6.8 1.9 1.5 5.1 1.6 7l.3 3.5-8.5-.4c-4.7-.1-8.6-.4-8.7-.5s.7-2.8 1.8-6.1 2.7-8.4 3.5-11.3c.8-3 1.9-6.2 2.4-7.3 1.2-2.2 3-2.5 3-.5z"/><path d="m427.7 179.3c-6.3 2-7.1 2.6-9.5 6.9l-2.7 4.7 2.3 2.1c1.3 1.2 2.2 3.3 2.2 5 0 3.4 1.5 4 2.5 1 .8-2.4 2.5-1.7 2.5 1 0 1 .8 2.6 1.7 3.6 2.8 2.7 4.2 6.2 4.9 11.7 1.2 9.2 8 19.3 11.5 17.1 1.5-.9 1-3.2-.9-3.8-1-.3-2.5-2.1-3.3-4-1.3-2.8-1.3-3.7-.2-5.2.7-1 1.3-3 1.3-4.5 0-1.6.7-3.2 1.7-3.8 2.5-1.3 4.5-10.7 2.7-12.2-.8-.6-1.4-2.2-1.4-3.4 0-3.3-1-5.5-2.5-5.5-1.2 0-1.8-1.6-3.3-8.9-.4-1.9-1.2-3.6-1.7-3.7-.6-.2-4.1.7-7.8 1.9zm6.3 9.2c0 .8-.6 1.5-1.4 1.5-1.7 0-2.8-1.4-1.9-2.4 1.2-1.2 3.3-.6 3.3.9zm-259.2 9.2c-1.6 2-.3 4 3.1 4.6l3.1.6v64l-3 2.1c-1.6 1.2-3 2.8-3 3.6 0 1.2 5.3 1.4 36 1.3 19.8 0 36.4.2 36.9.5 1.6 1 4.1-.6 4.1-2.6 0-1.3-1.1-2.4-3-3.1l-3-1.1-.2-12.8c-.1-7-.2-13.6-.2-14.6-.1-1.5 1.2-1.8 9.9-2.2 10.4-.6 13.9-1.7 18.8-5.9 4.1-3.7 5.7-7.7 5.7-14.6 0-7.4-1.8-11.4-6.8-15.3-5.4-4.2-10.5-5.2-25.4-5.3-7.3 0-14.9-.1-16.8-.2-3.1-.2-3.5.1-3.8 2.5-.3 2.3.1 2.7 2.5 3l2.8.3.8 31c.4 17 .5 32 .2 33.3-.3 1.2-1.7 2.8-3.1 3.4-4 1.8-4.6-.2-4.1-13.9.5-12.4 0-14.3-3.4-14.3-2 0-2.9 2-2.9 6.8-.1 4.9-2.1 12.1-4.4 15.4-2.2 3.3-6.9 4.8-15.3 4.8-4.3 0-6.3-.4-6.4-1.3-.3-5.6.2-64.1.7-64.8.3-.5 1.4-.9 2.5-.9 2.3 0 3.6-2.7 2.1-4.2-1.6-1.6-23.1-1.7-24.4-.1zm88.4 6.7c6.1 4 6.4 20.9.4 25.7-1.1.9-4.1 1.9-6.6 2.3-2.5.3-5.4.8-6.5 1.1-4.4 1.2-4.9-.4-4.6-15.7.1-7.8.5-14.7.8-15.1.9-1.5 13.7-.2 16.5 1.7z"/><path d="m278.4 197.4c-1 2.6.4 4.6 3 4.6 1.9 0 2.7.7 3.2 2.4.3 1.3.2 16.2-.3 33.2-.8 29.9-.9 30.9-2.8 30.9-1.1.1-2.6.4-3.3.8-1.4 1-1.6 4.7-.2 4.8h24.1c2.1-.2.5-4.6-1.8-4.9-4-.6-4.4-2.2-4.1-18.3l.3-15.3h28l.3 15.6.2 15.6-3.5 2.1c-3.4 2-4.8 5.1-2.2 5.1 18 .3 23.5.2 24.4-.3 1.9-1.2.3-4.7-2.3-4.7-1.2 0-2.6-.5-2.9-1-.5-.8-.9-54.9-.5-65 0-.6 1.4-1 3.1-1 2.7 0 3-.3 2.7-2.7l-.3-2.7-11.8-.1c-10.4 0-12 .2-12.8 1.8-1.3 2.3-.5 3.3 3.1 4l3 .6v28.1h-29.1l.3-14.3.3-14.2 2.5-.3c3.4-.5 4.3-1.6 3.5-4.2-.6-1.9-1.1-2.1-4.8-1.4-5.1.8-11.5.8-15.6-.1-2.3-.5-3.3-.3-3.7.9zm367.6-.6c-.5.2-1 1.4-1 2.7 0 1.8.6 2.4 2.8 2.7l2.7.3.6 27c.3 14.8 1 28.6 1.6 30.6 2.2 7.9 8.3 13.4 16.7 15.1 12.4 2.6 23.2-3.6 27-15.6 1.6-5.2 1.8-8.8 1.5-31.4l-.4-25.5 2.3-.8c2.4-.9 2.6-1.6 1.2-3.9-1.1-1.7-11.8-2.4-13.7-.8-2.3 1.9-1.5 4.8 1.2 4.8 1.4 0 2.5.6 2.5 1.2.1.7.1 13.4 0 28.1-.1 23.5-.3 27.2-1.8 29.9-3 5.3-6.6 7.3-13.3 7.3-5.1 0-6.2-.4-8.6-2.8l-2.8-2.7v-60.5l3.3-.3c2.9-.3 3.3-.6 3-3l-.3-2.7h-11.7c-6.5 0-12.2.1-12.8.3zm58 1.2c-1.3 2.4-.6 4 1.9 4 1 0 2.2.6 2.7 1.2.5.7.8 15.5.6 33l-.3 31.6-2.9 1.1c-2.9 1-4.3 4.5-2 5.3.5.1 6.2.2 12.5 0 11.2-.3 11.6-.4 11.3-2.5-.2-1.3-1.2-2.3-2.8-2.7-2.4-.6-2.5-.9-3.3-11.5-.9-13-.6-18.7.9-19.2.6-.2 3.1 2.9 5.5 6.8 5.2 8.5 5.6 9.2 13.3 20.3l5.8 8.6h64.7l.3-13.1c.3-14.8-.1-17.2-3.4-16.7-2 .3-2.4 1-2.9 6.8-.7 7.3-2.7 12.6-5.8 15.4-1.6 1.4-4 1.9-11 2.2-4.9.2-9.3.4-9.8.5-3.1.6-3.3-.2-3.3-16.2v-16.2l5.3.7c6.6.9 8.9 3.1 9.7 9.3.4 4.3.8 4.8 3 4.8h2.5l.3-16.8c.2-14.3 0-16.8-1.3-17.3-2.5-1-4.5 1.5-4.5 5.7 0 5.6-3.2 8.7-9.5 9.1l-5 .3-.3-15.3-.3-15.2h9.6c11.9 0 14.8 1.3 17.6 7.7 1.1 2.6 2.3 6.6 2.6 9 .6 4.9 1.4 5.7 4.3 4.8 1.9-.6 2-1.3 1.5-12.8-.3-6.8-1-12.4-1.6-12.8-1.8-1.1-26-1.9-33.3-1-3.8.4-9.4.4-12.4-.1-4.2-.7-5.7-.6-6.4.4-1.4 2.3-.3 4.3 2.7 4.8l3 .5.3 32.6c.2 35.2.1 36.6-4.6 33.3-2-1.4-3.6-3.6-13.2-17.9-1.8-2.8-4.7-6.5-6.4-8.3-3-3.2-3-3.4-1.2-4.8 1.1-.7 3.4-1.7 5.3-2 1.9-.4 4.9-2.2 7.1-4.4 9.5-9.6 6.8-24.7-5.5-31.1-4.4-2.2-6-2.4-20.3-2.5-8.6-.1-16.6-.4-17.7-.8-1.6-.5-2.5-.2-3.3 1.4zm31.5 5c1.4.5 3.7 2.2 5 3.6 2.2 2.4 2.5 3.6 2.5 11 0 7.7-.2 8.6-2.7 11.4-2.2 2.4-4.3 3.4-9.8 4.5-6.5 1.3-7.1 1.3-8.3-.3-.8-1-1.1-2.9-.8-4.6.3-1.6.6-8.2.6-14.7v-11.9h5.4c3 0 6.6.4 8.1 1zm122.4-4.9c-1.3 2.6-.6 3.5 3.2 4.3 3.1.6 3.2.6 2.6 5.9-.2 2.8-.1 12.6.4 21.6.5 9.1.7 16.6.5 16.8-1.1 1.1-3.8-1.5-5.7-5.5-1.3-2.6-4.1-7.9-6.4-11.7-2.2-3.9-4.4-7.7-4.8-8.5s-1.6-2.9-2.7-4.5c-1.1-1.7-2.4-3.9-3-5s-1.9-3.4-3-5c-1.1-1.7-2.4-4-2.9-5.2-1.5-3.4-4.3-4.3-13-4.3-7.3 0-8.1.2-8.1 1.9 0 1 1 2.5 2.3 3.3 2.2 1.5 2.2 1.8 1.5 13.4-.4 6.5-.5 21-.2 32 .6 19.9.6 20.2-1.5 21.3-1.1.7-2.1 2-2.1 3 0 1.6 1 1.9 6.8 2.3 7.8.6 10.1-.6 8.2-4.2-.6-1.2-1.8-1.9-2.5-1.6-.8.3-1.7.1-2-.4-.9-1.4-1-60-.1-60.2.7-.3 4.4 6 10.6 17.7.6 1.1 1.9 3.3 3 5 1.1 1.6 2.4 3.9 3 5s1.6 2.9 2.3 4c9.2 15.3 14.4 24.4 16.9 29.8 2 4.2 2.6 4.7 5.1 4.5l2.9-.3.4-35c.3-19.2.8-35.3 1-35.7.3-.4 1.4-.8 2.5-.8 1.6 0 2-.6 1.7-2.8-.3-2.7-.4-2.7-8.1-2.9-6.7-.1-7.8.1-8.8 1.8zm-438.5 8.2c-.3.9-.3 2.9.1 4.4l.6 2.6 2.2-2.1 2.1-2.2-2.1-2.2c-2-1.9-2.3-2-2.9-.5zm32 .5c-.6.4-1.4 1.7-1.8 2.9s-1.7 2.3-2.9 2.5c-1.4.2-2.3 1.1-2.5 2.7-.3 1.9 0 2.2 1.3 1.7 1.1-.4 2.5.2 4 1.6 2.7 2.8 3.3 11.9.9 13.8-1.8 1.6-1.8 4.6.1 5.4.8.3 1.5 1.6 1.5 3s.4 2.7.9 3.1c1.8 1 2.6-2 2.6-9.4 0-8.9 1.5-10.2 4.6-3.8 2.6 5.3 2 12.6-1.2 15.6-1.1 1-2.4 3.1-2.8 4.7-.7 2.6-1.2 2.9-4.9 2.7-4.9-.2-5.5 1-5 9.8.3 4.6.6 5.4 2.4 5.7 2.9.4 6.4-5.3 6.4-10.2 0-5.6 2.5-4.6 4.5 1.9 1.7 5.3 1.7 5.6 0 7.5-1.4 1.5-1.8 3.9-2 9.7-.1 4.3-.7 8.8-1.3 10-.7 1.2-1.2 3.7-1.2 5.6s-.7 4-1.5 4.7c-1 .9-1.5 3.2-1.5 7.6 0 3.4-.4 6.6-1 6.9-1.3.8-1.3 4.2.1 5 1.6 1.1 6.7-1.5 7.2-3.6.3-1 .3-3.6 0-5.7-.3-2.3.1-5.3 1.1-7.6.9-2.1 1.6-4.7 1.6-5.7 0-1.1.9-4.5 2-7.6 2.4-6.8 2.5-9.9.5-10.7-2.1-.8-1.9-2 .7-3.1 1.3-.6 2.4-1.9 2.6-3 .8-6.7 3.7-18.2 4.9-19.6.7-.8 1.3-2.2 1.3-3 0-.9.7-2.4 1.5-3.5.9-1.2 1.4-4.3 1.5-8.9 0-6.4-.3-7.5-3.5-12.4-2-3-3.4-6-3.1-6.8.6-1.5 6.6-1.8 6.6-.3 0 .5.7 1 1.5 1 .9 0 1.8.7 2.1 1.5.4.8 1.8 1.5 3.4 1.5 2 0 2.9-.6 3.4-2.3.4-1.7-.3-3-3.6-6-4.9-4.4-6.5-4.5-11.8-1.2-4.8 3-5.3 3.1-8.5.3-1.7-1.5-10-5.4-10-4.8 0 0-.5.4-1.1.8zm3.1 9c0 4.6-1.9 4.4-2.3-.2-.3-2.8 0-3.7 1-3.4.7.3 1.3 1.9 1.3 3.6zm-2.7 41.4c-.2 1.3-.7 2.3-1.3 2.3-.5 0-1.1-1-1.3-2.3-.2-1.5.2-2.2 1.3-2.2s1.5.7 1.3 2.2zm-30.8-39.8c-1.2 2-2.7 3.6-3.3 3.6-.7.1-2.8 2.1-4.7 4.5-1.9 2.5-4 4.5-4.7 4.5-.6 0-1.5.9-1.8 2s-1.1 2-1.6 2-.9.9-.9 2 .5 2 1.1 2c.7 0 .9 1 .5 2.4-.3 1.4-.2 2.8.4 3.1.5.3 1 1.7 1 3.1s.7 2.7 1.5 3c.8.4 1.5 1.6 1.5 2.8 0 2.4 4 6.6 6.3 6.6.8 0 1.7.7 2.1 1.5.3.9 1.8 1.5 3.6 1.5h3v7c0 5.1-.6 8-2.1 11-1.2 2.2-1.9 4.8-1.6 5.8 1.7 5.4 3.5 9.1 5.5 11.6 2.8 3.6 2.8 4.2-.3 9.1-1.3 2.2-2.5 4.9-2.5 6.1 0 2.3-2.6 8-4.1 8.9-.5.4-.9 1.9-.9 3.6 0 3.4 1.7 3.8 5.8 1.2 3.8-2.4 4.3-3.4 3.7-6.6-.3-1.9 0-3 1-3.3.8-.4 1.5-1.6 1.5-2.8 0-4.2 1.2-6.4 4.5-8.2 4.6-2.5 7.1-8.4 4.6-11-.6-.5-.6-2.8 0-5.7.5-2.9.5-7.4 0-11-.9-6.3-3.9-14.7-5.3-14.7-.5 0-.8-1.7-.8-3.8 0-4.8-1-8.3-2.1-7.6-.5.3-2.5 0-4.3-.7-3.2-1.2-3.5-1.6-3.4-5.3.1-4.2 2.1-7.6 4.4-7.6 2.1 0 2.5 1.6.9 4.6-1.6 3.1-1.2 4.5.7 2.6 1.6-1.6 3.8-1.5 3.8.2 0 .8.7 1.6 1.5 2 1.1.4 1.5 2.2 1.5 7.2 0 4.8.3 6.5 1.3 6.2.6-.3 1.3-2.1 1.5-4.1s.7-3.7 1.3-3.7c1.4 0 1-3.2-.6-5.4-.8-1.1-1.5-2.8-1.5-3.8 0-1.1-1.3-3.6-2.9-5.6s-3.2-4.7-3.5-5.9c-.4-1.2-1.5-2.5-2.6-2.8-1.4-.4-2-2-2.5-6.5-.4-3.7-1.3-6.5-2.5-7.5-1.7-1.5-1.9-1.4-4 1.9zm4 7.5c.5 1.1 1 3 1 4.2 0 2.5-3.6 6.9-5.7 6.9-.7 0-1.3 1.1-1.3 2.5s-.4 2.5-1 2.5c-.5 0-1 .6-1 1.4s-.9 1.8-2 2.1c-2 .6-2.9 4.5-1 4.5.6 0 1.5 1.2 2.1 2.7l1.1 2.8 1.5-2.3c1.9-2.8 2.6-2.8 5.7.3 2 2 2.2 2.6 1 3.5-2.9 2.4-12.4-1.4-12.4-5 0-1.1-.4-2-.9-2-1.4 0-2.2-3.1-1.3-4.4.5-.6 1.2-2.3 1.6-3.7.3-1.5 1.7-3.4 3.1-4.3s2.5-2.3 2.5-3.2c0-.8.7-1.7 1.5-2 .8-.4 1.5-1.7 1.5-2.9 0-5.2 2.1-7.1 4-3.6zm10.5 48.1c1 1.1 1.5 2.6 1.1 3.5-.7 1.9-2.6 1.1-2.6-1.1 0-.8-.4-1.4-1-1.4-.5 0-1-.7-1-1.5 0-2.1 1.3-1.9 3.5.5zm-3.4 8.2c1.3 1.7 1.8 3.9 1.9 7.9 0 4.4.4 5.8 1.7 6.3 1.2.5 1.3 1 .5 1.8-1.7 1.7-7.4-5-6.7-8 .3-1.2-.1-3.5-.8-5-2.5-4.9-.1-7 3.4-3z"/><path d="m444 224.2c0 1.4.7 2.8 1.5 3.2 1.9.7 1.9-1.3 0-3.8-1.4-1.9-1.5-1.9-1.5.6zm-2.3 10.5c-.4.3-.7 1.8-.7 3.2v2.5l2.1-2.1c1.2-1.1 1.8-2.6 1.5-3.2-.8-1.2-1.9-1.4-2.9-.4zm4.1 8.5c-.3 3.9-.1 5.6 1.1 6.5 3.7 3.1 6.1-.1 3-4-1-1.4-1.9-3.7-1.9-5.1 0-4.8-1.8-2.7-2.2 2.6z"/></svg>' },
              { name: "Nike", tagline: "Just Do It", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-18 fill-neutral-300" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M34.175 107.36c-1.488 0-2.653 1.041-2.653 2.56 0 1.52 1.171 2.555 2.653 2.555 1.481 0 2.653-1.042 2.653-2.555 0-1.519-1.166-2.56-2.653-2.56zm0 4.383c-1.061 0-1.848-.775-1.848-1.823 0-1.047.781-1.828 1.848-1.828 1.054 0 1.847.793 1.847 1.828 0 1.029-.8 1.823-1.847 1.823zM59.99 98.406H47.075l1.468-22.448-8.387 22.448H28.163l19.029-50.739h12.761L58.48 70.423l8.546-22.756H79.02L59.99 98.406zM61.548 98.406l19.028-50.739h11.993L73.541 98.406H61.548z"/><path d="M26.78 80.917c-16.759 19.681-32.568 45.868-18.604 57.927 13.531 11.686 30.444 4.767 41.976.154s138.995-59.965 138.995-59.965c1.23-.615 1-1.384-.538-1-.62.155-138.764 37.593-138.764 37.593-17.53 4.921-37.518-5.804-23.065-34.709z"/><path d="M34.627 110.1c.372-.018.663-.21.663-.725 0-.664-.434-.831-1.159-.831h-1.042v2.753h.695v-1.172h.117l.633 1.172h.799l-.706-1.197zm-.446-.446h-.396v-.639h.334c.205 0 .44.024.44.291 0 .286-.136.348-.378.348zM154.733 47.512c-1.488 0-2.653 1.042-2.653 2.56 0 1.519 1.172 2.554 2.653 2.554s2.653-1.042 2.653-2.554c.001-1.518-1.164-2.56-2.653-2.56zm0 4.384c-1.061 0-1.848-.775-1.848-1.823 0-1.047.781-1.828 1.848-1.828 1.054 0 1.848.793 1.848 1.828 0 1.029-.8 1.823-1.848 1.823z"/><path d="M155.186 50.252c.372-.018.664-.21.664-.725 0-.664-.435-.831-1.159-.831h-1.042v2.752h.694v-1.171h.118l.632 1.171h.8l-.707-1.196zm-.447-.446h-.396v-.639h.335c.204 0 .44.025.44.292 0 .285-.137.347-.379.347zM146.831 56.124l3.223-8.457H113.46l-12.565 15.222 5.801-15.222H94.549L75.673 98.406h11.993l8.059-21.218.552 21.218 36.799-.08 3.503-9.76h-13.991l4.597-12.3h11.531l3.548-9.456h-11.531l3.953-10.686h12.145zm-38.656 38.899l-.769-26.445 18.133-19.909-17.364 46.354z"/></g></svg>' },
              { name: "New Balance", tagline: "Endorsed by No One", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756" class="size-18 fill-neutral-300"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M80.323 92.735l-21.51.766 20.424 1.135 1.086-1.901zM77.75 97.255l-21.561.767 20.5 1.139 1.061-1.906zM75.177 101.813l-21.534.756 20.475 1.138 1.059-1.894zM72.657 106.348l-21.561.768 20.451 1.136 1.11-1.904zM99.014 69.92l-27.454.977 27.532 1.53-.078-2.507zM98.84 65.434l-24.663.865 24.741 1.419-.078-2.284zM98.664 61.107l-21.974.723 22.08 1.226-.106-1.949zM98.516 56.665l-19.261.644 19.337 1.142-.076-1.786zM98.391 53.074H81.639l16.777.89-.025-.89zM70.059 110.881l-21.509.779h21.07l.439-.779z"/><path d="M142.953 53.219h-30.998l-.879 1.556 15.512.823c.182 0 .182.258-.078.258l-16.338.546-1.576 2.758 15.406.91c.207.026.156.31-.025.31l-16.365.538-1.523 2.641 15.381.854c.336.026.336.311 0 .311l-16.338.573-1.551 2.762 15.33.879c.336.026.311.336 0 .336l-16.338.582-1.578 2.728 15.355.853c.232.026.26.311-.051.311l-47.077 1.577 44.673 2.482c.283 0 .258.362-.053.362L66.689 79.85l44.673 2.481c.207 0 .258.336-.053.336l-47.231 1.706 44.673 2.482c.182.026.361.362-.025.388L61.57 88.921l44.672 2.481c.129.026.258.362-.051.362l-23.733.846.078 2.142 21.147 1.175c.154.026.232.336-.053.336l-21.016.747.103 2.396 18.356 1.02c.18.026.258.388-.053.388l-18.2.639.079 2.629 15.641.869c.18.025.232.361-.078.361l-15.485.553.103 2.892 12.926.718c.182.026.182.337-.077.337l-12.797.463.052 1.243h41.726c11.064 0 20.99-8.066 22.852-14.478 1.863-6.411 1.863-12.202-7.031-15.097 4.965-1.138 13.598-6.737 15.305-14.478 1.548-7.033-1.036-14.22-13.083-14.246zm-20.988 44.9h-12.822l7.238-12.823h9.514c9.824 0 5.066 12.823-3.93 12.823zm16.596-27.509c-.414 1.551-3.518 5.481-7.445 5.481h-9.514l6.1-10.754h4.861c6.203.207 6.41 3.723 5.998 5.273zM189.922 130.099c0-4.969-4.131-9.131-9.1-9.131-5.098 0-9.26 4.228-9.26 9.422a9.253 9.253 0 0 0 9.293 9.292c3.773 0 7.355-2.581 8.42-6.098h-4.711c-.936 1.484-2.16 2.161-3.84 2.161-2.129 0-4.031-1.452-4.645-3.517h13.615c.163-.999.228-1.484.228-2.129zm-13.971-1.244c.613-2.42 2.549-3.969 4.936-3.969 2.389 0 4.26 1.517 4.84 3.969h-9.776zM128.756 121.829v1.449c-1.354-1.452-3.316-2.278-5.414-2.278-4.646 0-8.607 3.968-8.607 9.131 0 4.871 3.504 9.24 8.699 9.24 2.291 0 4.033-.529 5.678-2.4v2.291h3.938v-17.433h-4.294zm-4.809 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM11.417 120.967c-1.774 0-3.129.613-4.614 2.13v-1.71H2.834v17.875h4.292v-8.422c0-2.29.193-5.937 3.355-5.937 2.968 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM38.081 130.099c0-4.969-4.13-9.131-9.099-9.131-5.098 0-9.26 4.228-9.26 9.422a9.254 9.254 0 0 0 9.292 9.292c3.775 0 7.356-2.581 8.421-6.098h-4.71c-.936 1.484-2.162 2.161-3.84 2.161-2.129 0-4.033-1.452-4.646-3.517h13.615c.163-.999.227-1.484.227-2.129zm-13.97-1.244c.613-2.42 2.549-3.969 4.937-3.969s4.259 1.517 4.84 3.969h-9.777zM108.686 139.247h4.291v-23.844h-4.291v23.844zM144.371 120.967c-1.775 0-3.131.613-4.615 2.13v-1.71h-3.969v17.875h4.293v-8.422c0-2.29.193-5.937 3.355-5.937 2.967 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM161.729 124.904c1.967 0 3.096.646 4.162 2.452h4.838c-1.322-3.839-4.709-6.389-8.84-6.389-5.227 0-9.422 4.162-9.422 9.293 0 5.162 4.227 9.421 9.422 9.421a9.579 9.579 0 0 0 7.033-3.13c.904-1 1.227-1.581 1.807-3.161h-4.838c-1.002 1.548-2.291 2.354-3.904 2.354-3.002 0-5.227-2.323-5.227-5.421 0-3.128 2.129-5.419 4.969-5.419zM54.483 132.293l-3.039-10.905h-3.453l-3.072 10.905-3.633-10.905H37.5l5.968 17.874h2.749l3.485-11.582 3.387 11.582h2.885l5.723-17.874h-3.548l-3.666 10.905zM77.474 120.986c-2.097 0-4.059.826-5.414 2.277v-7.859h-4.292v23.843h3.936v-2.29c1.646 1.871 3.388 2.399 5.679 2.399 5.195 0 8.699-4.368 8.699-9.24.001-5.162-3.961-9.13-8.608-9.13zm-.605 14.69a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM101.527 121.829v1.449c-1.355-1.452-3.316-2.278-5.414-2.278-4.646 0-8.609 3.968-8.609 9.131 0 4.871 3.505 9.24 8.699 9.24 2.291 0 4.033-.529 5.679-2.4v2.291h3.936v-17.433h-4.291zm-4.808 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821z"/></g></svg>' },
              { name: "The North Face", tagline: "Never Stop Exploring.", icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-18 fill-neutral-300" viewBox="0 0 192.744 192.744"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M119.305 64.872v-3.816h-15.266v20.952h15.266v-3.456h-11.018v-5.688h9.649V69.12h-9.649v-4.248h11.018zM115.057 84.168v8.064h-8.354v-8.064h-4.318v20.881h4.318v-9.361h8.354v9.361h4.248V84.168h-4.248zM119.305 110.951v-3.742h-15.266v21.238h15.266v-3.814h-11.018v-5.617h9.649v-3.455h-9.649v-4.61h11.018zM101.592 61.056h-4.248v8.064h-8.352v-8.064h-4.248v20.952h4.248v-9.36h8.352v9.36h4.248V61.056zM66.456 61.056v3.816h6.48v17.136h4.248V64.872h6.48v-3.816H66.456zM53.064 83.592c-6.696 0-10.224 3.816-10.224 11.016 0 7.56 3.528 11.304 10.224 11.304s10.152-3.744 10.152-11.304c0-7.2-3.456-11.016-10.152-11.016zm-5.616 11.016c0-4.824 1.872-7.2 5.616-7.2 4.032 0 5.904 2.376 5.904 7.2 0 5.113-1.872 7.56-5.904 7.56-3.744 0-5.616-2.447-5.616-7.56zM36.72 84.168v14.76l-8.352-14.76h-4.536v20.881h4.032V90.36l8.568 14.689h4.536V84.168H36.72zM56.52 115.848v-4.897h10.728v-3.742H52.272v21.238h4.248v-8.855h9.432v-3.744H56.52zM100.801 87.912v-3.744H83.664v3.744h6.408v17.137h4.32V87.912h6.409zM74.232 97.057c1.368 0 2.448.215 2.952.791l.792 7.201H82.8v-.504c-.504-.289-.792-1.584-.792-4.033 0-2.951-1.08-4.536-2.664-5.328 2.16-.864 3.24-2.448 3.24-5.112 0-3.744-2.16-5.904-6.696-5.904H65.376v20.881h4.32v-7.992h4.536zm-4.536-3.529v-5.616h5.328c2.16 0 3.24.792 3.24 2.664s-1.08 2.952-3.456 2.952h-5.112zM77.184 107.209h-5.112l-7.488 21.238h4.536l1.656-4.607h7.776l1.296 4.607h4.608l-7.272-21.238zm-2.664 4.822l2.664 8.354h-5.328l2.664-8.354zM98.137 114.191h4.248c-.217-1.871-.793-3.455-2.09-4.824-1.871-1.584-4.031-2.664-6.983-2.664s-5.112 1.08-6.984 2.953c-1.584 1.871-2.664 4.535-2.664 8.064 0 7.488 3.168 11.23 9.36 11.23 5.4 0 8.351-2.664 9.361-7.775h-4.248c-.576 2.447-2.449 3.744-4.825 3.744-3.528 0-5.112-2.375-5.112-6.984 0-5.039 1.584-7.488 5.112-7.488 2.376 0 3.745 1.369 4.825 3.744zM44.712 128.16h.072-.072zm.072 0c.72 0 1.296-.289 1.729-.648.36-.432.647-1.008.647-1.799 0-.865-.288-1.441-.647-1.801-.432-.359-1.008-.576-1.729-.576h-.072c-.864 0-1.44.217-1.8.576-.359.359-.576.936-.576 1.801v.07c0 .721.216 1.297.576 1.729.36.359.937.648 1.8.648h.072zm-.072.576c-1.008 0-1.728-.359-2.232-.865-.504-.504-.72-1.223-.72-2.088v-.07c0-1.01.216-1.729.72-2.232.504-.504 1.224-.721 2.232-.721h.072c.864 0 1.584.217 2.088.721s.864 1.223.864 2.232c0 .936-.36 1.654-.864 2.158a2.921 2.921 0 0 1-2.088.865h-.072zm.288-3.312h.072c.288 0 .432-.145.432-.504v-.072s-.072 0-.072-.072c-.072-.072-.216-.072-.432-.072h-.792v.721H45v-.001zm.504.504l.576.721c.072.143 0 .287-.072.359-.144.145-.36.072-.432 0l-.72-1.008h-.648v.791c0 .145-.144.289-.288.289s-.288-.145-.288-.289v-2.375c0-.145.144-.287.288-.287H45.072c.288 0 .576.07.72.215.072.072.144.072.144.145.144.145.144.287.144.432 0 .575-.144.862-.576 1.007zM122.256 61.056c13.393 0 24.984 4.896 34.344 14.256 9.648 9.648 14.473 21.168 14.473 34.631v18.504h-19.584v-19.08c0-7.486-2.664-13.967-8.064-19.295-1.297-1.368-2.664-2.448-4.248-3.528-4.32-2.952-9.432-4.248-14.76-4.248h-2.16v-21.24h-.001zm27.359 67.391h-15.264v-14.76c0-2.447-.791-4.32-2.447-5.904-1.584-1.654-3.744-2.447-5.904-2.447h-3.744V84.168h2.16c5.615 0 10.439 1.584 14.76 4.824 1.08.504 2.16 1.584 2.951 2.376 5.113 5.113 7.488 11.017 7.488 18v19.079zm-17.135 0h-10.225v-21.238H126c1.656 0 3.24.574 4.607 1.871 1.08 1.08 1.873 2.736 1.873 4.607v14.76z"/></g></svg>' },
              { name: 'Superdry', tagline: 'Extremely Dry (Please)', icon: '<svg xmlns="http://www.w3.org/2000/svg" id="svg8826" class="size-18 fill-neutral-300" viewBox="0 0 39.952 9.411"><g id="layer1" transform="translate(140.172 -342.187)"><g id="g9019"><path id="path8830" fill="#ff5100" stroke-width=".265" d="M-102.05 347.981l-.015-.415c-.014-.424-.101-.65-.43-.767.334-.107.518-.4.518-.83 0-.678-.363-.996-1.118-.996h-1.687v3.511h.715v-1.367h.76c.396 0 .503.142.517.557l.01.37c.005.191.03.338.083.44h.783v-.107c-.131-.068-.131-.19-.135-.396m-1.176-1.474h-.841v-.928h.875c.334 0 .498.161.498.464 0 .322-.17.464-.532.464" class="st0"/><path id="path8832" fill="#ff5100" stroke-width=".265" d="M-103.458 343.616c-1.712 0-3.105 1.407-3.105 3.136s1.393 3.135 3.105 3.135 3.105-1.406 3.105-3.135c0-1.73-1.393-3.136-3.105-3.136m0 5.539c-1.312 0-2.38-1.078-2.38-2.403s1.068-2.403 2.38-2.403c1.312 0 2.38 1.078 2.38 2.403s-1.068 2.403-2.38 2.403" class="st0"/></g><g id="g9013"><path id="path8836" stroke-width=".265" d="M-140.04 347.652c.069 1.33.972 2.103 2.546 2.103 1.6 0 2.487-.764 2.487-2.05 0-.643-.25-1.112-.757-1.399-.388-.217-.869-.339-1.455-.487-1.023-.26-1.496-.26-1.496-.851 0-.478.37-.756 1.041-.756.765 0 1.187.322 1.23.93h1.222c-.043-1.252-.886-1.982-2.34-1.982-1.557 0-2.383.679-2.383 1.886 0 .651.232 1.138.67 1.416.405.261.87.348 1.368.46 1.136.26 1.652.374 1.652.947 0 .522-.37.791-1.119.791-.85 0-1.316-.313-1.41-1.008h-1.256z" class="st1"/><path id="path8838" stroke-width=".265" d="M-130.688 344.968h-1.222v2.728c0 .608-.37.973-.938.973-.524 0-.706-.287-.706-.913v-2.788h-1.221v3.145c0 1.06.5 1.59 1.506 1.59.576 0 1.04-.226 1.385-.669v.547h1.196v-4.613z" class="st1"/><path id="path8840" stroke-width=".265" d="M-130.392 351.432h1.188v-2.424c.3.478.765.73 1.35.73 1.067 0 1.876-.965 1.876-2.485 0-1.477-.784-2.442-1.893-2.442-.594 0-1.007.243-1.36.782v-.625h-1.16zm3.2-4.127c0 .86-.387 1.364-.989 1.364-.645 0-1.023-.487-1.023-1.364 0-.947.352-1.433.997-1.433.654 0 1.015.495 1.015 1.433" class="st1"/><path id="path8842" stroke-width=".265" d="M-124.483 346.792c.051-.625.37-.955.894-.955.568 0 .887.33.904.955zm1.78 1.39c-.155.357-.421.513-.834.513-.594 0-.913-.374-.947-1.094h3.055c.008-.113.008-.218.008-.322 0-1.59-.8-2.476-2.194-2.476-1.316 0-2.133.93-2.133 2.441 0 1.555.851 2.494 2.15 2.494 1.085 0 1.867-.591 2.117-1.556h-1.222z" class="st1"/><path id="path8844" stroke-width=".265" d="M-121.11 349.58h1.223v-2.44c0-.695.344-1.043 1.006-1.043h.404v-1.25c-.06-.01-.12-.01-.18-.01-.585 0-.998.287-1.317.921v-.79h-1.135z" class="st1"/><path id="path8846" stroke-width=".265" d="M-117.33 347.244c0-.86.388-1.364.99-1.364.645 0 1.024.487 1.024 1.364 0 .947-.353 1.434-.998 1.434-.653 0-1.015-.496-1.015-1.434m3.2-3.909h-1.186v2.206c-.302-.477-.775-.73-1.36-.73-1.067 0-1.876.965-1.876 2.485 0 1.477.783 2.441 1.893 2.441.594 0 1.015-.243 1.368-.781v.625h1.162z" class="st1"/><path id="path8848" stroke-width=".265" d="M-113.871 349.58h1.222v-2.44c0-.695.344-1.043 1.006-1.043h.405v-1.25c-.06-.01-.12-.01-.18-.01-.586 0-.999.287-1.317.921v-.79h-1.136z" class="st1"/><path id="path8850" stroke-width=".265" d="M-110.478 351.432c.215.026.388.034.516.034.878 0 1.205-.278 1.472-1.06l1.875-5.439h-1.282l-.937 3.329-.964-3.328h-1.343l1.644 4.665a.398.398 0 0 1 .025.13c0 .462-.24.687-.722.687-.069 0-.172 0-.285-.018v1z" class="st1"/><path id="path8852" stroke-width=".265" d="M-133.288 344.086s.169-.17.21-.249c0 0 .137.177.238.257l.114-.198s-.211-.197-.238-.26c0 0 .14-.302.18-.632l-.092-.128s-.048.009-.074.009h-.296s-.052-.003-.072-.013v.233s.026-.006.078-.006h.224s-.042.268-.065.327c0 0-.094-.222-.1-.304l-.16.105s.092.327.15.416c0 0-.14.204-.221.266z" class="st1"/><path id="path8854" stroke-width=".265" d="M-133.564 344.107c-.064.018-.296.015-.296.015l-.056-.226c.03.01.225.013.225.013.071 0 .078-.18.078-.18.046-.404.029-.706.029-.706h-.117v.82l-.09-.003h-.277l-.104.003.01-.105v-.383l-.078.187a1.88 1.88 0 0 1-.111-.246v1.056c0 .064.01.115.01.115h-.24a.61.61 0 0 0 .016-.115v-.905c-.04.207-.202.469-.202.469l-.12-.223c.231-.338.292-.716.292-.716h-.133l-.09.013v-.252l.077.01h.16v-.321c0-.03-.014-.082-.014-.082h.257c-.01.016-.02.088-.02.088v.32h.085c.02 0 .052-.008.052-.008v.233c-.01-.003-.058-.006-.058-.006h-.072c.026.117.188.347.188.347v-.282c0-.017-.006-.079-.006-.079.013.003.072.006.072.006h.204l.143-.308h-.33c-.082 0-.144.007-.144.007v-.236c.016.006.117.013.117.013h1.219a.802.802 0 0 0 .117-.01v.24c-.017-.007-.115-.01-.115-.01h-.617l-.078.167h.13c.023 0 .091-.006.091-.006s-.026.804-.055.967c0 0-.02.28-.15.319m-.315-.949h-.11v.486h.11z" class="st1"/><path id="path8856" stroke-width=".265" d="M-134.266 344.398v-.247s.072.01.097.01h1.309l.11-.008v.242s-.06-.01-.104-.01h-1.315s-.07.002-.097.013" class="st1"/><path id="path8858" stroke-width=".265" d="M-130.798 343.46c-.02-.003-.09-.003-.09-.003h-.742c-.042 0-.104.003-.104.003.007-.02.013-.125.013-.125v-.235h-.321c.003.967-.26 1.357-.26 1.357l-.185-.216c.243-.345.198-1.599.198-1.599 0-.026-.01-.133-.01-.133.013.01.153.01.153.01h.669v-.092c0-.023-.006-.086-.006-.086h.27c-.01.023-.01.079-.01.079v.095h.728c.042 0 .107-.006.107-.006v.232c-.016-.003-.091-.003-.091-.003h-.321v.154h.33c.02 0 .085-.01.085-.01v.223c-.013-.003-.075-.003-.075-.003h-.344v.276c0 .022.007.082.007.082m-.92-.725h-.32v.157h.32zm.68 0h-.442v.157h.442zm0 .364h-.442v.157h.442z" class="st1"/><path id="path8860" stroke-width=".265" d="M-131.854 343.591h1.03a.76.76 0 0 0 .082-.01l.12.135a6.28 6.28 0 0 0-.16.184c-.025.032-.26.207-.26.207.238.101.677.11.677.11l-.095.253c-.562-.066-.816-.223-.816-.223-.22.141-.766.223-.766.223l-.091-.236c.357-.003.644-.124.644-.124-.13-.07-.306-.323-.306-.323l-.162.01v-.22c.006.004.103.014.103.014m.592.417c.061-.016.282-.22.282-.22h-.546c.053.086.264.22.264.22" class="st1"/><path id="path8862" stroke-width=".265" d="M-129.465 342.43v.147h.289c.045 0 .1-.01.1-.01v.23c-.015-.003-.087-.01-.087-.01h-.3v.144h.32v.059c.223-.272.285-.64.285-.64l.25.04c-.007.059-.071.246-.071.246h.546c.045 0 .123-.01.123-.01v.25c-.015-.004-.12-.01-.12-.01h-.65c-.013.032-.14.216-.14.216h.576c.071 0 .113-.01.113-.01l.137.174c-.188.134-.605.646-.63.699-.027.052-.101.16-.03.21.072.049.267.026.374.023.107-.003.13-.105.13-.105.029-.093.013-.26.013-.26l.24.092c-.026.414-.15.45-.15.45-.11.075-.415.062-.415.062-.299 0-.377-.05-.377-.05-.221-.114-.039-.452.033-.57.071-.118.438-.489.438-.489h-.419a.532.532 0 0 0-.091.016v-.17l-.059.066-.113-.112v.584c0 .033.003.072.003.072-.013-.003-.091-.003-.091-.003h-.221v.15h.24c.04 0 .11-.005.11-.005v.233a1.074 1.074 0 0 0-.097-.01h-.263v.242a.43.43 0 0 0 .016.102h-.253c.007-.023.016-.105.016-.105v-.236h-.282c-.04 0-.108.01-.108.01v-.24c.01.01.104.014.104.014h.286v-.161h-.329a.736.736 0 0 0 .007-.079v-.653c0-.02-.007-.095-.007-.095.024.003.04.003.095.006h.234v-.15h-.305a1.224 1.224 0 0 0-.091.01v-.237c.009.01.1.013.1.013h.293v-.14c0-.03-.01-.077-.01-.077h.253c0 .01-.015.077-.015.077m.1.692h-.422v.128h.422zm0 .311h-.422v.128h.422z" class="st1"/><path id="path8864" stroke-width=".265" d="M-127.667 342.826l.188.024s.013.456-.068.676l-.192-.096s.079-.275.072-.604" class="st1"/><path id="path8866" stroke-width=".265" d="M-126.861 342.43h.874s.071 0 .088-.007v.459s0 .036.003.066l-.084-.003h-.78s-.082.006-.095.01l.003-.102v-.318s-.003-.072-.009-.105m.731.186h-.497v.155h.497z" class="st1"/><path id="path8868" stroke-width=".265" d="M-127.43 342.387h.254s-.013.069-.013.105v.442s.12-.147.13-.2l.132.158-.097.122s.056.006.097.006h.397s.085.004.098-.003V343.48h.097v-.375s0-.076-.003-.088l.11.003h.44s.071 0 .093-.003c0 0-.003.046-.003.075v.338l.006.075h-.565v.121h.465s.114 0 .13-.009v.217s-.052-.003-.133-.003h-.354s.116.183.552.344l-.124.23s-.444-.242-.542-.442v.453s.003.055.013.067h-.263s.019-.049.019-.084v-.43s-.172.276-.555.45l-.12-.188s.396-.154.552-.393h-.364s-.052.013-.062.013l.078.062-.114.22s-.194-.184-.21-.263c0 0-.076.345-.29.574l-.17-.19s.277-.242.31-.804c0 0 .032-.797.02-.941 0 0 0-.112-.011-.122m.228.807a32.37 32.37 0 0 0-.026.407c.007.042.165.233.165.233v-.217l.127.007h.432v-.115h-.452a.95.95 0 0 0-.084.007c.004-.017.004-.078.004-.078v-.325c0-.027-.01-.079-.01-.079-.017.03-.156.16-.156.16m.578-.003h-.215v.152h.215zm.721 0h-.243v.152h.243z" class="st1"/><path id="path8870" stroke-width=".265" d="M-123.986 342.439h-.323v.1l-.02 1.193c0 .047-.01.474.333.621 0 0 .946.303 1.223-.679 0 0 .052-.151.06-.164l-.284-.185s-.046.424-.257.632c-.211.21-.6.205-.702.064-.102-.141-.073-.406-.073-.665 0-.26.023-.77.026-.797l.017-.12" class="st1"/><path id="path8872" stroke-width=".265" d="M-122.489 342.754v.272h.363s-.178.571-.438.924l.263.165s.37-.756.458-1.1c0 0 .393-.036.442-.056l-.004-.272s-.118.044-.367.067l.087-.356-.303-.037s-.003.07-.007.091l-.062.322-.303-.007s-.106-.003-.13-.013" class="st1"/><path id="path8874" stroke-width=".265" d="M-121.289 342.885l.139-.225s.405.145.652.315l-.125.236s-.346-.225-.666-.326" class="st1"/><path id="path8876" stroke-width=".265" d="M-121.25 343.155h.274s-.026.08-.03.113c-.002.034 0 .387.017.457 0 0 .33.145.481.315l-.132.263s-.148-.175-.356-.296c0 0 .03.293-.224.39-.254.098-.563.017-.672-.114-.109-.131-.14-.43.105-.571 0 0 .175-.125.524-.051 0 0-.022-.423.014-.506m-.435.809c-.09.157.052.238.273.215.204-.022.149-.272.149-.272-.093-.02-.333-.101-.422.057" class="st1"/><path id="path8878" stroke-width=".265" d="M-120.2 342.821s.31.037.85-.033c0 0-.138-.333-.142-.366l.29-.04s.1.329.135.376c0 0 .406-.078.561-.142l.036.283s-.432.094-.507.1c0 0 .204.414.408.673l-.267.124s-.141-.175-.584-.155c0 0-.464-.007-.45.286.013.292.853.255 1.186.054l.036.305s-.5.185-1.012.108c0 0-.593-.068-.49-.598 0 0 .164-.595 1.15-.33 0 0-.228-.35-.251-.433 0 0-.66.074-.84.06l-.093.004-.022-.276" class="st1"/><path id="path8880" stroke-width=".265" d="M-118.12 342.59h.307s-.01.084-.007.127c0 0-.043.706.099 1.092 0 0 .165.528.35-.367l.227.216s-.145.638-.435.642c-.29.003-.554-.353-.54-1.71" class="st1"/><path id="path8882" stroke-width=".265" d="M-117.21 342.808l.243-.124s.4.51.48 1.27l-.246.104s-.02-.696-.478-1.25" class="st1"/><path id="path8884" stroke-width=".265" d="M-124.602 342.32h-.234c-.263.36-.394.728-.394 1.062 0 .334.131.7.394 1.062h.234a1.98 1.98 0 0 1-.302-1.062c0-.383.098-.726.302-1.062" class="st1"/><path id="path8886" stroke-width=".265" d="M-116.318 342.32c.204.336.303.679.303 1.062 0 .382-.1.726-.303 1.062h.235c.264-.362.393-.729.393-1.062 0-.334-.13-.701-.393-1.062z" class="st1"/></g></g></svg>' },
              { name: 'Supreme', tagline: 'The box logo', icon: '<svg viewBox="0 0 749.83 258.33" xmlns="http://www.w3.org/2000/svg" class="size-18"><path d="M0 0h749.83v258.33H0z" fill="#ee2c29"/><g fill="#fff"><path d="M505.07 79.7h28.05v5.43c16.88-6.89 33.28-10.19 46.57 4.76 7.57-3.2 14.46-7.38 21.93-9.12 21.74-5.15 36.87 8 34.16 30.17s-7 44.25-10.58 66.47h-28.43c1.55-9.9 3-19.5 4.66-29.11 1.74-10.67 3.59-21.35 5.34-32a.91.91 0 0 1 .09-.48c1.07-8.06-1.65-14.17-7.08-15.72-5.92-1.65-13.29 1.65-15.91 8.92s-3.6 15-5 22.61c-2.43 14.27-4.56 28.72-7.09 43a4.79 4.79 0 0 1-3.1 3c-8.35.29-16.79.09-25.72.09 1.75-11.06 3.5-21.83 5.24-32.6 1.65-10.38 3.5-20.67 5-31 .87-5.63-1.65-11.16-5.92-13.29s-9.8-.78-14.07 3.39c-5.43 5.34-5.72 12.42-6.89 19.21-3 18-5.82 36-8.83 54.15h-28.33c5.34-32.77 10.58-65.08 15.91-97.88zM249.3 167.61c-3 18.63-5.92 36.39-8.93 54.44h-28.43c7.76-47.55 15.43-94.8 23.19-142.25h28.43c-.29 2.42-.68 4.65-.87 6.59 5.82-2.23 11.45-5.33 17.46-6.59 20.38-4.37 37.26 6.3 43 26.39C331.39 135 311 169.45 281.61 176c-11.84 2.48-22.51.05-32.31-8.39zm45.21-41.92c.1-11-4.07-18.24-11-20.86s-14.94.29-20.86 7.47a31.62 31.62 0 0 0-7.28 23.78c.68 7.18 3.69 13.19 11 15.71 7 2.43 13-.19 18.15-4.94a30.9 30.9 0 0 0 9.99-21.16zM22.43 153.44c6.5-5.43 12.81-10.67 19.12-16 2.81 3.21 5.24 6.5 8.15 9.22 7 6.7 15.23 6.79 24 3.79 8.44-2.91 13.87-8.54 15.42-17.57 1-6.11-.77-11.25-6.11-14.65-3.78-2.42-7.86-4.37-11.84-6.5-2.42-1.26-4.94-2.43-7.37-3.59C29.61 91.44 35.24 54 59.89 36.71c16.4-11.45 33.38-10 50.46-1.84 3.68 1.75 7.08 4.17 11 6.5-5.53 6.89-10.67 13.29-15.72 19.5-4.56-2-8.83-4.36-13.39-5.72-10.77-3.3-20.47 1.16-25.42 11.26-3.3 6.79-1.85 12.9 4.65 16.69s13.2 6.69 19.7 10.18c12.13 6.51 21 15.72 22.9 30 3 21.93-8 40.94-28.33 50-24.11 10.54-48.74 3.06-63.31-19.84zM135.77 79.7h28.53c-3.4 20.76-6.6 41.34-10 61.81-1.36 8.25 1 11.45 9.22 12.13 10.28.87 15-3 16.59-13 3.2-20.19 6.6-40.37 10-60.94h28.43c-1.94 12.32-3.88 24.45-5.92 36.68-1.36 8.44-2.82 16.88-4.27 25.32-3.2 18.92-15.82 31.64-34.64 34.74-10.68 1.75-21.25 1.84-31.54-2-12.52-4.75-19.11-16.49-16.88-29.79 3.49-21.38 6.89-42.92 10.48-64.95zM486.64 132.78h-61c-.77 10.09 4.08 20.18 11.36 22.51 12.13 4 18.43-4.17 24.35-12.91 6.7 2.53 13.3 5 19.89 7.47-8.15 17.28-32.5 34.45-56.76 26.4-17.08-5.63-25.23-18.92-26.88-36.2-2.6-26.68 17.23-53.75 43.14-59.57 22.51-5 42.31 8 45.7 31 .97 6.74.2 13.92.2 21.3zm-58.42-17.47h35.13c-2.91-11-8.64-16.79-16-16.88-8.06-.1-15.92 6.79-19.13 16.88zM706.42 142.38c6.69 2.53 13.19 5 19.7 7.38-11.55 23.67-45.51 38.62-68.51 20.08-13.2-10.67-17.17-25.23-14.55-41.33 3.59-22.81 16.2-39.3 38.42-46.87 25.52-8.73 49 7.47 50.65 34.45.39 5.43.1 10.86.1 16.69h-61.62c-1.06 9.51 4.08 19.5 11.26 22.51 7.76 3.39 14.46 0 24.55-12.91zm1.36-26.78c-.49-9-7.57-17-15.24-17.27-8.34-.29-18.14 8.54-19 17.27zM401.25 79.6c-2.52 8.54-4.85 16.4-7.28 24.65a31 31 0 0 1-3.1-.58c-13.49-4.18-25.13 2.71-27.66 16.78-3.1 17.18-5.72 34.35-8.54 51.53-.29 1.74-.68 3.49-1 5.43h-28.3c5.34-32.7 10.58-65.11 15.91-97.71h28.14c-.09 2.23-.29 4.37-.48 6.89 9.8-7.38 20.57-8.35 32.31-6.99z"/></g></svg>' },
              { name: 'Converse', tagline: 'All stars', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-18 fill-neutral-300" viewBox="0 0 713.531 98.17"><path d="M155.49 0H98.271c-9.993 0-18.095 8.094-18.095 18.078v61.764c0 9.982 8.102 18.076 18.095 18.076h57.219c9.994 0 18.095-8.094 18.095-18.076V18.078C173.585 8.094 165.483 0 155.49 0zm-9.551 56.91l12.985 38.289-30.997-24.062-29.949 23.852 11.938-37.242L82.27 36.824h34.348l10.89-34.104 11.519 34.104h32.253L145.939 56.91zM377.85 98.168c-11.66 0-21.113-9.443-21.113-21.091V23.081c0-11.648 9.453-21.091 21.113-21.091h52.195v25.874h-45.453v9.277h45.453v25.876h-45.453v9.277h45.453V98.17l-52.195-.002zM261.403 23.081c0-11.648-9.452-21.091-21.112-21.091H182.72v96.18h27.858V27.863h22.97V98.17h27.857l-.002-75.089zM21.112 98.17C9.453 98.17 0 88.728 0 77.079V23.078C0 11.43 9.453 1.986 21.112 1.986h51.22v25.877H27.858v44.431h44.475V98.17H21.112zM260.199 1.986h28.836l19.06 58.59 19.549-58.59h28.835L324.223 98.17h-32.256L260.199 1.986zM584.66 98.168c11.66 0 21.113-9.443 21.113-21.091V58.233c0-11.647-9.453-21.09-21.113-21.09l-29.225-.002v-9.277h46.92V1.989h-53.662c-11.658 0-21.111 9.443-21.111 21.091v18.842c0 11.648 9.453 21.092 21.111 21.092h29.715v9.279h-50.83V98.17l57.082-.002zM687.402 98.17l-52.195-.002c-11.658 0-21.111-9.443-21.111-21.091V23.081c0-11.648 9.453-21.091 21.111-21.091h52.195v25.874h-45.451v9.277h45.451v25.876h-45.451v9.277h45.451V98.17zM504.145 61.656c7.973-3.014 13.643-10.713 13.643-19.733V23.081c0-11.648-9.453-21.091-21.111-21.091h-56.594v96.18h27.857V43.487l24.926 54.683h28.346l-17.067-36.514zM490.906 37.07h-22.971v-9.277h22.971v9.277zM710.744 6.271c-1.855-1.848-4.104-2.771-6.738-2.771-2.617 0-4.852.924-6.699 2.771-1.857 1.855-2.787 4.091-2.787 6.706 0 2.641.922 4.89 2.762 6.745 1.848 1.864 4.09 2.796 6.725 2.796s4.883-.933 6.738-2.796c1.859-1.864 2.787-4.113 2.787-6.745-.001-2.624-.928-4.86-2.788-6.706zm-.945 12.531c-1.59 1.606-3.521 2.409-5.793 2.409s-4.203-.803-5.791-2.409c-1.582-1.605-2.373-3.547-2.373-5.825 0-2.262.795-4.19 2.385-5.787 1.598-1.605 3.525-2.408 5.779-2.408 2.264 0 4.195.803 5.793 2.408 1.59 1.597 2.385 3.525 2.385 5.787 0 2.278-.795 4.22-2.385 5.825z"/><path d="M708.244 18.038c-.043-.086-.074-.268-.09-.544a11.971 11.971 0 0 1-.027-.776v-.764c0-.527-.189-1.066-.568-1.619-.381-.552-.982-.893-1.803-1.022.648-.104 1.154-.271 1.518-.505.682-.44 1.023-1.126 1.023-2.058 0-1.312-.541-2.192-1.621-2.641-.604-.25-1.555-.375-2.85-.375h-3.654v10.435h1.84v-4.117h1.451c.977 0 1.658.112 2.047.336.658.389.984 1.187.984 2.395v.829l.039.337c.01.042.018.082.027.116l.025.104h1.723l-.064-.131zm-2.824-5.511c-.389.156-.973.233-1.75.233h-1.658V8.98h1.568c1.02 0 1.76.129 2.221.388.463.26.693.769.693 1.528 0 .803-.357 1.347-1.074 1.631z"/></svg>' }
            ].map((brand, i) => (
              <div
                key={i}
                className="bg-zinc-900 px-6 py-3 flex flex-col items-center justify-center text-center group hover:bg-zinc-800/80 transition-colors cursor-default"
              >
                <div dangerouslySetInnerHTML={{ __html: brand.icon }}></div>
                <span className="text-zinc-600 text-[10px] mt-1.5 tracking-wider uppercase">
                  {brand.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 w-full">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Peaceful Sanctuary
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex gap-4 justify-center">
              {["🌱", "🪴", "🌿", "🌵"].map((plant, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-center text-2xl hover:scale-110 hover:border-green-500/30 transition-all cursor-default"
                >
                  {plant}
                </div>
              ))}
            </div>
            <div className="flex-1 text-center md:text-left gap-4">
              <p className="text-zinc-400 leading-relaxed">
                At home, I love growing plants. I enjoy growing indoor house plants and vegetables because they bring life and calm into my home while giving me a hands-on connection to nature year-round.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Caring for them is relaxing and rewarding and I share this with my family. It's satisfying to watch something thrive because of my attention and effort.
              </p>
              <p className="text-zinc-600 text-sm italic">
                "Patience is bitter, but its fruit is sweet."
              </p>
            </div>
          </div>
        </div>


        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            What Brings Me Happiness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-[#e35d34] p-0.5 transition-transform hover:rotate-[-0.2deg] hover:scale-[1.005]">
              <div className="relative h-full bg-[#1a1a1a] rounded-[10px] p-6 flex flex-col justify-between">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-24 h-8 border-2 border-[#e35d34] rounded flex items-center justify-center">
                    <span className="text-xs font-mono text-[#e35d34] uppercase tracking-wider block mr-1">Size:</span>
                    <span className="text-[#e35d34] font-bold font-mono text-xl">6.5</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[#e35d34] uppercase tracking-wider mb-1 block">25% OFF</span>
                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                      FRESH KICKS
                    </h4>
                    <p className="text-[#e35d34] text-xs font-mono mt-1">COLOR: BLACK & WHITE</p>
                  </div>

                  <div className="border-t border-dashed border-[#e35d34]/30 my-4" />

                  <p className="text-zinc-400 text-sm leading-relaxed max-w-[90%]">
                    A well designed sneaker is art. Comfort meets engineering, pure style and independence.
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Certified Authentic</span>
                    <div className="h-8 w-32 bg-white mt-1 px-1 flex items-center overflow-hidden">
                      <div className="h-full w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN-13-ISO-10939-10-44.svg/1200px-EAN-13-ISO-10939-10-44.svg.png')] bg-cover bg-center grayscale opacity-60"></div>
                    </div>
                  </div>
                  <Heart className="text-[#e35d34] group-hover:fill-[#e35d34] transition-all" size={24} />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 p-[1px] transition-transform hover:rotate-[0.2deg] hover:scale-[1.01]">
              <div className="relative h-full bg-zinc-900 rounded-[10px] flex">
                <div className="flex-1 p-6 flex flex-col justify-between border-r-2 border-dashed border-zinc-800 relative">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full z-10"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full z-10"></div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-white/70 uppercase tracking-widest border border-white/10">Admit One</span>
                      <Music className="text-pink-500 group-hover:animate-bounce" size={20} />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                        LIVE CONCERTS
                      </h4>
                      <div className="text-white/60 text-xs font-mono mt-1 flex gap-3">
                        <span>LOCAL</span>
                        <span>•</span>
                        <span>AUSTRALIA</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Nothing beats the raw energy of live music. The bass in your chest and the crowd in the air.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                    <div className="text-[10px] font-mono text-zinc-500">SECTION: MOSH</div>
                    <div className="text-[10px] font-mono text-zinc-500">ROW: FRONT</div>
                  </div>
                </div>

                <div className="w-12 bg-white/5 flex flex-col items-center justify-center p-2 gap-1 overflow-hidden relative">
                  <span className="text-[10px] font-mono text-zinc-600 -rotate-90 whitespace-nowrap">NO REFUNDS</span>
                  <div className="flex-1 w-full flex flex-col gap-1 my-2 opacity-30"></div>
                  <span className="text-[10px] font-mono text-zinc-600 -rotate-90">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Sporting Idols
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Baker 3", subtitle: "Baker Skateboards", cover: "/baker3.jpg" },
              { title: "Love Story", subtitle: "Torstein Horgmo", cover: "/horgasm1.jpg" },
              { title: "Video Days", subtitle: "Blind Skateboards", cover: "/videodays.png" },
            ].map((film, i) => (
              <div key={i} className="group flex flex-col gap-3">
                <div className="aspect-2/3 w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors relative flex items-center justify-center">
                  {film.cover ? (
                    <img src={film.cover} alt={film.title} className="w-full h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity bg-zinc-900" />
                  ) : (
                    <div className="text-center p-2">
                      <span className="text-zinc-500 font-medium text-sm">{film.title}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors truncate">{film.title}</h4>
                  <div className="text-zinc-500 text-sm truncate">{film.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Personal Quirks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                  <Utensils size={20} />
                </div>
                <h4 className="text-white font-medium">Favourite Food</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I love Tacos. Taco Bell, Guzmen & Gomez, Madmex ... it's all great.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                  <SquareDashed size={20} />
                </div>
                <h4 className="text-white font-medium">Anti-Stereotype</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I don't enjoy being easily categorised into a stereotype. I try to avoid becoming stale by exploring new topics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3 sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <Zap size={20} />
                </div>
                <h4 className="text-white font-medium">Fast Walker</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I walk with purpose. If you're walking slow in front of me, I will violently swear in my head.<br /><em className="text-zinc-500">Yes, I know the joke about my lastname.</em>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            How I Split My Attention
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#techGradient)"
                  strokeWidth="16"
                  strokeDasharray="175.93 251.33"
                  strokeDashoffset="0"
                  className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#bioGradient)"
                  strokeWidth="16"
                  strokeDasharray="37.7 251.33"
                  strokeDashoffset="-175.93"
                  className="drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#psychGradient)"
                  strokeWidth="16"
                  strokeDasharray="37.7 251.33"
                  strokeDashoffset="-213.63"
                  className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                />
                <defs>
                  <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="bioGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="psychGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Technology</div>
                  <div className="text-zinc-500 text-sm">70% — Software Systems</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-green-500 to-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <div>
                  <div className="text-white font-medium group-hover:text-green-400 transition-colors">Genetics & Neurology</div>
                  <div className="text-zinc-500 text-sm">15% — Biology, Biotech, Physiology</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <div>
                  <div className="text-white font-medium group-hover:text-purple-400 transition-colors">Psychology, Philosophy & History</div>
                  <div className="text-zinc-500 text-sm">15% — Mind, Culture, Ideas, Evolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Intellectual Influences
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Dennis Ritchie", subtitle: "Co-Founder of Unix & C", cover: "/dennis_ritchie6.jpg" },
              { title: "Steve Wozniak", subtitle: "Co-Founder of Apple", cover: "/woz.jpg" },
              { title: "Terry Davis", subtitle: "God's chosen programmer", cover: "/davis.jpg" },
              { title: "Elon Musk", subtitle: "Tech entrepreneur", cover: "/elon.jpg" },
              { title: 'Leonardo Da Vinci', subtitle: 'Renaissance polymath', cover: '/leonardo-da-vinci.jpg' },
              { title: 'Victor Davis Hanson', subtitle: 'Historian', cover: '/VictorDavisHanson.jpg' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col gap-3">
                <div className="aspect-square w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors relative flex items-center justify-center">
                  {item.cover ? (
                    <img src={item.cover} alt={item.title} className="w-full grayscale h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity bg-zinc-900" />
                  ) : (
                    <div className="text-center p-2">
                      <span className="text-zinc-500 font-medium text-sm">{item.title}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-amber-400 transition-colors truncate">{item.title}</h4>
                  <div className="text-zinc-500 text-sm truncate">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Biggest Regrets
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Dropping Sociology at Newcastle",
                desc: "My biggest blunder was dropping out of my sociology classes at the University of Newcastle. In hindsight, I wish I had stuck it out and learned more about the social sciences.",
                note: "Sometimes the classes you skip become the knowledge you crave later.",
                icon: <Frown />
              },
              {
                title: "Missing Title Fight Live",
                desc: "Title Fight toured Australia in 2014 and played at my favourite venue in Newcastle. Unfortunately I wasn't able to attend.",
                note: "They are my all time favourite band, and now they are on indefinite hiatus.",
                icon: <HeartCrack />
              }
            ].map((regret, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-red-500/40 hover:border-red-500/90 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                    {regret.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{regret.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {regret.desc}
                    </p>
                    <p className="text-zinc-500 text-sm mt-3 italic">
                      {regret.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Things I Love That Others Hate
          </h3>
          <div className="relative group overflow-hidden rounded-xl bg-[#2a2a2a]/75 p-8 border-l-8 border-pink-500 shadow-lg transition-transform">
            <div className="absolute inset-0 opacity-10 bg-radial-gradient(circle_at_50%_50%,#000_20%,transparent_20%),radial-gradient(circle_at_50%_50%,#fff_20%,transparent_20%)] bg-[size:8px_8px]"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 blur-[80px] rounded-full transition-colors"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-block line-through bg-black text-pink-500 font-black text-xs px-2 py-1 transform -rotate-3 mb-2 uppercase tracking-widest border border-pink-500/50">
                  VANDALISM
                </div>
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                  GRAFFITI
                </h4>
                <p className="text-zinc-400 font-mono text-sm mt-3 max-w-md bg-black/50 p-2 border-l border-pink-500">
                  "Turning grey cities into living galleries. If you don't like street art, then don't make buildings big blank white canvases."
                </p>
              </div>

              <div className="relative">
                <div className="bg-pink-500 text-black font-bold p-4 rounded-full w-24 h-24 flex items-center justify-center transform transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                  <SprayCan size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            What I Wish I Would Do More
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Motorbikes</h4>
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                    <Bike size={20} />
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  My dad bought my first bike when I was 3 years old. It remains my favourite way to risk my life.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="flex rounded bg-black/20 border border-zinc-700">
                  <X className="text-orange-400" />
                  <span className="text-[10px] font-mono text-zinc-500 px-2 py-1">Inactive License</span>
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Snowboarding</h4>
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Snowflake size={20} />
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Carving fresh powder. Always dreaming of Niseko and Whistler.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] font-mono border border-zinc-700 text-zinc-500 px-2 py-1 rounded bg-black/20">Alpine</span>
                <span className="text-[10px] font-mono border border-zinc-700 text-zinc-500 px-2 py-1 rounded bg-black/20">Adrenaline</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Bushwalking</h4>
                  <div className="p-2 bg-lime-500/10 rounded-lg text-lime-400">
                    <Trees size={20} />
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Running up and down mountains. Finding peace in the pulse and the silence of the bush.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] font-mono border border-zinc-700 text-zinc-500 px-2 py-1 rounded bg-black/20">National Parks</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Pub Billiards</h4>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Circle size={20} />
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  I never win, but I don't care. It's about the company and bar atmosphere.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] font-mono border border-zinc-700 text-zinc-500 px-2 py-1 rounded bg-black/20">8 Ball</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Alternate Universe
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="group relative bg-[#18181b] rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all shadow-2xl">

                <div className="absolute top-6 right-6 md:hidden z-20">
                  <div className="p-3 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-emerald-900/20 transition-colors">
                    <Caravan size={24} />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col md:flex-row md:gap-10 items-start">
                  <div className="md:w-1/3 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.2em] mb-3">Goal_001</h4>
                      <h3 className="text-3xl font-black text-white leading-none uppercase">The<br />Dream<br />Plan</h3>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-zinc-600">
                      <div className="p-3 bg-zinc-900 rounded-lg border border-emerald-900/20 text-emerald-700 transition-all">
                        <Caravan size={24} />
                      </div>
                      <div className="h-px flex-1 bg-zinc-800"></div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <p className="text-lg text-zinc-300 leading-relaxed font-serif italic border-l-4 pl-6 border-emerald-800 transition-colors">
                      "If I never had to work again, I'd buy a campervan and circle Australia. An indefinite road trip visiting every <span className="text-emerald-400 not-italic font-bold">skatepark</span> and beach along the coast. Just riding, meeting the locals, and mentoring the grommies."
                    </p>

                    <div className="mt-6 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      <span>Campervan,&nbsp;</span>
                      <span>Skateparks,&nbsp;</span>
                      <span>& Freedom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
            Thought Log
          </h3>
          <div className="rounded-lg bg-[#0c0c0c] border border-white/5 hover:border-white/10 p-6 font-mono text-xs md:text-sm leading-relaxed text-zinc-400 shadow-2xl overflow-x-auto">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <span className="text-zinc-600 shrink-0">[1654]</span>
                <span className="text-blue-500 font-bold shrink-0">[INFO]</span>
                <span className="text-zinc-300">"Better to be a warrior in a garden than a gardener in a war" — Miyamoto Musashi</span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-600 shrink-0">[1986]</span>
                <span className="text-yellow-500 font-bold shrink-0">[WARN]</span>
                <span className="text-zinc-300">"A man without hope is a man without fear" — Frank Miller</span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-600 shrink-0">[1882]</span>
                <span className="text-red-500 font-bold shrink-0">[ERROR]</span>
                <span className="text-zinc-300">"God is dead, god remains dead. And we have killed him." — Friedrich Nietzsche</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Favourite Actors
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Brad Pitt", subtitle: "", cover: "/brad_pitt.png" },
              { title: "Ryan Gosling", subtitle: "", cover: "/gosling.png" },
              { title: "Quentin Tarantino", subtitle: "", cover: "/tarantino.jpg" },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col gap-3">
                <div className="aspect-square w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors relative flex items-center justify-center">
                  {item.cover ? (
                    <img src={item.cover} alt={item.title} className="w-full grayscale h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity bg-zinc-900" />
                  ) : (
                    <div className="text-center p-2">
                      <span className="text-zinc-500 font-medium text-sm">{item.title}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-rose-400 transition-colors truncate">{item.title}</h4>
                  <div className="text-zinc-500 text-sm truncate">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
            Idolized Archetype
          </h3>
          <div className="group relative rounded-2xl bg-zinc-900 border border-red-900/30 overflow-hidden">
            <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors"></div>
            <div className="relative p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 flex items-center justify-center rounded-full bg-zinc-950 border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                <span className="text-7xl text-red-500 font-serif">♂</span>
              </div>
              <div className="text-center md:text-left space-y-4">
                <div>
                  <span className="text-xs font-mono text-red-500 uppercase tracking-widest">Roman Mythology</span>
                  <h4 className="text-3xl font-bold text-white mt-1">Mars</h4>
                  <p className="text-zinc-500 text-sm font-medium">The God of War & Agricultural Guardian</p>
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-xl">
                  Not mindless rage, but the virtuous, disciplined application of force which represents the protection of peace and the necessity of strength to preserve what is valued.
                </p>
              </div>
            </div>
          </div>
        </div> */}

      </section>
    </main>
  );
}