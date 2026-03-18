import { createFileRoute, Link } from '@tanstack/react-router'
import { ProductList } from '../../../../components/ProductList'
import { products } from '../../../../mocks/products';

export const Route = createFileRoute('/_app/products/category/$category')({
    component: RouteComponent,
})

function RouteComponent() {
    const { category } = Route.useParams();

    const filteredProducts = products.filter(product => (product.category?.name ?? "").toLowerCase() === category.toLowerCase());

    return <div className='container mb-10 pt-44 md:pt54 pb-10 md:px-10 text-center text-black min-h-[80vh] flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-center mb-3'>Lista de Produtos</h1>
        <h2 className='text-center mb-10'>Conforto expecional para suas aventuras do dia-a-dia</h2>
        {
            filteredProducts.length === 0 ? (
                <>
                    <p className='text-center'>Nenhum produto encontrado para essa categoria.</p>
                    <Link to='/products' className='text-accent hover:text-accent-hover underline text-center'>Voltar para produtos</Link>
                </>
            ) : (
                <ProductList products={filteredProducts} />
            )
        }

    </div>
}

