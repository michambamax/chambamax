export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute -inset-x-10 -top-10 h-[70%] pointer-events-none"
          style={{background:'radial-gradient(60% 60% at 20% 10%, #14B8A640, transparent 60%), radial-gradient(60% 60% at 80% 30%, #3B82F640, transparent 60%)'}} />
        <div className="container grid lg:grid-cols-2 gap-9 items-center pt-20 pb-14 relative">
          <div>
            <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold">
              Tu trabajo, <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#3B82F6,#14B8A6)'}}>sin fronteras</span>
            </h1>
            <p className="mt-4 text-[15px] md:text-base text-white/85 max-w-prose">
              Asesoría integral para <b>trabajo remoto</b>, <b>nómadas digitales</b>, soporte <b>legal y migratorio</b>, stack de <b>aplicaciones</b> y <b>pagos globales</b> (incl. Bitcoin) — todo en un solo lugar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicios" className="btn btn-primary">Explorar servicios</a>
              <a href="#contacto" className="btn btn-ghost">Comenzar ahora</a>
            </div>
            <div className="mt-5 p-4 rounded-2xl border border-white/10" style={{background:'linear-gradient(90deg,#3B82F626,#14B8A626)'}}>
              <b>Operación global:</b> orientación paso a paso, plantillas legales y guía para instalar tu stack remoto.
            </div>
          </div>
          <aside className="card">
            <h3 className="text-lg font-semibold text-secondary">Checklist del nómada digital</h3>
            <ul className="mt-2 space-y-2 text-sm text-white/90">
              <li>✔ Configuración de trabajo remoto segura (VPN/2FA)</li>
              <li>✔ Ruta migratoria y requisitos por país</li>
              <li>✔ Wallets y pasarelas de pago (₿/fiat)</li>
              <li>✔ Apps clave: productividad, firma, gestión fiscal</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="servicios" className="py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Trabajo Remoto Pro','Asesoría Migratoria','Apps & Productividad','Pagos Globales'].map((t,i)=>(
            <article key={i} className="card">
              <div className="w-10 h-10 grid place-items-center rounded-xl" style={{backgroundColor:'#14B8A629'}}>{['💻','🛂','📲','₿'][i]}</div>
              <h4 className="font-semibold text-base">{t}</h4>
              <p className="text-sm text-white/85">
                {i===0 && 'Arquitectura de herramientas, seguridad y mejores prácticas para operar desde cualquier lugar.'}
                {i===1 && 'Orientación legal y documentación para estancias, residencias y opciones de refugio cuando aplique.'}
                {i===2 && 'Implementación de apps para comunicación, gestión de proyectos, firma electrónica y facturación.'}
                {i===3 && 'On/Off-ramps, wallets y buenas prácticas para cobrar en cripto o divisas cumpliendo normativas.'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold">Hablemos de tu plan</h2>
          <p className="mt-2 text-white/85 max-w-prose">Cuéntanos tu situación y diseñamos un roadmap accionable en menos de 48 horas.</p>
          <div className="grid lg:grid-cols-12 gap-5 mt-6">
            <form className="lg:col-span-7 card space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('¡Gracias! Te contactaremos pronto.')}}>
              <label className="sr-only" htmlFor="name">Nombre</label>
              <input id="name" name="name" placeholder="Nombre" required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2" />
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" required className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2" />
              <label className="sr-only" htmlFor="msg">Mensaje</label>
              <textarea id="msg" name="msg" placeholder="¿Qué necesitas lograr?" rows={4} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2" />
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <aside className="lg:col-span-5 card space-y-3">
              <h4 className="font-semibold">Atención directa</h4>
              <p>WhatsApp: <a className="underline" href="https://wa.me/525525755265" target="_blank" rel="noreferrer">+52 55 2575 5265</a></p>
              <p>Email: <a className="underline" href="mailto:hola@chambamax.com">hola@chambamax.com</a></p>
              <p>Horario: Lun–Vie, 9:00–18:00 (GMT-6)</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
