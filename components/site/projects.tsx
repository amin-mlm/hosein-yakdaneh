'use client'

import Image from 'next/image'
import { useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { categories, projects, type Category, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

type Filter = 'All' | Category

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

function getColumnCount() {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

function useColumnCount() {
  return useSyncExternalStore(subscribe, getColumnCount, () => 3)
}

const ratioOf = (p: Project) => p.width / p.height

function chunkRows(items: Project[], perRow: number) {
  const rows: Project[][] = []
  for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow))
  return rows
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [active, setActive] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const columnCount = useColumnCount()

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )
  const rows = useMemo(() => chunkRows(visible, columnCount), [visible, columnCount])
  const averageRatio = visible.length ? visible.reduce((sum, p) => sum + ratioOf(p), 0) / visible.length : 1

  function openProject(project: Project) {
    setActive(project)
    dialogRef.current?.showModal()
  }

  function closeProject() {
    dialogRef.current?.close()
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Featured Projects"
            title={
              <span id="projects-title">
                Selected <em className="text-gold">works</em>
              </span>
            }
            description="Each image is shown in its original frame, exactly as composed, so proportion, light, and detail read as intended."
          />
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {(['All', ...categories] as Filter[]).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  'rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300',
                  filter === item
                    ? 'border-gold bg-gold text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground',
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="mt-16 flex flex-col gap-5 md:gap-6">
          {rows.map((row, ri) => (
            <div key={ri} className="flex gap-5 md:gap-6">
              {row.map((project, pi) => (
                <div key={`${filter}-${project.id}`} className="min-w-0" style={{ flex: `${ratioOf(project)} 1 0%` }}>
                  <ProjectCard project={project} delay={(ri + pi) * 90} onOpen={() => openProject(project)} />
                </div>
              ))}
              {row.length < columnCount && visible.length > row.length ? (
                <div aria-hidden="true" style={{ flex: `${averageRatio * (columnCount - row.length)} 1 0%` }} />
              ) : null}
            </div>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">New projects in this category are coming soon.</p>
        ) : null}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject()
        }}
        aria-labelledby="project-dialog-title"
        className="m-auto max-h-[92svh] w-[min(1100px,94vw)] overflow-y-auto rounded-2xl border border-border bg-popover p-0 text-foreground shadow-2xl backdrop:bg-background/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95"
      >
        {active ? (
          <div className="grid lg:grid-cols-5">
            <div className="bg-background lg:col-span-3">
              <Image
                src={active.image}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(min-width: 1024px) 660px, 94vw"
                className="h-auto w-full"
              />
            </div>
            <div className="relative flex flex-col gap-6 p-8 lg:col-span-2">
              <button
                type="button"
                onClick={closeProject}
                className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
              >
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Close project</span>
              </button>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{active.categories.join(' · ')}</p>
              <h3 id="project-dialog-title" className="-mt-2 font-serif text-4xl font-light">
                {active.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{active.description}</p>
              <dl className="grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Location</dt>
                  <dd className="mt-1">{active.location}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Year</dt>
                  <dd className="mt-1">{active.year}</dd>
                </div>
              </dl>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Materials</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.materials.map((m) => (
                    <li key={m} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-stone">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}

function ProjectCard({ project, delay, onOpen }: { project: Project; delay: number; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ animationDelay: `${delay}ms` }}
      className="group relative block w-full overflow-hidden rounded-2xl text-left ring-1 ring-foreground/10 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <span className="sr-only">Open project: </span>
      <Image
        src={project.image}
        alt={project.alt}
        width={project.width}
        height={project.height}
        loading="lazy"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
      />
      <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between gap-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:p-6 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
        <span>
          <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">
            {project.subtitle} · {project.location}
          </span>
          <span className="mt-1 block font-serif text-2xl md:text-3xl">{project.title}</span>
        </span>
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </span>
    </button>
  )
}
