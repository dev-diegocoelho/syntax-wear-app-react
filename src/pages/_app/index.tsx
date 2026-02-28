import { Categories } from '../../components/Categories'
import { Galery } from '../../components/Galery'
import { Hero } from '../../components/Hero'


import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_app/")({
    component: RouteComponent,
})

function RouteComponent() {
    return(
            <main className='py-10'>
                <Hero />
                <Categories />
                <Galery />
            </main>
    )
}